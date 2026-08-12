"use client";

import { useEffect, useState } from "react";
import {
  googleReviews,
  googleReviewSummary,
} from "@/data/about";

export default function GoogleReviewsCarousel() {
  const reviews = googleReviews.filter((review) => review.text);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeReview = reviews[activeIndex];

  useEffect(() => {
    if (isPaused || reviews.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((current) =>
        current === reviews.length - 1 ? 0 : current + 1
      );
    }, 6500);

    return () => clearInterval(timer);
  }, [isPaused, reviews.length]);

  const previousReview = () => {
    setActiveIndex((current) =>
      current === 0 ? reviews.length - 1 : current - 1
    );
  };

  const nextReview = () => {
    setActiveIndex((current) =>
      current === reviews.length - 1 ? 0 : current + 1
    );
  };

  if (!activeReview) return null;

  return (
    <div
      className="mx-auto w-full max-w-4xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >

      {/* Google Rating */}
      <div className="mb-8 flex flex-col items-center">

        <div className="flex items-center gap-3">
          <span className="text-3xl font-black text-brand-ink">
            {googleReviewSummary.rating.toFixed(1)}
          </span>

          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className="text-xl text-brand-gold"
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <p className="mt-2 text-sm text-brand-ink/60">
          Based on {googleReviewSummary.reviewCount} Google reviews
        </p>
      </div>


      {/* Review */}
      <div
        key={activeReview.id}
        className="relative min-h-[320px] overflow-hidden rounded-3xl border border-brand-gold/20 bg-white px-7 py-10 text-center shadow-sm sm:px-12 sm:py-14 animate-in fade-in duration-500"
      >

        {/* Decorative quote */}
        <span className="absolute left-6 top-4 font-serif text-8xl leading-none text-brand-gold/20">
          "
        </span>

        {/* Review text */}
        <div className="relative z-10 flex min-h-[190px] flex-col items-center justify-center">

          <p className="max-w-3xl text-xl font-medium italic leading-relaxed text-brand-ink sm:text-2xl">
            "{activeReview.text}"
          </p>

        </div>


        {/* Reviewer */}
        <div className="relative z-10 mt-8 flex flex-col items-center">

          <div className="h-[2px] w-8 bg-brand-red mb-4"></div>

          <a
            href={activeReview.authorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold uppercase tracking-widest text-brand-red transition-colors hover:text-brand-red-dark"
          >
            {activeReview.author}
          </a>

          <div className="mt-2 flex items-center gap-3">

            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className="text-sm text-brand-gold"
                >
                  ★
                </span>
              ))}
            </div>

            <span className="text-xs text-brand-ink/50">
              {activeReview.date}
            </span>

          </div>

        </div>

      </div>


      {/* Carousel Navigation */}
      <div className="mt-7 flex items-center justify-center gap-6">

        {/* Previous */}
        <button
          type="button"
          aria-label="Previous review"
          onClick={previousReview}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/30 text-brand-ink transition-all duration-300 hover:border-brand-red hover:bg-brand-red hover:text-white"
        >
          ←
        </button>


        {/* Progress */}
        <div className="flex items-center gap-2">

          {reviews.map((review, index) => (
            <button
              key={review.id}
              type="button"
              aria-label={`Show review ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === activeIndex
                  ? "w-8 bg-brand-red"
                  : "w-1.5 bg-brand-gold/30"
              }`}
            />
          ))}

        </div>


        {/* Next */}
        <button
          type="button"
          aria-label="Next review"
          onClick={nextReview}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/30 text-brand-ink transition-all duration-300 hover:border-brand-red hover:bg-brand-red hover:text-white"
        >
          →
        </button>

      </div>


      {/* Google attribution */}
      <div className="mt-6 text-center">

        <a
          href={googleReviewSummary.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold uppercase tracking-widest text-brand-ink/50 transition-colors hover:text-brand-red"
        >
          View all reviews on Google
        </a>

      </div>

    </div>
  );
}