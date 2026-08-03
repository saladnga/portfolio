type SectionHeaderProps = {
  label: string;
  metaLabel?: string;
  metaHref?: string;
};

export default function SectionHeader({
  label,
  metaLabel,
  metaHref,
}: SectionHeaderProps) {
  return (
    <div className="flex items-baseline justify-between px-16 pt-14 pb-5">
      <h2 className="m-0 font-mono text-[11px] font-normal uppercase tracking-[0.14em] text-dim">
        {label}
      </h2>
      {metaLabel && metaHref && (
        <a
          href={metaHref}
          className="font-mono text-[11px] uppercase tracking-widest text-dim transition-colors hover:text-foreground"
        >
          {" "}
          {metaLabel}
        </a>
      )}
    </div>
  );
}
