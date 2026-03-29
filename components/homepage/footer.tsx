import Image from "next/image"

export function Footer() {
  return (
    <footer id="footer" className="border-t border-stone-200 bg-[#f5f0e2]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-b border-stone-200 pb-8 text-center md:grid-cols-3 md:text-left">
          <div className="space-y-4 border-stone-200 md:border-r md:pr-6">
            <p className="text-sm font-semibold tracking-[0.14em] text-stone-400">指導單位</p>
            <Image
              src="/index-assets/footer_logo_1-126f0452f7.svg"
              alt="文化部"
              width={145}
              height={38}
              className="mx-auto h-auto md:mx-0"
            />
          </div>
          <div className="space-y-4 border-stone-200 md:border-r md:pr-6">
            <p className="text-sm font-semibold tracking-[0.14em] text-stone-400">主辦單位</p>
            <Image
              src="/index-assets/footer_logo_2-b28d497ebf.svg"
              alt="國家兒童未來館籌備處"
              width={250}
              height={50}
              className="mx-auto h-auto md:mx-0"
            />
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold tracking-[0.14em] text-stone-400">執行單位</p>
            <div className="flex items-center justify-center gap-6 md:justify-start">
              <Image
                src="/index-assets/footer_logo_3-d46796a360.svg"
                alt="國立臺北藝術大學"
                width={150}
                height={50}
                className="h-auto"
              />
              <Image
                src="/index-assets/footer_logo_4-21284a0ac2.svg"
                alt="執行單位夥伴"
                width={100}
                height={48}
                className="h-auto"
              />
            </div>
          </div>
        </div>

        <div className="pt-6 text-center text-sm text-stone-500">
          國立臺北藝術大學博物館研究所 | Email: gims.ncfmproject@gmail.com | tel:
          +886-2-28961000 #3412
          <p className="mt-2">Graduate Institute of Museum Studies, Taipei National University of the Arts</p>
        </div>
      </div>
    </footer>
  )
}
