import type { ElementType, ReactNode } from "react";

type RowProps = {
  as?: ElementType;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  children: ReactNode;
};

export default function Row({
  as: Tag = "div",
  href,
  target,
  rel,
  className = "",
  children,
}: RowProps) {
  return (
    <Tag
      href={href}
      target={target}
      rel={rel}
      className={`group grid border-t border-line ${className}`}
    >
      {children}
    </Tag>
  );
}
