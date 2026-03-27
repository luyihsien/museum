import Link from "next/link"
import { ExternalLink, MapPin } from "lucide-react"
import { Header } from "@/components/homepage/header"
import { Footer } from "@/components/homepage/footer"

const notices = [
  "請依姓名與錄取信件報到，每日報到時間請參考議程。",
  "本活動提供公務人員終身學習時數，5/22 議程計 6 小時，5/23 議程計 6 小時，非全程參與者依簽到、退情形登錄時數。",
  "本活動提供同步口譯設備，如需租借口譯機，請攜帶有效證件於報到處換證租用。",
  "會場內禁止飲食，午餐時間將有工作人員引導與會者至用餐空間。",
  "如因天氣或其他不可抗力因素，主辦單位保留時間、議程安排與地點規劃的彈性調整權利。",
  "未獲錄取或錯過原報名時間者，論壇當天將依報到情形與座席狀況開放現場報名，惟不保證提供便當、紙本手冊或舒適座席。",
]

function InfoSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="rounded-[2rem] border border-stone-200 bg-white px-6 py-8 shadow-sm sm:px-8 lg:px-10">
      <h2 className="text-2xl font-black text-stone-900">{title}</h2>
      <div className="mt-5 space-y-4 text-sm leading-8 text-stone-700 sm:text-[15px]">{children}</div>
    </section>
  )
}

export function SignupPage() {
  return (
    <div className="min-h-screen bg-[#f8f4ed] text-stone-900">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-sky-600">Forum Signup</p>
            <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">論壇報名</h1>
          </div>
          <Link
            href="/"
            className="rounded-full border border-stone-200 px-4 py-2 text-sm font-semibold text-stone-600 transition hover:border-sky-300 hover:text-sky-700"
          >
            回到首頁
          </Link>
        </div>

        <div className="space-y-8">
          <InfoSection title="報名資訊">
            <p>
              報名系統：
              <a
                href="https://forms.gle/siNdLTgAJadWR7KPA"
                target="_blank"
                rel="noreferrer"
                className="ml-2 inline-flex items-center gap-1 font-semibold text-sky-600 hover:text-sky-700"
              >
                https://forms.gle/siNdLTgAJadWR7KPA
                <ExternalLink className="h-4 w-4" />
              </a>
            </p>
            <p>報名日期：即日起至 2025 年 4 月 30 日（三）17:00 止，採網路報名。</p>
            <p>
              招收對象：預計一天開放 200 名。若報名人數超過錄取名額，將優先錄取與本次主題相關的博物館從業人員、大專院校相關系所師生、文教單位從業人員。
            </p>
          </InfoSection>

          <InfoSection title="錄取名單">
            <p>2025 年 5 月 5 日（一）公佈。</p>
            <p>
              <a
                href="https://drive.google.com/file/d/15ZWU4HANoVCu4duEe3JkYixvtuAc5HBV/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-sky-600 hover:text-sky-700"
              >
                2025 國際兒童博物館交流論壇＿正備取公告名單
              </a>
            </p>
          </InfoSection>

          <section className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            <InfoSection title="與會資訊">
              <p>日期：2025 年 5 月 22-23 日（四-五）</p>
              <p>地點：國家圖書館・國際會議廳（臺北市中正區中山南路 20 號）</p>
              <p>
                停車與交通詳細請見
                <a
                  href="https://www.ncl.edu.tw/content_281.html"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-1 font-semibold text-sky-600 hover:text-sky-700"
                >
                  國圖官網
                </a>
                （本次論壇未提供停車優惠，鼓勵與會者搭乘大眾運輸工具前往。）
              </p>
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-bold text-sky-700">
                <MapPin className="h-4 w-4" />
                捷運中正紀念堂站周邊
              </div>
            </InfoSection>

            <section className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white p-3 shadow-sm">
              <div className="relative h-full min-h-[320px] rounded-[1.6rem] bg-[linear-gradient(90deg,#f9f3e6_0%,#f9f3e6_48%,#f6d8e7_48%,#f6d8e7_100%)]">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(87,155,199,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(87,155,199,0.18)_1px,transparent_1px)] bg-[size:42px_42px]" />
                <div className="absolute left-[18%] top-0 h-full w-[6px] bg-sky-400/70" />
                <div className="absolute left-0 top-[42%] h-[6px] w-full bg-sky-400/70" />
                <div className="absolute left-[58%] top-0 h-full w-[6px] bg-pink-300/80" />
                <div className="absolute left-0 top-[62%] h-[8px] w-full bg-pink-300/80" />
                <div className="absolute left-[62%] top-[45%] h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500 ring-8 ring-white/70" />
                <div className="absolute left-[54%] top-[54%] rounded-2xl bg-white/95 px-4 py-3 text-sm font-semibold text-stone-700 shadow-lg">
                  國家圖書館
                </div>
              </div>
            </section>
          </section>

          <InfoSection title="與會須知">
            <ol className="list-decimal space-y-3 pl-5">
              {notices.map((notice) => (
                <li key={notice}>{notice}</li>
              ))}
            </ol>
            <p className="border-t border-stone-200 pt-4 text-stone-500">
              ※ 本單位將於會議中拍照及錄音、錄影，報名論壇視同授權並同意本單位得刊登、發表、公開傳輸、上映及重製上述內容，並得視需要在不變更出席者原意下進行必要編輯。
            </p>
          </InfoSection>
        </div>
      </main>

      <Footer />
    </div>
  )
}
