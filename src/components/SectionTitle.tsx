interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="section-title text-2xl md:text-4xl font-semibold tracking-widest text-left mb-6 md:mb-10 hover:bg-accent text-accent hover:text-white bg-transparent w-fit transition-all underline-offset-1 underline">
      {children}
    </h2>
  );
}
