import type { ElementType, ReactNode } from "react";

type RowProps = {
  as?: ElementType;
  href?: string;
  className?: string;
  children: ReactNode;
};

export default function Row({
  as: Tag = "div",
  href,
  className = "",
  children,
}: RowProps) {
  return (
    <Tag href={href} className={`group grid border-t border-line ${className}`}>
      {children}
    </Tag>
  );
}
