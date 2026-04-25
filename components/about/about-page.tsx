"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import artEduImage from "@/app/about/ARTEDU.png"
import artEdu30Image from "@/app/about/藝教30.png"

const purposeItems = [
  "大學專業藝術教育：檢視藝術教育「變與不變」的本質，從藝術家的生涯回顧，延伸至「選才」策略與「育才」的路徑選擇，探討專業藝術人才的培育應如何應對跨領域生涯發展的需要，以及 AI 與創新技術對感官的衝擊。",
  "中小學藝術教育：正視藝才班的專業訓練與一般學校的普惠教育，透過典範案例尋求在課綱連動、師資職能與數位美感力之間的平衡，落實教學正常化並激發學生自主探究能力。",
  "社會藝術教育與政策鏈結：強化大學社會責任（USR）與社會實踐，讓藝術專業回饋大眾，並藉由教育政策與文化政策的高峰對話，探討藝術對於社會發展的核心功能。",
]

const footerLinks = [
  { href: "/news", label: "最新消息" },
  { href: "/about", label: "關於藝教30", active: true },
  { href: "/agenda", label: "論壇議程" },
  { href: "/signup", label: "論壇報名" },
]

function Reveal({
  children,
  delay = 0,
  slow = false,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  slow?: boolean
  className?: string
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          setVisible(true)
          observer.disconnect()
        })
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${visible ? (slow ? "about-reveal-down-slow" : "about-reveal-down") : "opacity-0"} ${className}`.trim()}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

function LineReveal({
  delay = 0,
  className = "",
}: {
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          setVisible(true)
          observer.disconnect()
        })
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${visible ? "about-line-drop" : "opacity-0"} ${className}`.trim()}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      <span className="block h-full w-full bg-white" />
    </div>
  )
}

function SectionRow({
  title,
  children,
  delay = 0,
}: {
  title: string
  children: React.ReactNode
  delay?: number
}) {
  return (
    <section className="mx-auto grid max-w-[980px] gap-8 px-6 lg:grid-cols-[120px_2px_minmax(0,1fr)] lg:px-0">
      <Reveal delay={delay} slow>
        <h2 className="text-[22px] font-medium tracking-tight text-white">{title}</h2>
      </Reveal>
      <LineReveal delay={delay + 420} className="hidden lg:block" />
      <Reveal delay={delay + 140}>
        <div className="max-w-[610px] text-[15px] leading-8 text-white/95">{children}</div>
      </Reveal>
    </section>
  )
}

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#171717] text-white">
      <header className="bg-[#171717]">
        <div className="mx-auto grid max-w-[980px] grid-cols-1 gap-5 px-6 py-7 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <div className="hidden lg:block" />

          <Link href="/" className="mx-auto text-center">
            <Image
              src={artEduImage}
              alt="ARTEDU"
              priority
              className="mx-auto h-auto w-[160px] sm:w-[190px]"
            />
          </Link>

          <div className="flex flex-col gap-4 lg:items-end lg:justify-self-end">
            <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-medium text-white/80">
              <Link href="/" className="transition hover:text-[#ffc127]">
                回首頁
              </Link>
              <Link href="/news" className="transition hover:text-[#ffc127]">
                最新消息
              </Link>
              <Link href="/agenda" className="transition hover:text-[#ffc127]">
                論壇議程
              </Link>
              <Link href="/signup" className="transition hover:text-[#ffc127]">
                論壇報名
              </Link>
            </nav>

            <Link
              href="/signup"
              className="mx-auto rounded-md bg-[#ffc127] px-8 py-3 text-xl font-black text-black shadow-[6px_6px_0_0_#171717] transition hover:translate-y-[1px] lg:mx-0"
            >
              立即報名
            </Link>
          </div>
        </div>
      </header>

      <main className="bg-[#171717]">
        <section className="px-6 pb-16 pt-8">
          <div className="mx-auto max-w-[980px] text-center">
            <Reveal delay={0}>
              <div className="mx-auto max-w-[320px]">
                <Image
                  src={artEdu30Image}
                  alt="藝教30"
                  priority
                  className="mx-auto h-auto w-[260px] sm:w-[330px]"
                />
              </div>
            </Reveal>

            <Reveal delay={180} slow>
              <h1 className="mx-auto mt-14 max-w-[980px] text-[42px] font-light tracking-tight text-white sm:text-[64px]">
                共構臺灣藝術教育方程式
              </h1>
            </Reveal>
          </div>
        </section>

        <div className="space-y-20 pb-20">
          <SectionRow title="論壇緣起" delay={240}>
            <p>
              在《藝術教育法》施行將屆三十年之際，臺灣藝術教育正站在關鍵的轉折點。面對少子化、科技快速發展、
              AI 與數位媒體全面滲透，以及社會結構與文化生態的深刻變化，藝術教育不再是專業人才的培育路徑，
              更關乎全民素養、文化永續與社會創新的核心基礎。本論壇以「對於未來臺灣藝術教育的想像：以提升全民素養為目標的人才培育」
              為總體願景，嘗試從歷史回顧、現況分析到未來前瞻，重新思考藝術教育在臺灣社會中的角色與功能。
            </p>
            <p className="mt-4">
              透過大學專業藝術教育、中小學藝術教育、社會藝術教育三大面向，串聯學校體系、社會場域與文化政策，
              邀集不同教育階段、藝術領域與實務現場的關鍵實踐者，系統性檢視過去三十年藝術教育的成果與限制，
              並回應當前教育與文化環境所面臨的結構性挑戰。藉由典範經驗分享、跨領域對話與政策層級的高峰討論，
              論壇不僅聚焦於選才與育才等傳統議題，更進一步探討藝術教育如何回應跨領域學習，以及科技與文化創意產業的交織影響。
            </p>
            <p className="mt-4">
              最終，本論壇期望建構一個面向未來的「臺灣藝術教育方程式」，促進教育政策與文化政策之間更緊密的協作，
              並為未來藝術教育的制度創新、人才培育與全民藝術素養奠定共同的想像基礎與行動方向。
            </p>
          </SectionRow>

          <Reveal delay={640} className="px-6">
            <div className="mx-auto max-w-[656px] bg-white p-3">
              <img
                src="https://static.wixstatic.com/media/a3e028_71d4f338f1e64e17876029190369ec57~mv2.png/v1/fill/w_656,h_459,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a3e028_71d4f338f1e64e17876029190369ec57~mv2.png"
                alt="臺灣藝術教育未來的期待與想像"
                className="block h-auto w-full"
              />
            </div>
          </Reveal>

          <SectionRow title="論壇目的" delay={780}>
            <p>
              自1997 年《藝術教育法》頒布至今，臺灣藝術教育已經從「專業人才培育」邁向「全民美感提升」的深度轉型。
              近三十年來，《藝術教育法》提供政策支持，支撐起臺灣藝術家的養成系統，創造無數享譽海內外的藝術創作者和藝術行政工作者，
              提供豐富多元的藝術創作與展演活動；連結不同體系的藝術教育架構，讓藝術鑑賞與美感能力逐漸成為臺灣社會追求精神富足的基石。
            </p>
            <p className="mt-4">
              然而，面對少子化、AI 科技全面滲透以及社會與文化生態質變，藝術教育正處於關鍵轉折點。本次論壇透過三大系統性面向，
              深度審思現況並展望前瞻：
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-6">
              {purposeItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-6">
              結語：建構未來的「臺灣藝術教育方程式」。藉由典範經驗分享與跨領域深度對話，本論壇將促成教育政策與文化政策的「雙軌並行」，
              建構面向未來的「臺灣藝術教育方程式」，將過去三十年的豐碩成果轉化為前行動力。這不僅為了制度創新與育才，
              更是為了在全球化的數位浪潮中，為臺灣社會奠定充滿創造力、人性溫度與社會韌性的行動藍圖，共同擘劃下一個三十年的藝術盛世。
            </p>
          </SectionRow>
        </div>

        <section className="bg-[#f5f5f3] px-6 py-20 text-black">
          <div className="mx-auto max-w-[980px]">
            <Reveal delay={0} slow>
              <h2 className="text-center text-[48px] font-light tracking-tight sm:text-[60px]">
                主辦/執行單位
              </h2>
            </Reveal>

            <div className="mt-16 grid gap-12 lg:grid-cols-[340px_minmax(0,1fr)] lg:items-center">
              <Reveal delay={180} className="flex justify-center">
                <div className="flex h-[310px] w-[310px] items-center justify-center rounded-full border-[3px] border-black bg-white">
                  <div className="text-center">
                    <div className="text-[28px] font-serif tracking-[0.08em]">MINISTRY OF EDUCATION</div>
                    <div className="mt-6 text-[72px]">教育部</div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={320} slow>
                <div className="space-y-4 text-[15px] leading-8 text-stone-800">
                  <p>教育部序文簡介 教育部序文簡介 教育部序文簡介 教育部序文簡介 教育部序文簡介 教育部序文簡介。</p>
                  <p>教育部序文簡介 教育部序文簡介 教育部序文簡介 教育部序文簡介 教育部序文簡介 教育部序文簡介。</p>
                  <p>教育部序文簡介 教育部序文簡介 教育部序文簡介 教育部序文簡介 教育部序文簡介 教育部序文簡介。</p>
                  <p>教育部序文簡介 教育部序文簡介 教育部序文簡介 教育部序文簡介 教育部序文簡介 教育部序文簡介。</p>
                  <p>教育部序文簡介 教育部序文簡介 教育部序文簡介 教育部序文簡介 教育部序文簡介 教育部序文簡介。</p>
                </div>
              </Reveal>
            </div>

            <div className="mt-14 grid gap-12 lg:grid-cols-[340px_minmax(0,1fr)] lg:items-end">
              <Reveal delay={460} slow>
                <div className="space-y-3 text-[15px] leading-8 text-stone-800">
                  <p>執行單位引文簡介 執行單位引文簡介 執行單位引文簡介 執行單位引文簡介 執行單位引文簡介。</p>
                  <p>執行單位引文簡介 執行單位引文簡介 執行單位引文簡介 執行單位引文簡介 執行單位引文簡介。</p>
                  <p>執行單位引文簡介 執行單位引文簡介 執行單位引文簡介 執行單位引文簡介 執行單位引文簡介。</p>
                  <p>執行單位引文簡介 執行單位引文簡介 執行單位引文簡介 執行單位引文簡介 執行單位引文簡介。</p>
                </div>
              </Reveal>

              <Reveal delay={600} className="flex items-center justify-center lg:justify-start">
                <div>
                  <div className="text-[62px] font-semibold tracking-[0.16em] text-black">國立臺北藝術大學</div>
                  <div className="mt-1 text-[28px] text-stone-700">Taipei National University of the Arts</div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#f5f5f3] px-6 pb-24 pt-16">
          <div className="absolute inset-x-0 bottom-0 h-[420px] rounded-t-[50%] bg-[#ffc127]" />
          <div className="relative mx-auto flex max-w-[980px] justify-center">
            <Reveal delay={0}>
              <Link
                href="/signup"
                className="rounded-lg bg-[#171717] px-12 py-5 text-[24px] font-black tracking-[0.12em] text-white shadow-[6px_6px_0_0_#ffc127]"
              >
                立即報名
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#171717] px-6 py-16 text-white">
        <div className="mx-auto grid max-w-[980px] gap-10 lg:grid-cols-[230px_160px_1fr]">
          <Reveal delay={0}>
            <div>
              <Image
                src={artEdu30Image}
                alt="藝教30"
                className="h-auto w-[190px]"
              />
            </div>
          </Reveal>

          <Reveal delay={140} slow>
            <nav className="space-y-3 text-[15px]">
              {footerLinks.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className={item.active ? "text-[#ff8c2a]" : "text-white"}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </nav>
          </Reveal>

          <Reveal delay={280} slow>
            <div className="grid gap-6 sm:grid-cols-[140px_1fr]">
              <div className="flex items-start gap-4 pt-1 text-4xl text-white/75">
                <span>◎</span>
                <span>f</span>
                <span>▶</span>
              </div>
              <div className="space-y-2 text-[15px] leading-8 text-white/95">
                <p>國立臺北藝術大學</p>
                <p>The Taipei National University of the Arts</p>
                <p className="pt-4">Email：</p>
                <p>Tel：</p>
              </div>
            </div>
          </Reveal>
        </div>
      </footer>
    </div>
  )
}
