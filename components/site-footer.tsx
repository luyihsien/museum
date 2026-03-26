import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <span className="text-sm font-bold text-primary-foreground">NCFM</span>
              </div>
              <div>
                <h3 className="font-bold text-background">國際兒童博物館交流論壇</h3>
                <p className="text-xs text-background/70">
                  International Children&apos;s Museum Exchange Forum
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-background/70 leading-relaxed">
              2025國際兒童博物館交流論壇致力於促進國際間兒童博物館的交流與合作，
              為兒童創造更美好的學習與探索空間。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-background">快速連結</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-background/70 hover:text-background transition-colors">
                  關於論壇
                </Link>
              </li>
              <li>
                <Link href="/agenda" className="text-background/70 hover:text-background transition-colors">
                  議程
                </Link>
              </li>
              <li>
                <Link href="/speakers" className="text-background/70 hover:text-background transition-colors">
                  講者介紹
                </Link>
              </li>
              <li>
                <Link href="/highlights" className="text-background/70 hover:text-background transition-colors">
                  精彩回顧
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-semibold text-background">聯絡資訊</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <span className="block">國立臺北藝術大學</span>
                <span className="block">Taipei National University of the Arts</span>
              </li>
              <li className="pt-2">
                <span className="block">地址：112台北市北投區學園路1號</span>
              </li>
              <li>
                <span className="block">Email: ncfm2025@tnua.edu.tw</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/20 pt-6 text-center text-sm text-background/60">
          <p>&copy; 2025 國際兒童博物館交流論壇. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
