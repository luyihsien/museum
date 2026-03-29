"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react"

const newsItems = [
  {
    date: "2025-05-21",
    title: "【倒數1天】「想像國家兒童未來館」即將展開！",
    href: "http://ncfm2025forum.tnua.edu.tw/news_inside0521.php",
  },
  {
    date: "2025-05-19",
    title: "【特別來賓】荷蘭阿姆斯特丹世界博物館＆美國華府國家兒童博物館",
    href: "http://ncfm2025forum.tnua.edu.tw/news_inside0519.php",
  },
  {
    date: "2025-05-18",
    title: "【兒少參與】系列分享｜「我是兒童，請聽我說未來」兒童參與行動研究工作坊",
    href: "http://ncfm2025forum.tnua.edu.tw/news_inside0518.php",
  },
  {
    date: "2025-05-16",
    title: "【兒少參與】系列分享｜博物館與青少年參與",
    href: "http://ncfm2025forum.tnua.edu.tw/news_inside0516.php",
  },
  {
    date: "2025-05-13",
    title: "【兒少參與】系列分享｜博物館與兒童參與",
    href: "http://ncfm2025forum.tnua.edu.tw/news_inside0513.php",
  },
  {
    date: "2025-05-05",
    title: "【報名截止】與會者正取、備取名單公告",
    href: "http://ncfm2025forum.tnua.edu.tw/news_inside0505.php",
  },
]

const galleryItems = [
  { src: "/index-assets/20250522_00-E5-A0-B1-E5-88-B01-58adfd4f2d.jpg", alt: "論壇活動照片 1" },
  { src: "/index-assets/20250522_02-E6-83-B3-E5-83-8F-E5-9C-8B-E5-AE-B6-E5-85-92-E7-e230b51b25.jpg", alt: "論壇活動照片 2" },
  { src: "/index-assets/20250522_05-E8-88-87-E6-9C-83-E4-BE-86-E8-B3-931-d3e215aee0.jpg", alt: "論壇活動照片 3" },
]

const NEWS_PAGE_SIZE = 3

export function FeatureSection() {
  const [newsPage, setNewsPage] = useState(0)
  const newsPageCount = Math.ceil(newsItems.length / NEWS_PAGE_SIZE)
  const visibleNewsItems = newsItems.slice(
    newsPage * NEWS_PAGE_SIZE,
    newsPage * NEWS_PAGE_SIZE + NEWS_PAGE_SIZE,
  )

  const goPrevNewsPage = () => {
    setNewsPage((current) => (current === 0 ? newsPageCount - 1 : current - 1))
  }

  const goNextNewsPage = () => {
    setNewsPage((current) => (current === newsPageCount - 1 ? 0 : current + 1))
  }

  return (
    <section className="bg-[#f5f2ec]">
      <div className="mx-auto max-w-7xl space-y-12 px-4 py-10 sm:px-6 lg:space-y-16 lg:px-8 lg:py-14">
        <section id="news" className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-bold text-stone-900 sm:text-2xl">最新消息</h2>
            <Link href="/news" className="text-xs font-semibold tracking-[0.16em] text-stone-500">
              VIEW MORE
            </Link>
          </div>

          <div className="grid gap-4 lg:grid-cols-[auto_1fr_auto] lg:items-center">
            <button
              type="button"
              className="hidden h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-400 transition hover:text-stone-700 lg:inline-flex"
              aria-label="上一組消息"
              onClick={goPrevNewsPage}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="grid gap-4 md:grid-cols-3">
              {visibleNewsItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-[1.75rem] bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <p className="text-xs font-semibold tracking-[0.12em] text-stone-400">{item.date}</p>
                  <h3 className="mt-4 text-base font-bold leading-7 text-stone-800">{item.title}</h3>
                </a>
              ))}
            </div>

            <button
              type="button"
              className="hidden h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-400 transition hover:text-stone-700 lg:inline-flex"
              aria-label="下一組消息"
              onClick={goNextNewsPage}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </section>

        <section id="highlights" className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-bold text-stone-900 sm:text-2xl">精彩回顧</h2>
            <Link href="/agenda" className="text-xs font-semibold tracking-[0.16em] text-stone-500">
              VIEW MORE
            </Link>
          </div>

          <div className="grid gap-4 lg:grid-cols-[auto_1fr_auto] lg:items-center">
            <button
              type="button"
              className="hidden h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-400 lg:inline-flex"
              aria-label="上一張照片"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="grid gap-4 md:grid-cols-3">
              {galleryItems.map((item) => (
                <Link
                  key={item.alt}
                  href="/agenda"
                  className="block overflow-hidden rounded-[1.75rem] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="relative aspect-[1.45/1]">
                    <Image src={item.src} alt={item.alt} fill className="object-cover" />
                  </div>
                </Link>
              ))}
            </div>

            <button
              type="button"
              className="hidden h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-400 lg:inline-flex"
              aria-label="下一張照片"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </section>

        <section
          id="location"
          className="overflow-hidden rounded-[2rem] bg-[#39a8d4] text-white shadow-[0_25px_70px_rgba(57,168,212,0.22)]"
        >
          <div className="grid gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-10">
            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold tracking-[0.16em] text-sky-100">論壇地點</p>
              <div className="mt-6 space-y-4">
                <h2 className="text-2xl font-bold">國家圖書館 國際會議廳</h2>
                <p className="max-w-xs text-sm leading-7 text-sky-50">
                  臺北市中正區中山南路 20 號，交通便利，步行即可抵達捷運與公車站點。
                </p>
              </div>
              <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#f2d24f] px-4 py-2 text-sm font-bold text-[#12536f]">
                <MapPin className="h-4 w-4" />
                中正紀念堂站
              </div>
            </div>

            <div className="rounded-[1.6rem] bg-[#f7f1e4] p-3 shadow-inner">
              <div className="relative h-[280px] overflow-hidden rounded-[1.25rem] bg-[linear-gradient(90deg,#f9f3e6_0%,#f9f3e6_48%,#f6d8e7_48%,#f6d8e7_100%)] sm:h-[320px]">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(87,155,199,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(87,155,199,0.18)_1px,transparent_1px)] bg-[size:44px_44px]" />
                <div className="absolute left-[18%] top-0 h-full w-[6px] bg-sky-400/70" />
                <div className="absolute left-0 top-[42%] h-[6px] w-full bg-sky-400/70" />
                <div className="absolute left-[58%] top-0 h-full w-[6px] bg-pink-300/80" />
                <div className="absolute left-0 top-[62%] h-[8px] w-full bg-pink-300/80" />
                <div className="absolute left-[62%] top-[45%] h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500 ring-8 ring-white/70" />
                <div className="absolute left-[56%] top-[52%] rounded-2xl bg-white/95 px-4 py-3 text-sm font-semibold text-stone-700 shadow-lg">
                  國家圖書館
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
