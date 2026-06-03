"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface ExperienceCardProps {
    company: string;
    period: string;
    description: string;
    role: string;
    tech: string;
    active?: boolean;
    index: number;
}

export default function ExperienceCard({
    company, period, description, role, tech, active = false, index
}: ExperienceCardProps) {
    const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.2,
        resetOnExit: true,
    });

    return (
        <div
            ref={ref}
            className="relative mb-8 last:mb-0 pl-8 md:pl-10"
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.5s ease, transform 0.5s ease`,
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
            }}
        >
            {/* Dot */}
            <div className="absolute left-0 top-[6px]" style={{ width: "16px" }}>
                <div
                    className="w-4 h-4 rounded-full border-2 border-black z-10 relative"
                    style={{ background: "#FF8C00" }}
                />
                {active && (
                    <div
                        className="absolute -top-1 -left-1 w-6 h-6 rounded-full animate-ping"
                        style={{
                            border: "1.5px solid rgba(255,140,0,0.4)",
                            animationDuration: "2s",
                        }}
                    />
                )}
            </div>

            {/* Card */}
            <div
                className="rounded-xl px-5 py-4 min-h-[80px]"
                style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "0.5px solid rgba(255,255,255,0.08)",
                    borderLeft: "2px solid transparent",
                    transition: "border-left-color 0.2s, background 0.2s",
                }}
                onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderLeftColor = "#FF8C00";
                    (e.currentTarget as HTMLDivElement).style.background = "rgba(255,140,0,0.05)";
                }}
                onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderLeftColor = "transparent";
                    (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)";
                }}
            >
                {/* Header */}
                <div className="flex flex-wrap items-baseline gap-2 mb-2">
                    <span className="text-white font-bold text-base md:text-lg">
                        {company}
                    </span>
                    <span
                        className="text-white text-xs"
                        style={{
                            background: "rgba(255,255,255,0.06)",
                            border: "0.5px solid rgba(255,255,255,0.1)",
                            borderRadius: "20px",
                            padding: "2px 10px",
                        }}
                    >
                        {period}
                    </span>
                </div>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                    {description}
                </p>

                {/* Badges */}
                <div className="flex items-center gap-2 flex-wrap">
                    <span
                        className="text-white text-xs"
                        style={{
                            border: "0.5px solid rgba(255,255,255,0.25)",
                            borderRadius: "20px",
                            padding: "3px 10px",
                        }}
                    >
                        {role}
                    </span>
                    <span className="text-white/20 text-xs">|</span>
                    <span
                        className="text-white text-xs font-medium"
                        style={{
                            background: "rgba(255,140,0,0.2)",
                            border: "0.5px solid rgba(255,140,0,0.4)",
                            borderRadius: "20px",
                            padding: "3px 10px",
                        }}
                    >
                        {tech}
                    </span>
                </div>
            </div>
        </div>
    );
}