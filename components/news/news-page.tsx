import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/homepage/header"
import { Footer } from "@/components/homepage/footer"

const newsItems = [
  {
    date: "2025-06-12",
    title: "【精彩回顧】閉幕與綜合座談：國家兒童未來館將成為兒童秘密基地，讓想像從今天開始",
  },
  {
    date: "2025-06-12",
    title: "【精彩回顧】5/23「未來素養」用心驅動科技，面對未來素養：談兒少的媒體識讀與學習",
  },
  {
    date: "2025-06-12",
    title: "【精彩回顧】5/23「想像創造」讓兒童與青少年透過想像、創造力，走向未來",
  },
  {
    date: "2025-06-12",
    title: "【精彩回顧】5/23「永續價值」閱讀到遊戲，共創兒童學習與永續發展的未來場域",
  },
  {
    date: "2025-06-10",
    title: "【精彩回顧】5/22「綜合座談」開館只是起點，傾聽與對話讓博物館持續成長",
  },
  {
    date: "2025-06-10",
    title: "【精彩回顧】5/22「兒童權利」如何成為一個善待兒童的社會，從理解兒童權利開始",
  },
  {
    date: "2025-06-10",
    title: "【精彩回顧】5/22「多元共融」參與借力，展覽共融：國際博物館的多元關懷實踐案例",
  },
  {
    date: "2025-06-10",
    title: "【精彩回顧】5/22「遊戲探索」探索未來的起點：遊戲連結世代與價值",
  },
  {
    date: "2025-06-10",
    title: "【精彩回顧】5/22 開幕致詞與「想像國家兒童未來館」",
  },
  {
    date: "2025-05-21",
    title: "【倒數1天】「想像國家兒童未來館」即將展開！",
  },
]

const galleryItems = Array.from({ length: 36 }, (_, index) => {
  const sources = ["/placeholder.jpg", "/placeholder-logo.png", "/placeholder-user.jpg"]

  return {
    src: sources[index % sources.length],
    alt: `精彩回顧 ${String(index + 1).padStart(2, "0")}`,
  }
})

export function NewsPage() {
  return (
    <div className="min-h-screen bg-[#f8f4ed] text-stone-900">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <section className="rounded-[2rem] border border-stone-200 bg-white px-6 py-8 shadow-sm sm:px-8 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-stone-200 pb-6">
            <div>
              <p className="text-sm font-semibold tracking-[0.18em] text-sky-600">Forum Updates</p>
              <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">最新消息</h1>
            </div>
            <Link
              href="/"
              className="rounded-full border border-stone-200 px-4 py-2 text-sm font-semibold text-stone-600 transition hover:border-sky-300 hover:text-sky-700"
            >
              回到首頁
            </Link>
          </div>

          <div className="mt-6 divide-y divide-stone-200">
            {newsItems.map((item) => (
              <article
                key={`${item.date}-${item.title}`}
                className="grid gap-3 py-5 transition hover:bg-stone-50 sm:grid-cols-[140px_1fr] sm:items-start sm:px-3"
              >
                <p className="text-sm font-semibold tracking-[0.12em] text-stone-400">{item.date}</p>
                <h2 className="text-base font-bold leading-7 text-stone-800 sm:text-lg">{item.title}</h2>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-stone-200 bg-white px-6 py-8 shadow-sm sm:px-8 lg:px-10">
          <div className="border-b border-stone-200 pb-6">
            <p className="text-sm font-semibold tracking-[0.18em] text-sky-600">Forum Gallery</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">精彩回顧</h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {galleryItems.map((item) => (
              <article
                key={item.alt}
                className="overflow-hidden rounded-[1.35rem] border border-stone-200 bg-stone-50"
              >
                <div className="relative aspect-[1.2/1]">
                  <Image src={item.src} alt={item.alt} fill className="object-cover" />
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
