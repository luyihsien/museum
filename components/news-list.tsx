import Link from "next/link"

interface NewsItem {
  id: string
  date: string
  title: string
  category?: string
}

const newsItems: NewsItem[] = [
  {
    id: "1",
    date: "2025-06-12",
    title: "【精彩回顧】閉幕與綜合座談：國家兒童未來館將成為兒童秘密基地，讓想像從今天開始",
    category: "精彩回顧"
  },
  {
    id: "2",
    date: "2025-06-12",
    title: "【精彩回顧】5/23「未來素養」用心驅動科技，面對未來素養：談兒少的媒體識讀與學習",
    category: "精彩回顧"
  },
  {
    id: "3",
    date: "2025-06-12",
    title: "【精彩回顧】5/23「想像創造」讓兒童與青少年透過想像、創造力，走向未來",
    category: "精彩回顧"
  },
  {
    id: "4",
    date: "2025-06-12",
    title: "【精彩回顧】5/23「永續價值」閱讀到遊戲，共創兒童學習與永續發展的未來場域",
    category: "精彩回顧"
  },
  {
    id: "5",
    date: "2025-06-10",
    title: "【精彩回顧】5/22「綜合座談」開館只是起點，傾聽與對話讓博物館持續成長",
    category: "精彩回顧"
  },
  {
    id: "6",
    date: "2025-06-10",
    title: "【精彩回顧】5/22 「兒童權利」如何成為一個善待兒童的社會，從理解兒童權利開始",
    category: "精彩回顧"
  },
  {
    id: "7",
    date: "2025-06-10",
    title: "【精彩回顧】5/22「多元共融」參與借力，展覽共融：國際博物館的多元關懷實踐案例",
    category: "精彩回顧"
  },
  {
    id: "8",
    date: "2025-06-10",
    title: "【精彩回顧】5/22 「遊戲探索」探索未來的起點：遊戲連結世代與價值",
    category: "精彩回顧"
  },
  {
    id: "9",
    date: "2025-06-10",
    title: "【精彩回顧】5/22 開幕致詞與「想像國家兒童未來館」",
    category: "精彩回顧"
  },
  {
    id: "10",
    date: "2025-05-21",
    title: "【倒數1天】「想像國家兒童未來館」即將展開！",
    category: "公告"
  },
]

export function NewsList() {
  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <h2 className="mb-8 text-2xl font-bold text-foreground lg:text-3xl text-balance">
          最新消息
        </h2>
        
        <ul className="space-y-1">
          {newsItems.map((item) => (
            <li key={item.id}>
              <Link
                href={`/news/${item.id}`}
                className="group flex flex-col gap-1 border-b border-border py-4 transition-colors hover:bg-muted/50 sm:flex-row sm:items-center sm:gap-4 px-2 -mx-2 rounded"
              >
                <time 
                  dateTime={item.date}
                  className="shrink-0 text-sm font-medium text-primary"
                >
                  {item.date}
                </time>
                <span className="text-foreground group-hover:text-primary transition-colors text-pretty">
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
