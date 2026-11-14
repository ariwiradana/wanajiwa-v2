"use client";

import { useMemo, useState } from "react";
// @ts-expect-error fslightbox-react does not provide TypeScript declarations.
import FsLightbox from "fslightbox-react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { gallery } from "@/lib/site";
import Image from "next/image";
import { Reveal } from "@/components/reveal";

const filters = ["All", "Pool & Garden", "Bedrooms", "Kitchen"];
const IMAGES_PER_SLIDE = 4;

type GalleryItem = (typeof gallery)[number] & { galleryIndex: number };

function chunkImages(items: GalleryItem[], size: number) {
  const chunks: GalleryItem[][] = [];
  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }
  return chunks;
}

export function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  const items = useMemo(
    () =>
      gallery
        .map((item, galleryIndex) => ({ ...item, galleryIndex }))
        .filter((item) => filter === "All" || item.category === filter),
    [filter],
  );

  const slides = useMemo(() => chunkImages(items, IMAGES_PER_SLIDE), [items]);

  const openLightbox = (galleryIndex: number) => {
    setLightboxController((current) => ({
      toggler: !current.toggler,
      slide: galleryIndex + 1,
    }));
  };

  return (
    <section id="gallery" className="scroll-mt-24 px-5 py-20 md:px-10 xl:px-16">
      <Reveal className="mx-auto max-w-[1440px]" y={32}>
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[.28em] text-[#71806c]">
              A glimpse of Wana Jiwa
            </p>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Explore the Villa
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((name) => (
              <button
                key={name}
                type="button"
                onClick={() => setFilter(name)}
                aria-pressed={filter === name}
                className={`rounded-full border px-4 py-2 text-xs transition duration-300 ${
                  filter === name
                    ? "border-[#183b2a] bg-[#183b2a] text-white"
                    : "border-[#d9d5cb] text-[#39483d] hover:border-[#183b2a] hover:bg-white"
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        <Swiper
          key={filter}
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={12}
          loop={slides.length > 1}
          autoplay={
            slides.length > 1
              ? {
                  delay: 4200,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }
              : false
          }
          speed={900}
          className="wana-gallery-swiper"
        >
          {slides.map((slideItems, slideIndex) => (
            <SwiperSlide key={`${filter}-${slideIndex}`}>
              <div className="grid h-[420px] grid-cols-2 grid-rows-2 gap-2 overflow-hidden rounded-[24px] sm:h-[500px] sm:gap-3 md:h-[560px] md:grid-cols-3">
                {slideItems.map((item, imageIndex) => {
                  const desktopLayout =
                    imageIndex === 0
                      ? "md:col-start-1 md:row-span-2"
                      : imageIndex === 1
                        ? "md:col-start-2 md:row-start-1"
                        : imageIndex === 2
                          ? "md:col-start-2 md:row-start-2"
                          : "md:col-start-3 md:row-span-2";

                  const mobileLayout =
                    imageIndex === 0
                      ? "col-start-1 row-span-2"
                      : imageIndex === 1
                        ? "col-start-2 row-start-1"
                        : imageIndex === 2
                          ? "col-start-2 row-start-2"
                          : "hidden md:block md:col-start-3 md:row-span-2";

                  return (
                    <button
                      key={`${item.src}-${item.galleryIndex}`}
                      type="button"
                      onClick={() => openLightbox(item.galleryIndex)}
                      aria-label={`View ${item.title}`}
                      className={`group relative min-h-0 overflow-hidden rounded-[18px] bg-[#e7e1d5] text-left md:rounded-3xl ${mobileLayout} ${desktopLayout}`}
                    >
                      <Image
                        fill
                        src={item.src}
                        alt={item.alt}
                        loading={slideIndex === 0 ? "eager" : "lazy"}
                        className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.045]"
                      />
                      <span className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
                      <span className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 text-left text-xs font-medium text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:p-5 sm:text-sm">
                        {item.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {slides.length > 1 && (
          <div className="mt-5 flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-[.18em] text-[#81877c]">
              Auto-sliding gallery
            </p>
          </div>
        )}
      </Reveal>

      <FsLightbox
        toggler={lightboxController.toggler}
        sources={gallery.map((item) => item.src)}
        slide={lightboxController.slide}
        type="image"
      />
    </section>
  );
}
