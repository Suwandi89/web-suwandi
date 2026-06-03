import { useEffect, useRef, useState } from "react";

interface UseIntersectionObserverOptions {
    threshold?: number;
    resetOnExit?: boolean;
}

export function useIntersectionObserver<T extends HTMLElement>({
    threshold = 0.5,
    resetOnExit = false,
}: UseIntersectionObserverOptions = {}) {
    const ref = useRef<T>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else if (resetOnExit) {
                    setIsVisible(false);
                }
            },
            { threshold }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [threshold, resetOnExit]);

    return { ref, isVisible };
}