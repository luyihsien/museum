export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-stone-200 bg-[#f8f4ed]">
      <div className="absolute inset-y-0 left-0 hidden w-56 overflow-hidden lg:block">
        <div className="absolute left-[-5rem] top-10 h-56 w-56 rounded-full bg-[#f7c65d]" />
        <div className="absolute left-10 top-16 h-80 w-10 rounded-full bg-[#53b4e5]" />
        <div className="absolute left-20 top-20 h-64 w-8 rounded-full bg-[#5cb85c]" />
        <div className="absolute left-4 top-44 h-40 w-40 rounded-[45%] border-[14px] border-[#3aa2d8]" />
        <div className="absolute bottom-0 left-0 h-40 w-72 rounded-tr-[8rem] bg-[#f2a2a3]" />
      </div>

      <div className="absolute inset-y-0 right-0 hidden w-56 overflow-hidden lg:block">
        <div className="absolute right-[-4rem] top-8 h-52 w-52 rounded-full bg-[#f7d44e]" />
        <div className="absolute right-6 top-10 h-72 w-10 rounded-full bg-[#49a5d6]" />
        <div className="absolute right-20 top-20 h-64 w-8 rounded-full bg-[#ef7e62]" />
        <div className="absolute right-3 top-36 h-44 w-44 rounded-[45%] border-[14px] border-[#49a5d6]" />
        <div className="absolute bottom-0 right-0 h-36 w-72 rounded-tl-[8rem] bg-[#f0b7bf]" />
      </div>

      <div className="relative mx-auto flex min-h-[540px] max-w-7xl items-center justify-center px-4 py-16 text-center sm:px-6 lg:min-h-[620px] lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold tracking-[0.18em] text-sky-600 sm:text-base">
            國際兒童博物館交流論壇
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 text-sky-500">
            <span className="text-[clamp(2.5rem,8vw,5.8rem)] font-black leading-none">想像</span>
            <div className="text-left leading-tight">
              <p className="text-xs font-bold tracking-[0.18em] text-stone-500 sm:text-sm">
                Imagine The National
              </p>
              <p className="text-xs font-bold tracking-[0.18em] text-stone-500 sm:text-sm">
                Children's Museum
              </p>
            </div>
          </div>
          <div className="mt-2 flex flex-wrap items-end justify-center gap-x-5 gap-y-3 text-sky-500">
            <h1 className="text-[clamp(3.25rem,10vw,7rem)] font-black leading-none tracking-tight">
              國家兒童未來館
            </h1>
            <div className="rounded-[2rem] bg-orange-100 px-5 py-2 text-left text-orange-600 shadow-sm">
              <p className="text-sm font-bold sm:text-base">5.22 Thu. - 5.23 Fri.</p>
              <p className="text-xs font-semibold tracking-[0.14em]">2025</p>
            </div>
          </div>
          <div className="mt-10 inline-flex rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-[0_18px_40px_rgba(234,105,55,0.28)]">
            國際圖書館 ・ 國際會議廳
          </div>
        </div>
      </div>
    </section>
  )
}
