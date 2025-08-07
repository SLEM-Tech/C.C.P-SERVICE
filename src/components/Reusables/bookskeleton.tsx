export default function BookCardSkeleton() {
  return (
    <div className="animate-pulse space-y-2 w-[180px] sm:w-[200px]">
      <div className="bg-gray-300 h-52 w-full rounded-lg" />
      <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto" />
      <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto" />
      <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto mt-1" />
    </div>
  );
}
