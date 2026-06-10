import Link from "next/link";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, children, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-softOlive">{eyebrow}</p>
      ) : null}
      <h2 className="font-heading text-3xl font-semibold text-deepBlue sm:text-4xl">{title}</h2>
      {children ? <div className="mt-4 text-base leading-7 text-textSlate sm:text-lg">{children}</div> : null}
    </div>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <article className={`rounded-lg border border-parchment/70 bg-warmWhite p-6 shadow-soft ${className}`}>
      {children}
    </article>
  );
}

export function PrimaryLink({
  href,
  children,
  external = false
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const className =
    "inline-flex items-center justify-center rounded-md bg-softGold px-5 py-3 text-sm font-bold text-deepBlue shadow-sm transition hover:bg-[#c99a3d] focus:outline-none focus:ring-2 focus:ring-softGold focus:ring-offset-2";

  if (external) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}

export function SecondaryLink({
  href,
  children,
  external = false
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const className =
    "inline-flex items-center justify-center rounded-md border border-softGold/70 px-5 py-3 text-sm font-bold text-warmWhite transition hover:bg-warmWhite/10 focus:outline-none focus:ring-2 focus:ring-softGold focus:ring-offset-2 focus:ring-offset-deepBlue";

  if (external) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
