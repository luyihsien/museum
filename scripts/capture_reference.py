from __future__ import annotations

import argparse
import hashlib
import json
import mimetypes
import re
from pathlib import Path
from typing import Iterable
from urllib.parse import urljoin, urlparse
from urllib.request import Request, urlopen

from playwright.sync_api import sync_playwright


USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/130.0.0.0 Safari/537.36"
)

BACKGROUND_URL_PATTERN = re.compile(r'url\((["\']?)(.*?)\1\)')


def build_asset_name(url: str, content_type: str | None, used_names: set[str]) -> str:
    parsed = urlparse(url)
    suffix = Path(parsed.path).suffix.lower()

    if not suffix and content_type:
        guessed = mimetypes.guess_extension(content_type.split(";")[0].strip())
        suffix = guessed or ".bin"

    if not suffix:
        suffix = ".bin"

    stem = Path(parsed.path).stem or "asset"
    stem = re.sub(r"[^a-zA-Z0-9_-]+", "-", stem).strip("-") or "asset"
    stem = stem[:60].rstrip("-") or "asset"
    digest = hashlib.sha1(url.encode("utf-8")).hexdigest()[:10]
    candidate = f"{stem}-{digest}{suffix}"

    while candidate in used_names:
        digest = hashlib.sha1(f"{url}-{candidate}".encode("utf-8")).hexdigest()[:10]
        candidate = f"{stem}-{digest}{suffix}"

    used_names.add(candidate)
    return candidate


def fetch_binary(url: str) -> tuple[bytes, str | None]:
    request = Request(url, headers={"User-Agent": USER_AGENT})
    with urlopen(request, timeout=30) as response:
        return response.read(), response.headers.get("Content-Type")


def collect_asset_urls(page, base_url: str) -> list[str]:
    asset_urls = page.evaluate(
        """
        () => {
          const urls = new Set();

          const addUrl = (value) => {
            if (!value) return;
            urls.add(value);
          };

          document.querySelectorAll("img").forEach((img) => {
            addUrl(img.currentSrc || img.src || img.getAttribute("src"));
            addUrl(img.getAttribute("data-src"));
            addUrl(img.getAttribute("srcset"));
          });

          document.querySelectorAll("source").forEach((source) => {
            addUrl(source.srcset || source.getAttribute("srcset"));
          });

          document.querySelectorAll("*").forEach((el) => {
            const style = window.getComputedStyle(el);
            addUrl(style.backgroundImage);
            addUrl(style.background);
          });

          return Array.from(urls).filter(Boolean);
        }
        """
    )

    results: set[str] = set()

    for item in asset_urls:
        if "url(" in item:
            for _, match in BACKGROUND_URL_PATTERN.findall(item):
                if match and not match.startswith("data:"):
                    results.add(urljoin(base_url, match))
            continue

        for candidate in item.split(","):
            cleaned = candidate.strip().split(" ")[0]
            if cleaned and not cleaned.startswith("data:"):
                results.add(urljoin(base_url, cleaned))

    return sorted(results)


def download_assets(urls: Iterable[str], assets_dir: Path) -> list[dict[str, str]]:
    assets_dir.mkdir(parents=True, exist_ok=True)
    used_names: set[str] = set()
    manifest: list[dict[str, str]] = []

    for url in urls:
        try:
            body, content_type = fetch_binary(url)
        except Exception as exc:
            manifest.append({"url": url, "status": f"error: {exc}"})
            continue

        filename = build_asset_name(url, content_type, used_names)
        output_path = assets_dir / filename
        output_path.write_bytes(body)
        manifest.append(
            {
                "url": url,
                "file": str(output_path.name),
                "content_type": content_type or "",
                "status": "ok",
            }
        )

    return manifest


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Capture a reference page as page.html, page.png, and downloaded assets."
    )
    parser.add_argument("--url", required=True, help="Source page URL")
    parser.add_argument("--out", required=True, help="Output directory")
    parser.add_argument("--width", type=int, default=1440, help="Viewport width")
    parser.add_argument("--height", type=int, default=2000, help="Viewport height")
    parser.add_argument("--delay-ms", type=int, default=1500, help="Extra wait after load")
    args = parser.parse_args()

    output_dir = Path(args.out).resolve()
    output_dir.mkdir(parents=True, exist_ok=True)
    assets_dir = output_dir / "assets"

    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": args.width, "height": args.height})
        page.set_extra_http_headers({"User-Agent": USER_AGENT})
        page.goto(args.url, wait_until="networkidle")
        page.wait_for_timeout(args.delay_ms)

        html = page.content()
        (output_dir / "page.html").write_text(html, encoding="utf-8")
        page.screenshot(path=str(output_dir / "page.png"), full_page=True)

        assets = collect_asset_urls(page, args.url)
        browser.close()

    manifest = download_assets(assets, assets_dir)
    (output_dir / "assets-manifest.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )

    print(f"Saved HTML to: {output_dir / 'page.html'}")
    print(f"Saved screenshot to: {output_dir / 'page.png'}")
    print(f"Saved assets to: {assets_dir}")
    print(f"Saved manifest to: {output_dir / 'assets-manifest.json'}")


if __name__ == "__main__":
    main()
