function Crosshair({ className }: { className: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 23 23"
      fill="none"
      stroke="currentColor"
      className={`pointer-events-none absolute size-[23px] text-gray-1000 ${className}`}
    >
      <path d="M11.5 0v23M0 11.5h23" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="relative flex flex-1 items-center justify-center overflow-hidden px-4 py-24">
      <section className="relative w-full max-w-5xl bg-background-100">
        {/* Guides run the frame's edges out to the viewport, Geist grid style */}
        <div aria-hidden className="pointer-events-none absolute -inset-x-[100vw] top-0 h-px bg-gray-alpha-400" />
        <div aria-hidden className="pointer-events-none absolute -inset-x-[100vw] bottom-0 h-px bg-gray-alpha-400" />
        <div aria-hidden className="pointer-events-none absolute -inset-y-[100vh] left-0 w-px bg-gray-alpha-400" />
        <div aria-hidden className="pointer-events-none absolute -inset-y-[100vh] right-0 w-px bg-gray-alpha-400" />
        <Crosshair className="-top-[11px] -left-[11px]" />
        <Crosshair className="-right-[11px] -bottom-[11px]" />

        <div className="flex flex-col items-center px-6 py-24 text-center sm:py-32">
          <h1 className="text-[2.5rem]/[3rem] font-semibold tracking-[-0.06em] text-gray-1000 sm:text-5xl/[3.5rem] md:text-7xl/[4.5rem]">
            Think Twice,
            <br />
            Code Once.
          </h1>
          <p className="mt-6 flex items-center gap-2.5 text-lg text-gray-900 sm:mt-8 sm:text-xl">
            <span aria-hidden className="relative flex size-2">
              <span className="absolute inline-flex size-full rounded-full bg-amber-700 opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-amber-700" />
            </span>
            Coming soon
          </p>
        </div>
      </section>
    </main>
  );
}
