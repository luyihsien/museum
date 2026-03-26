import type { Metadata } from "next"
import { AgendaPage } from "@/components/agenda/agenda-page"

export const metadata: Metadata = {
  title: "論壇議程 | 國際兒童博物館交流論壇",
  description: "依照原始論壇議程 page.html 重構的 React + Tailwind 頁面",
}

export default function AgendaRoutePage() {
  return <AgendaPage />
}
