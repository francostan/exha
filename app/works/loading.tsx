export default function WorksLoading() {
  return (
    <div className="min-h-screen px-8 md:px-16 pt-32 md:pt-28 pb-28">
      <div className="mb-20">
        <div className="h-3 w-12 bg-muted/40 rounded mb-10 animate-pulse" />
        <div className="h-6 w-48 bg-muted/40 rounded mb-2 animate-pulse" />
        <div className="h-3 w-24 bg-muted/40 rounded animate-pulse" />
      </div>
      <div className="flex gap-8 mb-20">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-3 w-16 bg-muted/40 rounded animate-pulse" />
        ))}
      </div>
      <div className="grid grid-cols-12 gap-5 md:gap-8">
        <div className="col-span-12 md:col-span-5 aspect-[3/4] bg-muted/20 animate-pulse" />
        <div className="col-span-6 md:col-span-5 md:col-start-7 md:mt-40 aspect-[16/10] bg-muted/20 animate-pulse" />
      </div>
    </div>
  )
}
