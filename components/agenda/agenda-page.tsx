import Link from "next/link"
import { Header } from "@/components/homepage/header"
import { Footer } from "@/components/homepage/footer"

const introParagraphs = [
  "建構一座國家級兒童博物館，是臺灣社會整體的一件大事。這不只是對兒童權利的具體回應，也是臺灣面向未來的重要文化行動。本論壇希望向社會報告國家兒童未來館軟體規劃現階段的構想，並邀集兒童教育、博物館與民間實踐者共同交流。",
  "兒童博物館具有獨特的目標與方法。它不只是展示知識，而是透過遊戲、探索、對話與創造，讓兒童被視為具有主體性、能夠自主思考與參與決策的個體。這也是獨立兒童博物館在當代的重要意義。",
  "放眼世界，兒童博物館已有超過百年歷史。不同時代與地區的兒童博物館，反映不同的教育思維、制度條件與社會期待。臺灣即將登場的國家兒童未來館，也需要在本地脈絡中發展出自己的特色與任務。",
  "本論壇以「兒童與未來」為核心，聚焦六大主題：兒童權利、遊戲探索、想像創造、多元共融、永續價值、未來素養，透過國際案例與在地實踐的分享，探索兒童博物館如何為兒童以及共同的未來開展新途徑。",
]

const dayOne = [
  {
    time: "08:50-09:30",
    topic: "報到",
    details: ["入場與報到"],
    tone: "muted",
  },
  {
    time: "09:30-09:40",
    topic: "開幕",
    details: ["開幕致詞"],
    tone: "default",
  },
  {
    time: "09:40-10:35",
    topic: "想像國家兒童未來館",
    host: "主持人｜曾聰邦（國家兒童未來館籌備處主任）",
    details: ["專題分享｜黃貞燕（國立臺北藝術大學博物館研究所副教授兼所長）", "Q&A"],
    tone: "focus",
  },
  {
    time: "10:35-12:30",
    topic: "【主題一：遊戲探索】",
    host: "主持人｜呂理政（國立臺灣歷史博物館前館長）",
    details: [
      "專題分享｜石井今日子（日本東京玩具美術館部長）／與談人｜曾成德（國立成功大學建築學系講座教授）",
      "專題分享｜拉斐爾・夏奈（法國科學工業城展覽總監）／與談人｜郭昭翎（國立臺灣博物館展示企劃組副研究員）",
      "Q&A",
    ],
    tone: "focus-alt",
  },
  {
    time: "12:30-13:30",
    topic: "午餐",
    details: ["休息與交流"],
    tone: "muted",
  },
  {
    time: "13:30-15:25",
    topic: "【主題二：多元共融】",
    host: "主持人｜張鑑如（國立臺灣師範大學幼兒與家庭科學學系教授）",
    details: [
      "專題分享｜李樂樺（美國波士頓兒童博物館研究與評量經理）／與談人｜江明珊（國立臺灣歷史博物館公共服務與教育組組長）",
      "專題分享｜瑪麗艾・帕爾斯（荷蘭阿姆斯特丹世界博物館策劃總監）、黃貞燕／與談人｜賴志婷（桃園市立美術館展覽組組長）",
      "Q&A",
    ],
    tone: "focus",
  },
  {
    time: "15:25-15:45",
    topic: "茶敘",
    details: ["休息時間"],
    tone: "muted",
  },
  {
    time: "15:45-17:20",
    topic: "【座談 I：兒童權利】",
    host: "主持人｜張弘潔（國立臺灣大學公共衛生學系副教授）",
    details: [
      "與談人｜Ciwas Pawan 吉娃思巴萬、潘汝璧、林珦如、謝宜暉、呂佳育",
    ],
    tone: "focus-alt",
  },
  {
    time: "17:20-17:30",
    topic: "綜合討論",
    details: ["綜合座談"],
    tone: "default",
  },
  {
    time: "17:30-",
    topic: "賦歸",
    details: ["第一天議程結束"],
    tone: "muted",
  },
]

const dayTwo = [
  {
    time: "09:00-09:30",
    topic: "報到",
    details: ["入場與報到"],
    tone: "muted",
  },
  {
    time: "09:30-11:25",
    topic: "【主題三：永續價值】",
    host: "主持人｜王嵩山（國立臺北藝術大學博物館研究所兼任教授）",
    details: [
      "專題分享｜葉嘉青（天鈺環境永續基金會顧問總監）／與談人｜莊世瑩（兒童文學作家）",
      "專題分享｜林怡萱（國立臺灣科學教育館展覽組主任）／與談人｜侯君昊（國立陽明交通大學建築研究所副教授）",
      "Q&A",
    ],
    tone: "focus",
  },
  {
    time: "11:25-12:50",
    topic: "午餐",
    details: ["圓桌論壇（邀請參與）"],
    tone: "muted",
  },
  {
    time: "12:50-15:35",
    topic: "【主題四：想像創造】",
    host: "主持人｜林曼麗（國立臺北教育大學名譽教授）",
    details: [
      "專題分享｜謝明霏（雲門舞集舞蹈教室執行長）／與談人｜容淑華（國立臺北藝術大學藝術與人文教育研究所副教授）",
      "專題分享｜潔西卡・哈維（美國華府國家兒童博物館前教育與觀眾服務總監）／與談人｜林怡萱（國立臺灣科學教育館展覽組主任）",
      "專題分享｜吳岱融（國立臺北藝術大學藝術與人文教育研究所副教授兼所長）／與談人｜熊思婷（臺北市立美術館教育服務組組長）",
      "Q&A",
    ],
    tone: "focus-alt",
  },
  {
    time: "15:35-15:50",
    topic: "茶敘",
    details: ["休息時間"],
    tone: "muted",
  },
  {
    time: "15:50-17:10",
    topic: "【座談 II：未來素養】",
    host: "主持人｜劉婉珍（國立臺南藝術大學博物館學與古物維護研究所教授）",
    details: ["與談人｜邱紹雯、丘嘉慧、蔡宗翰、朱堯麟", "Q&A"],
    tone: "focus",
  },
  {
    time: "17:10-17:20",
    topic: "綜合討論",
    details: ["第二天綜合討論"],
    tone: "default",
  },
  {
    time: "17:20-17:30",
    topic: "閉幕",
    details: ["閉幕"],
    tone: "default",
  },
  {
    time: "17:30-",
    topic: "賦歸",
    details: ["論壇結束"],
    tone: "muted",
  },
]

function toneClass(tone: string) {
  if (tone === "muted") return "bg-stone-100"
  if (tone === "focus") return "bg-[#eef8fc]"
  if (tone === "focus-alt") return "bg-[#f7f1e6]"
  return "bg-white"
}

function AgendaSection({
  date,
  weekday,
  items,
}: {
  date: string
  weekday: string
  items: typeof dayOne
}) {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm">
      <div className="border-b border-stone-200 bg-stone-50 px-6 py-5 sm:px-8">
        <p className="text-sm font-semibold tracking-[0.16em] text-stone-500">AGENDA</p>
        <h2 className="mt-1 text-2xl font-black text-stone-900">
          {date} <span className="text-stone-400">({weekday})</span>
        </h2>
      </div>

      <div className="divide-y divide-stone-200">
        {items.map((item) => (
          <article
            key={`${date}-${item.time}-${item.topic}`}
            className={`grid gap-4 px-6 py-5 sm:px-8 lg:grid-cols-[140px_280px_1fr] ${toneClass(item.tone)}`}
          >
            <div className="text-sm font-semibold tracking-[0.08em] text-stone-500">{item.time}</div>
            <div>
              <h3 className="text-base font-bold leading-7 text-stone-900">{item.topic}</h3>
              {item.host ? <p className="mt-2 text-sm leading-6 text-stone-600">{item.host}</p> : null}
            </div>
            <div className="space-y-2">
              {item.details.map((detail) => (
                <p key={detail} className="text-sm leading-6 text-stone-700">
                  {detail}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export function AgendaPage() {
  return (
    <div className="min-h-screen bg-[#f8f4ed] text-stone-900">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <section className="rounded-[2rem] border border-stone-200 bg-white px-6 py-8 shadow-sm sm:px-8 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-stone-200 pb-6">
            <div>
              <p className="text-sm font-semibold tracking-[0.18em] text-sky-600">Forum Agenda</p>
              <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">論壇緣起與目的</h1>
            </div>
            <Link
              href="/"
              className="rounded-full border border-stone-200 px-4 py-2 text-sm font-semibold text-stone-600 transition hover:border-sky-300 hover:text-sky-700"
            >
              回到首頁
            </Link>
          </div>

          <div className="mt-6 space-y-4">
            {introParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-8 text-stone-700 sm:text-[15px]">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-stone-200 bg-white px-6 py-8 shadow-sm sm:px-8 lg:px-10">
          <div className="border-b border-stone-200 pb-6">
            <h2 className="text-2xl font-black text-stone-900 sm:text-3xl">
              議程
              <span className="ml-2 text-base font-medium text-stone-500">
                （詳細題目與人物介紹請點入主題連結）
              </span>
            </h2>
            <a
              href="https://drive.google.com/file/d/1iYwbC2Tt4gUw_iW-R9Dzc6O0urZomSO0/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex text-sm font-semibold text-sky-600 hover:text-sky-700"
            >
              完整議程下載
            </a>
          </div>

          <div className="mt-8 space-y-8">
            <AgendaSection date="2025/5/22" weekday="四" items={dayOne} />
            <AgendaSection date="2025/5/23" weekday="五" items={dayTwo} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
