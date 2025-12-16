import { useState } from "react";

const useLoadMore = (initialCount = 4, step = 4) => {
    const [visibleCount, setVisibleCount] = useState(initialCount);
    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + step);
    }
    return { visibleCount, handleLoadMore }
}
export default useLoadMore