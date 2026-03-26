import type { Metadata } from "next"
import { HomepagePage } from "@/components/homepage/homepage-page"

export const metadata: Metadata = {
  title: "首頁 | 國際兒童博物館交流論壇",
  description: "依照原始 page.html 重構的 React + Tailwind 首頁版面",
}

export default function HomeSubPage() {
  return <HomepagePage />
}
