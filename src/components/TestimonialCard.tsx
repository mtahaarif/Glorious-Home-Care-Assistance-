import type { ReactNode } from "react";

type TestimonialCardProps = {
  quote: string;
  author: string;
  endIcon?: ReactNode;
};

export default function TestimonialCard({
  quote,
  author,
  endIcon,
}: TestimonialCardProps) {
  return (
    <figure className="rounded-3xl border border-brand-red/15 bg-surface p-8 shadow-sm">
      <blockquote className="text-base leading-7 text-brand-ink">
        "{quote}"
        {endIcon ? <span className="ml-2 align-middle">{endIcon}</span> : null}
      </blockquote>
      <figcaption className="mt-6 text-sm font-semibold text-brand-red">
        -{author}
      </figcaption>
    </figure>
  );
}
