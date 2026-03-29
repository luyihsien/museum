import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Header } from "@/components/homepage/header"
import { Footer } from "@/components/homepage/footer"

const caseStudies = [
  {
    title: "國立故宮博物院兒童學藝中心",
    source: "圖片來源：國立故宮博物院官網",
    description:
      "2008 年成立、2020 年更新，透過數位科技重新詮釋精選典藏文物，並引入吉祥物互動，打造全年齡參與和世代共融的遊戲空間。",
    href: "https://theme.npm.edu.tw/children/",
    image: "/about-assets/0image5-3156f6a7dc.png",
  },
  {
    title: "國立歷史博物館兒童創意共學空間",
    source: "圖片來源：國立歷史博物館官網",
    description:
      "將原閱覽空間轉化為以時間為主題的兒童共學空間，透過多感官、多媒體與共讀形式，服務 5-12 歲家庭觀眾。",
    href: "https://event.culture.tw/mocweb/reg/NMH/ExhibitionDetail.init.ctr?actId=40050&utm_source=moc&utm_medium=query&utm_campaign=40050",
    image: "/about-assets/0image22-5b63efbc48.png",
  },
  {
    title: "臺北市立美術館兒童藝術教育中心",
    source: "圖片來源：臺北市立美術館官網",
    description:
      "以教育計畫為核心規劃主題展示和創作工坊，結合典藏與當代藝術教育思維，創造新的知識生產方式與參與式體驗。",
    href: "https://www.tfam.museum/kid/index.aspx?ddlLang=zh-tw",
    image: "/about-assets/0image14-cc1e3d14d3.png",
  },
  {
    title: "國立臺灣博物館兒童探索展",
    source: "圖片來源：國立臺灣博物館官網",
    description:
      "透過故事、標本、文物與互動裝置，帶領兒童認識臺灣地理環境、多元文化與自然生態，培養理解與尊重。",
    href: "https://event.culture.tw/mocweb/reg/NTM/Detail.init.ctr?actId=00101",
    image: "/about-assets/0image50-54df929da6.png",
  },
  {
    title: "台北偶戲館",
    source: "圖片來源：台北偶戲館官網",
    description:
      "透過互動裝置、操作體驗與親子共讀說故事，推廣臺灣及國際偶戲教育，讓觀眾理解並想像偶戲的表演世界。",
    href: "https://www.pact.taipei/index.aspx",
    image: "/about-assets/0image13-f59d310348.png",
  },
  {
    title: "國立臺灣科學教育館",
    source: "圖片來源：臺灣科學教育館",
    description:
      "常設展涵蓋生命科學、自然科學、數學與地球科學等主題，結合特展，營造互動、有趣且適合探索的科學藝術基地。",
    href: "https://www.ntsec.gov.tw/",
    image: "/about-assets/0image47-f73003e88a.jpg",
  },
  {
    title: "國立海洋科技博物館兒童廳",
    source: "圖片來源：海洋科技博物館",
    description:
      "以海洋為主題，為 4-8 歲兒童及陪伴者打造自由遊戲與探索空間，透過情境展示與角色扮演探索人與海洋的關係。",
    href: "https://www.nmmst.gov.tw/chhtml/",
    image: "/about-assets/0image11-332db3937d.png",
  },
  {
    title: "桃園市兒童美術館",
    source: "圖片來源：桃園市兒童美術館粉絲專頁",
    description:
      "以兒童參與為核心，從展演、教育推廣、社區參與到專業研究，打造親子友善且具研究視角的藝文空間。",
    href: "https://tmofa.tycg.gov.tw/ch/visit/information/chunglu",
    image: "/about-assets/0image38-fc3bc78932.jpg",
  },
  {
    title: "國立臺灣美術館臺灣兒童藝術基地",
    source: "圖片來源：國立臺灣美術館",
    description:
      "以臺灣美術史典藏為基礎，打造 0-12 歲兒童與陪伴者共同探索、學習與創造的基地，鼓勵兒童參與詮釋與創作。",
    href: "https://www.ntmofa.gov.tw/child/cp.aspx?n=1646",
    image: "/about-assets/0image31-6a3e6324fd.png",
  },
  {
    title: "嘉義市立美術館藝術教育區",
    source: "圖片來源：嘉義市立美術館",
    description:
      "由學童透過策展工作坊規劃常設展，並依兒童發展條件優化互動與遊具設計，實踐由兒童為兒童設計的場域。",
    href: "https://chiayiartmuseum.chiayi.gov.tw/Visit/AncillarySpace.html",
    image: "/about-assets/0image3-8f86da73e8.jpg",
  },
  {
    title: "東京玩具美術館",
    source: "圖片來源：東京玩具美術館官網",
    description:
      "由非營利組織經營，強調以玩具探索世界與傳承文化，讓 0-100 歲訪客都能透過遊戲學習與建立社會連結。",
    href: "https://art-play.or.jp/ttm/guide/plan-elementary.html",
    image: "/about-assets/0image7-f048317f4b.png",
  },
  {
    title: "國際兒童圖書館",
    source: "圖片來源：國際兒童圖書館官網",
    description:
      "日本唯一依國立國會圖書館法設立的兒童圖書館，透過豐富資源支持兒童圖書相關活動與研究，以童書連結世界。",
    href: "https://www.kodomo.go.jp/index.html",
    image: "/about-assets/0image27-6738d93801.jpg",
  },
]

function SectionCard({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="rounded-[2rem] border border-stone-200 bg-white px-6 py-8 shadow-sm sm:px-8 lg:px-10">
      <h2 className="text-2xl font-black text-stone-900">{title}</h2>
      <div className="mt-5 space-y-4 text-[15px] leading-8 text-stone-700">{children}</div>
    </section>
  )
}

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8f4ed] text-stone-900">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-sky-600">About The Forum</p>
            <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">關於我們</h1>
          </div>
          <Link
            href="/"
            className="rounded-full border border-stone-200 px-4 py-2 text-sm font-semibold text-stone-600 transition hover:border-sky-300 hover:text-sky-700"
          >
            回到首頁
          </Link>
        </div>

        <div className="space-y-8">
          <SectionCard title="主辦單位｜國家兒童未來館籌備處">
            <p>
              為籌建臺灣首座專屬兒童的國家級館所「國家兒童未來館」，將以探索、冒險和玩樂為核心理念，啟發孩童五感與學習力，培養其適應環境的未來能力與信心。
            </p>
            <p>
              期待與各界並肩前進，一同邁向未知與有趣的未來，讓國家兒童未來館成為社會大眾、家長與兒童相互陪伴學習的所在。
            </p>
            <div className="pt-4">
              <Image
                src="/about-assets/footer_logo_2-b28d497ebf.svg"
                alt="國家兒童未來館籌備處"
                width={390}
                height={90}
                className="h-auto w-full max-w-[390px]"
              />
            </div>
          </SectionCard>

          <SectionCard title="執行單位｜國立臺北藝術大學">
            <p>
              論壇由本校博物館研究所黃貞燕老師、藝術與人文教育研究所吳岱融老師、國立臺灣科學教育館展覽組林怡萱主任共同規劃，是文化部委託「推動國家兒童未來館資源建置計畫（第一期）」任務之一。
            </p>
            <p>
              本計畫從重視兒童權利與兒童參與出發，聯手關心兒童與未來的實踐者，以藝術性與開放性的思維，透過遊戲、探索與學習，和兒童一起認識自己、認識臺灣、認識世界。
            </p>
          </SectionCard>

          <SectionCard title="兒童博物館／展廳研究案例">
            <div className="space-y-6">
              {caseStudies.map((item) => (
                <article
                  key={item.title}
                  className="grid gap-5 rounded-[1.5rem] border border-stone-200 bg-stone-50 p-4 sm:p-5 lg:grid-cols-[240px_1fr]"
                >
                  <div className="overflow-hidden rounded-[1.25rem] bg-white">
                    <div className="relative aspect-[1.25/1]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-bold text-stone-900">{item.title}</h3>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-sky-600 hover:text-sky-700"
                      >
                        外部連結
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                    <p className="text-sm text-stone-500">{item.source}</p>
                    <p className="text-sm leading-7 text-stone-700">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </SectionCard>
        </div>
      </main>

      <Footer />
    </div>
  )
}
