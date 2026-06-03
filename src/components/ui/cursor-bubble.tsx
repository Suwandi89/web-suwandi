"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function CursorBubble() {
    const { ref, isVisible } = useIntersectionObserver<HTMLSpanElement>({
        threshold: 0.5,
        resetOnExit: true,
    });


    return (
        <span ref={ref} className="absolute bottom-0 right-0 pointer-events-none select-none z-20 flex flex-col items-start gap-[2px]">
            
            {/* Kursor */}
            <span
                key={isVisible ? "playing" : "idle"}
                style={{
                    display: "inline-block",
                    opacity: 0,
                    paddingLeft: "18px",
                    animation: isVisible ? "cursorEnter 2.5s ease-in-out forwards" : "none",
                }}
            >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                        d="M2 2L8.5 16L10.5 10.5L16 8.5L2 2Z"
                        fill="black"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                    />
                </svg>
            </span>

            {/* Bubble */}
            <span
                key={isVisible ? "bubble-playing" : "bubble-idle"}
                style={{
                    display: "inline-block",
                    marginLeft: "10px",
                    marginTop: "-4px",
                    opacity: 0,
                    transformOrigin: "top left",
                    animation: isVisible ? "bubbleEnter 2.5s ease-in-out forwards" : "none",
                }}
                className="text-white text-[11px] font-semibold whitespace-nowrap"
            >
                <span style={{
                    display: "block",
                    background: "linear-gradient(135deg, #6D28D9, #4F46E5)",
                    boxShadow: "0 2px 10px rgba(109,40,217,0.5)",
                    borderRadius: "0px 8px 8px 8px",
                    padding: "4px 12px",
                }}>
                    Wandi
                </span>
            </span>

        </span>
    );
}