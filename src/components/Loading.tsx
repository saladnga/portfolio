export const SkeletonCard = () => (
  <div className="h-full animate-pulse">
    <div className="border rounded-2xl border-white/20 dark:border-white/10 overflow-hidden h-full flex flex-col">
      <div className="h-40 md:h-48 bg-gray-200 dark:bg-gray-700"></div>
      <div className="p-4 md:p-5 flex flex-col grow">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>
        <div className="space-y-2 grow">
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
        </div>
        <div className="flex gap-2 mt-4">
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded flex-1"></div>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded flex-1"></div>
        </div>
      </div>
    </div>
  </div>
);
