"use client";

import { useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import SectionTitle from "@/shared/ui/typography/SectionTitle";
import Button from "@/shared/ui/button";
import BlogItem from "./BlogItem";
import type { BlogPost } from "../types";

import "swiper/css/bundle";

const ChevronLeft = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);
const ChevronRight = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

type OtherBlogsSectionProps = {
  posts: BlogPost[];
};

export default function OtherBlogsSection({ posts }: OtherBlogsSectionProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const hasPosts = Array.isArray(posts) && posts.length > 0;
  const useSwiper = hasPosts && posts.length >= 2;

  const goPrev = useCallback(() => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  }, []);
  const goNext = useCallback(() => {
    if (swiperRef.current) swiperRef.current.slideNext();
  }, []);

  if (!hasPosts) return null;

  return (
    <section className="py-16 md:py-20 bg-slate-50/80 dark:bg-zinc-900/50 overflow-x-hidden">
      <div className="container relative">
        <div className="flex flex-nowrap items-center justify-between gap-4 mb-8">
          <SectionTitle title="Digər bloqlar" />
          {useSwiper && (
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={goPrev}
                className="w-11 h-11 rounded-full border-2 border-primary text-primary bg-white dark:bg-zinc-800 hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
                aria-label="Əvvəlki"
              >
                <ChevronLeft />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="w-11 h-11 rounded-full border-2 border-primary text-primary bg-white dark:bg-zinc-800 hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
                aria-label="Növbəti"
              >
                <ChevronRight />
              </button>
            </div>
          )}
        </div>

        {useSwiper ? (
          <div className="overflow-hidden min-h-[320px] w-full">
            <Swiper
              onSwiper={(swiper) => { swiperRef.current = swiper; }}
              onBeforeDestroy={() => { swiperRef.current = null; }}
              className="blogs-swiper w-full !overflow-hidden"
              style={{ width: "100%" }}
              spaceBetween={24}
              slidesPerGroup={1}
              watchOverflow
              grabCursor
              loop={posts.length >= 3}
              autoplay={
                posts.length >= 2
                  ? {
                      delay: 4500,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }
                  : false
              }
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              modules={[Autoplay]}
            >
              {posts.map((p) => (
                <SwiperSlide key={p.id} className="h-auto">
                  <div className="h-full">
                    <BlogItem post={p} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <BlogItem key={p.id} post={p} />
            ))}
          </div>
        )}

        <div className="flex justify-center mt-10">
          <Button
            href="/blogs"
            variant="outline_primary"
            size="sm"
            label="Bütün bloqlar"
          />
        </div>
      </div>
    </section>
  );
}
