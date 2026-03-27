"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export function HashRedirect() {
  const router = useRouter()

  useEffect(() => {
    const redirectIfNeeded = () => {
      if (window.location.hash === "#news") {
        router.replace("/news")
        return
      }

      if (window.location.hash === "#highlights") {
        router.replace("/agenda")
        return
      }

      if (window.location.hash === "#location") {
        router.replace("/about")
      }
    }

    redirectIfNeeded()
    window.addEventListener("hashchange", redirectIfNeeded)

    return () => window.removeEventListener("hashchange", redirectIfNeeded)
  }, [router])

  return null
}
