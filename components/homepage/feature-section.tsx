import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react"

const newsItems = [
  {
    date: "2025-05-12",
    title: "【精彩回顧】國際與在地館舍交流，聚焦想像今天與未來",
  },
  {
    date: "2025-05-12",
    title: "【精華回顧】5/23「未來素養」兒童參與、設計與學習",
  },
  {
    date: "2025-05-12",
    title: "【精華回顧】5/23「博物館」創造與共創的年度提案",
  },
]

const galleryItems = [
  { src: "/placeholder.jpg", alt: "論壇活動照片 1" },
  { src: "/placeholder-logo.png", alt: "論壇活動照片 2" },
  { src: "/placeholder-user.jpg", alt: "論壇活動照片 3" },
]

const organizers = [
  { title: "指導單位", content: "文化部" },
  { title: "主辦單位", content: "國家兒童未來館籌備處" },
  { title: "執行單位", content: "博物館與文化推廣團隊" },
]

export function FeatureSection() {
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
              className="hidden h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-400 lg:inline-flex"
              aria-label="上一則消息"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="grid gap-4 md:grid-cols-3">
              {newsItems.map((item) => (
                <Link
                  key={item.title}
                  href="/news"
                  className="block rounded-[1.75rem] bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <p className="text-xs font-semibold tracking-[0.12em] text-stone-400">{item.date}</p>
                  <h3 className="mt-4 text-base font-bold leading-7 text-stone-800">{item.title}</h3>
                </Link>
              ))}
            </div>

            <button
              type="button"
              className="hidden h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-400 lg:inline-flex"
              aria-label="下一則消息"
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

        <div className="grid gap-6 border-t border-stone-200 pt-10 text-center md:grid-cols-3 md:text-left">
          {organizers.map((item) => (
            <div
              key={item.title}
              className="space-y-3 border-stone-200 md:border-r md:pr-6 last:border-r-0 last:pr-0"
            >
              <p className="text-sm font-semibold tracking-[0.14em] text-stone-400">{item.title}</p>
              <p className="text-base font-bold text-stone-700">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
