export function GlobalLoading() {
  return (
    <div
      className="flex items-center justify-center min-h-[50vh] text-primary"
      aria-busy="true"
    >
      <div className="w-80 sm:w-96 overflow-hidden px-4">
        <svg
          viewBox="0 0 200 40"
          className="w-full h-20 sm:h-24 text-primary"
          aria-hidden
        >
          <defs>
            <linearGradient id="ecg-glow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
              <stop offset="50%" stopColor="currentColor" stopOpacity="1" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            d="M 0 20 L 200 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeOpacity="0.2"
            strokeDasharray="4 4"
          />
          <path
            d="M 0 20 L 30 20 L 40 8 L 50 20 L 70 20 L 75 12 L 80 20 L 200 20"
            fill="none"
            stroke="url(#ecg-glow)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="250"
            className="animate-ecg-line"
          />
        </svg>
      </div>
    </div>
  );
}
