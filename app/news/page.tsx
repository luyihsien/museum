import type { Metadata } from "next"
import { NewsPage } from "@/components/news/news-page"

export const metadata: Metadata = {
  title: "最新消息 | 國際兒童博物館交流論壇",
  description: "依照原始最新消息 page.html 重構的 React + Tailwind 頁面",
}

export default function NewsRoutePage() {
  return <NewsPage />
}
