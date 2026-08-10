import type { ReactNode } from "react";

type CTA = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: CTA) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>
      {children}
    </div>
  );
}
