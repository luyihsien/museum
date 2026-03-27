import type { Metadata } from "next"
import { SignupPage } from "@/components/signup/signup-page"

export const metadata: Metadata = {
  title: "論壇報名 | 國際兒童博物館交流論壇",
  description: "依照原始論壇報名 page.html 重構的 React + Tailwind 頁面",
}

export default function SignupRoutePage() {
  return <SignupPage />
}
