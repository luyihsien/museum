import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/homepage/header"
import { Footer } from "@/components/homepage/footer"

const newsItems = [
  {
    date: "2025-06-12",
    title: "【精彩回顧】閉幕與綜合座談：國家兒童未來館將成為兒童秘密基地，讓想像從今天開始",
    href: "http://ncfm2025forum.tnua.edu.tw/news_inside0612_1.php",
  },
  {
    date: "2025-06-12",
    title: "【精彩回顧】5/23「未來素養」用心驅動科技，面對未來素養：談兒少的媒體識讀與學習",
    href: "http://ncfm2025forum.tnua.edu.tw/news_inside0612_2.php",
  },
  {
    date: "2025-06-12",
    title: "【精彩回顧】5/23「想像創造」讓兒童與青少年透過想像、創造力，走向未來",
    href: "http://ncfm2025forum.tnua.edu.tw/news_inside0612_3.php",
  },
  {
    date: "2025-06-12",
    title: "【精彩回顧】5/23「永續價值」閱讀到遊戲，共創兒童學習與永續發展的未來場域",
    href: "http://ncfm2025forum.tnua.edu.tw/news_inside0612_4.php",
  },
  {
    date: "2025-06-10",
    title: "【精彩回顧】5/22「綜合座談」開館只是起點，傾聽與對話讓博物館持續成長",
    href: "http://ncfm2025forum.tnua.edu.tw/news_inside0610_01.php",
  },
  {
    date: "2025-06-10",
    title: "【精彩回顧】5/22「兒童權利」如何成為一個善待兒童的社會，從理解兒童權利開始",
    href: "http://ncfm2025forum.tnua.edu.tw/news_inside0610_02.php",
  },
  {
    date: "2025-06-10",
    title: "【精彩回顧】5/22「多元共融」參與借力，展覽共融：國際博物館的多元關懷實踐案例",
    href: "http://ncfm2025forum.tnua.edu.tw/news_inside0610_03.php",
  },
  {
    date: "2025-06-10",
    title: "【精彩回顧】5/22「遊戲探索」探索未來的起點：遊戲連結世代與價值",
    href: "http://ncfm2025forum.tnua.edu.tw/news_inside0610_04.php",
  },
  {
    date: "2025-06-10",
    title: "【精彩回顧】5/22 開幕致詞與「想像國家兒童未來館」",
    href: "http://ncfm2025forum.tnua.edu.tw/news_inside0610_05.php",
  },
  {
    date: "2025-05-21",
    title: "【倒數1天】「想像國家兒童未來館」即將展開！",
    href: "http://ncfm2025forum.tnua.edu.tw/news_inside0521.php",
  },
]

const galleryItems = [
  "20250522_00-E5-A0-B1-E5-88-B01-58adfd4f2d.jpg",
  "20250522_00-E5-A0-B1-E5-88-B02-14cace3090.jpg",
  "20250522_00-E5-A0-B1-E5-88-B03-efb8fb6926.jpg",
  "20250522_00-E5-A0-B1-E5-88-B04-5aa4680d6e.jpg",
  "20250522_00-E5-A0-B1-E5-88-B05-7671894fc2.jpg",
  "20250522_00-E5-A0-B1-E5-88-B06-0b79a22f4a.jpg",
  "20250522_01-E9-96-8B-E5-B9-951-f0958111b3.jpg",
  "20250522_01-E9-96-8B-E5-B9-952-516e8337b7.jpg",
  "20250522_01-E9-96-8B-E5-B9-953_-E4-B8-BB-E6-8C-81-E4-BA-BA-E-0459744411.jpg",
  "20250522_01-E9-96-8B-E5-B9-954_-E5-BE-90-E5-AE-9C-E5-90-9B-E-1541c57bdb.jpg",
  "20250522_01-E9-96-8B-E5-B9-955-3ee3130c97.jpg",
  "20250522_02-E6-83-B3-E5-83-8F-E5-9C-8B-E5-AE-B6-E5-85-92-E7-e230b51b25.jpg",
  "20250522_02-E6-83-B3-E5-83-8F-E5-9C-8B-E5-AE-B6-E5-85-92-E7-d7e68dc856.jpg",
  "20250522_02-E6-83-B3-E5-83-8F-E5-9C-8B-E5-AE-B6-E5-85-92-E7-a13a0089d2.jpg",
  "20250522_02-E6-83-B3-E5-83-8F-E5-9C-8B-E5-AE-B6-E5-85-92-E7-ab0747736a.jpg",
  "20250522_02-E6-83-B3-E5-83-8F-E5-9C-8B-E5-AE-B6-E5-85-92-E7-7477111fb6.jpg",
  "20250522_02-E6-83-B3-E5-83-8F-E5-9C-8B-E5-AE-B6-E5-85-92-E7-527ff69b22.jpg",
  "20250522_02-E6-83-B3-E5-83-8F-E5-9C-8B-E5-AE-B6-E5-85-92-E7-f2dc2bfe22.jpg",
  "20250522_02-E6-83-B3-E5-83-8F-E5-9C-8B-E5-AE-B6-E5-85-92-E7-9249b597a9.jpg",
  "20250522_03-E9-81-8A-E6-88-B2-E6-8E-A2-E7-B4-A21_-E5-9C-8B-E-756b393596.jpg",
  "20250522_03-E9-81-8A-E6-88-B2-E6-8E-A2-E7-B4-A22_-E6-97-A5-E-db3018c478.jpg",
  "20250522_03-E9-81-8A-E6-88-B2-E6-8E-A2-E7-B4-A23-3838ba8749.jpg",
  "20250522_03-E9-81-8A-E6-88-B2-E6-8E-A2-E7-B4-A24_-E5-9C-8B-E-aab4a80540.jpg",
  "20250522_03-E9-81-8A-E6-88-B2-E6-8E-A2-E7-B4-A25_-E8-88-87-E-d7ae013c74.jpg",
  "20250522_03-E9-81-8A-E6-88-B2-E6-8E-A2-E7-B4-A26_-E5-9C-8B-E-1e4f64df4e.jpg",
  "20250522_03-E9-81-8A-E6-88-B2-E6-8E-A2-E7-B4-A27_-E5-9C-8B-E-f735cad56b.jpg",
  "20250522_03-E9-81-8A-E6-88-B2-E6-8E-A2-E7-B4-A28_-E6-97-A5-E-1d9f589112.jpg",
  "20250522_03-E9-81-8A-E6-88-B2-E6-8E-A2-E7-B4-A29_-E5-9C-8B-E-ae3177fdb9.jpg",
  "20250522_04-E5-A4-9A-E5-85-83-E5-85-B1-E8-9E-8D1_-E5-9C-8B-E-5e3194fd93.jpg",
  "20250522_04-E5-A4-9A-E5-85-83-E5-85-B1-E8-9E-8D2_-E7-BE-8E-E-443331660b.jpg",
  "20250522_04-E5-A4-9A-E5-85-83-E5-85-B1-E8-9E-8D3_-E7-BE-8E-E-7c52d85994.jpg",
  "20250522_04-E5-A4-9A-E5-85-83-E5-85-B1-E8-9E-8D4_-E5-9C-8B-E-0603b706fe.jpg",
  "20250522_04-E5-A4-9A-E5-85-83-E5-85-B1-E8-9E-8D5_-E5-9C-8B-E-3958fba75f.jpg",
  "20250522_04-E5-A4-9A-E5-85-83-E5-85-B1-E8-9E-8D6_-E6-A1-83-E-85e93f6426.jpg",
  "20250522_04-E5-A4-9A-E5-85-83-E5-85-B1-E8-9E-8D7-817259e6e1.jpg",
  "20250522_04-E5-A4-9A-E5-85-83-E5-85-B1-E8-9E-8D8_-E7-BE-8E-E-4e900579c8.jpg",
  "20250522_05-E8-88-87-E6-9C-83-E4-BE-86-E8-B3-931-a8645c5575.jpg",
  "20250522_05-E8-88-87-E6-9C-83-E4-BE-86-E8-B3-932-de2750737c.jpg",
  "20250522_05-E8-88-87-E6-9C-83-E4-BE-86-E8-B3-933-7d6d0b8aea.jpg",
  "20250522_05-E8-88-87-E6-9C-83-E4-BE-86-E8-B3-934-68b687b906.jpg",
  "20250522_05-E8-88-87-E6-9C-83-E4-BE-86-E8-B3-935-6647b68c39.jpg",
  "20250522_06-E5-85-92-E7-AB-A5-E6-AC-8A-E5-88-A91_-E5-9C-8B-E-1bc0880ba6.jpg",
  "20250522_06-E5-85-92-E7-AB-A5-E6-AC-8A-E5-88-A92_-E5-9C-8B-E-22e83ff772.jpg",
  "20250522_06-E5-85-92-E7-AB-A5-E6-AC-8A-E5-88-A93_-E8-87-BA-E-31e9e72e4b.jpg",
  "20250522_06-E5-85-92-E7-AB-A5-E6-AC-8A-E5-88-A94_-E8-B6-85-E-1143ffb86c.jpg",
  "20250522_06-E5-85-92-E7-AB-A5-E6-AC-8A-E5-88-A95_-E5-85-92-E-3e69348798.jpg",
  "20250522_06-E5-85-92-E7-AB-A5-E6-AC-8A-E5-88-A96-7f7abb7c0f.jpg",
  "20250522_07-E7-B6-9C-E5-90-88-E5-BA-A7-E8-AB-87-9e5621534d.jpg",
  "20250523_01-E6-B0-B8-E7-BA-8C-E5-83-B9-E5-80-BC1_-E5-9C-8B-E-4966b40918.jpg",
  "20250523_01-E6-B0-B8-E7-BA-8C-E5-83-B9-E5-80-BC2_-E5-A4-A9-E-fefd3c424f.jpg",
  "20250523_01-E6-B0-B8-E7-BA-8C-E5-83-B9-E5-80-BC3_-E5-9C-8B-E-2346cc253b.jpg",
  "20250523_01-E6-B0-B8-E7-BA-8C-E5-83-B9-E5-80-BC4_-E5-85-92-E-bf205fd2b3.jpg",
  "20250523_01-E6-B0-B8-E7-BA-8C-E5-83-B9-E5-80-BC5_-E5-A4-A9-E-a4e89c7769.jpg",
  "20250523_01-E6-B0-B8-E7-BA-8C-E5-83-B9-E5-80-BC6-5d69e70253.jpg",
  "20250523_01-E6-B0-B8-E7-BA-8C-E5-83-B9-E5-80-BC7_-E5-9C-8B-E-4f24faded3.jpg",
  "20250523_01-E6-B0-B8-E7-BA-8C-E5-83-B9-E5-80-BC8-b4a1875536.jpg",
  "20250523_02-E6-83-B3-E5-83-8F-E5-89-B5-E9-80-A01_-E9-9B-B2-E-927ad55e48.jpg",
  "20250523_02-E6-83-B3-E5-83-8F-E5-89-B5-E9-80-A02-bc493e1bc0.jpg",
  "20250523_02-E6-83-B3-E5-83-8F-E5-89-B5-E9-80-A03_-E7-BE-8E-E-67af90ebf7.jpg",
  "20250523_02-E6-83-B3-E5-83-8F-E5-89-B5-E9-80-A04_-E5-9C-8B-E-70ca452437.jpg",
  "20250523_02-E6-83-B3-E5-83-8F-E5-89-B5-E9-80-A05_-E5-9C-8B-E-df922ff2cc.jpg",
  "20250523_02-E6-83-B3-E5-83-8F-E5-89-B5-E9-80-A06_-E5-9C-8B-E-7972647c1b.jpg",
  "20250523_02-E6-83-B3-E5-83-8F-E5-89-B5-E9-80-A07-b4ccc4a9ac.jpg",
  "20250523_02-E6-83-B3-E5-83-8F-E5-89-B5-E9-80-A08_-E8-87-BA-E-255d470661.jpg",
  "20250523_02-E6-83-B3-E5-83-8F-E5-89-B5-E9-80-A09_-E5-9C-8B-E-deaa66a255.jpg",
  "20250523_03-E8-88-87-E6-9C-83-E4-BE-86-E8-B3-931-89e375cefc.jpg",
  "20250523_03-E8-88-87-E6-9C-83-E4-BE-86-E8-B3-932-0310b3f4e7.jpg",
  "20250523_03-E8-88-87-E6-9C-83-E4-BE-86-E8-B3-933-0a2a602d5a.jpg",
  "20250523_03-E8-88-87-E6-9C-83-E4-BE-86-E8-B3-934-519450b841.jpg",
  "20250523_04-E6-9C-AA-E4-BE-86-E7-B4-A0-E9-A4-8A1_-E5-9C-8B-E-de9c326966.jpg",
  "20250523_04-E6-9C-AA-E4-BE-86-E7-B4-A0-E9-A4-8A2_-E5-B0-91-E-8394834ccb.jpg",
  "20250523_04-E6-9C-AA-E4-BE-86-E7-B4-A0-E9-A4-8A3_-E5-9C-8B-E-372f199a0b.jpg",
  "20250523_04-E6-9C-AA-E4-BE-86-E7-B4-A0-E9-A4-8A4_-E9-BB-83-E-8688c9c264.jpg",
  "20250523_04-E6-9C-AA-E4-BE-86-E7-B4-A0-E9-A4-8A5_-E5-9C-8B-E-8c93f12980.jpg",
  "20250523_04-E6-9C-AA-E4-BE-86-E7-B4-A0-E9-A4-8A6-cb268af347.jpg",
  "20250523_04-E6-9C-AA-E4-BE-86-E7-B4-A0-E9-A4-8A7_-E8-87-BA-E-b01803e61b.jpg",
  "20250523_05-E7-B6-9C-E5-90-88-E8-A8-8E-E8-AB-96-0719c2654a.jpg",
  "20250523_06-E9-96-89-E5-B9-951_-E6-96-87-E5-8C-96-E9-83-A8-E-fc700d1e84.jpg",
  "20250523_06-E9-96-89-E5-B9-952_-E6-96-87-E5-8C-96-E9-83-A8-E-ed07375d6e.jpg",
  "20250523_06-E9-96-89-E5-B9-953-5b5c20cf38.jpg",
].map((file, index) => ({
  src: `/news-assets/${file}`,
  alt: `精彩回顧 ${String(index + 1).padStart(2, "0")}`,
}))

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
              <a
                key={`${item.date}-${item.title}`}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="grid gap-3 py-5 transition hover:bg-stone-50 sm:grid-cols-[140px_1fr] sm:items-start sm:px-3"
              >
                <p className="text-sm font-semibold tracking-[0.12em] text-stone-400">{item.date}</p>
                <h2 className="text-base font-bold leading-7 text-stone-800 underline-offset-4 hover:underline sm:text-lg">
                  {item.title}
                </h2>
              </a>
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
