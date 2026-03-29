import Image from "next/image"

export function Hero() {
  return (
    <section className="border-b border-stone-200 bg-[#f8f4ed]">
      <div className="relative mx-auto max-w-[1440px]">
        <div className="relative hidden aspect-[1440/760] w-full md:block">
          <Image
            src="/index-assets/header2-45892d7471.jpg"
            alt="想像國家兒童未來館主視覺"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[390/520] w-full md:hidden">
          <Image
            src="/index-assets/header_m2-47321676f9.jpg"
            alt="想像國家兒童未來館主視覺"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
