interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageContainer({
  children,
  className = "",
}: PageContainerProps) {
  return (
    <div
      className={`w-full md:w-3/4 lg:w-1/2 mx-auto px-4 md:px-0 ${className}`}
    >
      {children}
    </div>
  );
}
