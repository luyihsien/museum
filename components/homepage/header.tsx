"use client"

import { useState } from "react"
import Link from "next/link"
import { Globe2, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "首頁" },
  { href: "/news", label: "最新消息" },
  { href: "/agenda", label: "論壇議程" },
  { href: "/#location", label: "論壇地點" },
  { href: "/#footer", label: "關於我們" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0">
          <div className="text-stone-900">
            <p className="text-xs font-medium tracking-[0.24em] text-stone-500">2025</p>
            <p className="text-sm font-bold leading-tight sm:text-base">國際兒童博物館交流論壇</p>
            <p className="text-[11px] text-stone-500 sm:text-xs">
              International Children's Museum Forum
            </p>
          </div>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-stone-600 transition hover:text-sky-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-2 rounded-full border border-stone-200 bg-stone-50 p-1 lg:flex">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-stone-500">
            <Globe2 className="h-4 w-4" />
          </span>
          <button className="rounded-full bg-orange-100 px-3 py-1.5 text-xs font-semibold text-orange-600">
            繁體中文
          </button>
          <button className="rounded-full px-3 py-1.5 text-xs font-semibold text-stone-500 transition hover:text-stone-900">
            English
          </button>
        </div>

        <button
          type="button"
          className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 text-stone-700 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="切換選單"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-stone-200 bg-white transition-[max-height] duration-300 lg:hidden",
          open ? "max-h-96" : "max-h-0 border-t-0",
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-5 sm:px-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-stone-700"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
