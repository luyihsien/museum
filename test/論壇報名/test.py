from playwright.sync_api import sync_playwright

url = "http://ncfm2025forum.tnua.edu.tw/signup.php"

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1440, "height": 2000})
    page.goto(url, wait_until="networkidle")

    # 取得 render 完的 HTML
    html = page.content()
    with open("page.html", "w", encoding="utf-8") as f:
        f.write(html)

    # 截圖
    page.screenshot(path="page.png", full_page=True)

    print("已儲存 page.html 與 page.png")
    browser.close()