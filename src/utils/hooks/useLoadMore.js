import { useState, useCallback } from "react";

export default function useLoadMore(initialCount = 4, step = 4) {
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const handleLoadMore = useCallback(() => {
    setVisibleCount((prev) => prev + step);
  }, [step]);

  const reset = useCallback(() => {
    setVisibleCount(initialCount);
  }, [initialCount]);

  return { visibleCount, handleLoadMore, reset };
}