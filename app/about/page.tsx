import type { Metadata } from "next"
import { AboutPage } from "@/components/about/about-page"

export const metadata: Metadata = {
  title: "關於我們 | 國際兒童博物館交流論壇",
  description: "依照原始關於我們 page.html 重構的 React + Tailwind 頁面",
}

export default function AboutRoutePage() {
  return <AboutPage />
}
