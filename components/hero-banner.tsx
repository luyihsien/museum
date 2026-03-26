export function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 h-32 w-32 rounded-full bg-card" />
        <div className="absolute bottom-10 right-20 h-48 w-48 rounded-full bg-card" />
        <div className="absolute top-1/2 left-1/3 h-24 w-24 rounded-full bg-card" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        <div className="text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary-foreground/80">
            2025 International Forum
          </p>
          <h1 className="mb-6 text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl text-balance">
            國際兒童博物館交流論壇
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/90 text-pretty leading-relaxed">
            International Children&apos;s Museum Exchange Forum
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <div className="rounded-lg bg-card/20 backdrop-blur-sm px-6 py-3 text-primary-foreground">
              <span className="block text-sm">活動日期</span>
              <span className="block text-lg font-semibold">2025.05.22 - 05.23</span>
            </div>
            <div className="rounded-lg bg-card/20 backdrop-blur-sm px-6 py-3 text-primary-foreground">
              <span className="block text-sm">活動地點</span>
              <span className="block text-lg font-semibold">國立臺北藝術大學</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
