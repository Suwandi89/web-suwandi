"use client";

import Image from "next/image";

interface ProjectCardProps {
    num: string;
    title: string;
    description: string;
    badge: string;
    badgeColor: "react" | "go" | "flutter" | "spring" | "next";
    image?: string;
    bgClass?: string;
    github?: string;
    live?: string;
}

const badgeStyles: Record<string, string> = {
    react: "bg-[rgba(255, 211, 91, 0.12)] text-[#FF8C00] border-[rgba(247, 212, 160, 0.2)]",
    go: "bg-[rgba(0,173,216,0.12)] text-[#00ADD8] border-[rgba(0,173,216,0.2)]",
    flutter: "bg-[rgba(33,150,243,0.12)] text-[#64B5F6] border-[rgba(33,150,243,0.2)]",
    spring: "bg-[rgba(109,211,115,0.12)] text-[#81C784] border-[rgba(109,211,115,0.2)]",
    next: "bg-[rgba(255,255,255,0.08)] text-white/70 border-[rgba(255,255,255,0.15)]",
};

const bgStyles: Record<string, string> = {
    bg1: "bg-gradient-to-br from-[#1a1a2e] to-[#16213e]",
    bg2: "bg-gradient-to-br from-[#0f3460] to-[#533483]",
    bg3: "bg-gradient-to-br from-[#134e5e] to-[#71b280]",
    bg4: "bg-gradient-to-br from-[#1a0533] to-[#3D0C61]",
    bg5: "bg-gradient-to-br from-[#0d2137] to-[#1a4060]",
};

export default function ProjectCard({
    num, title, description, badge, badgeColor, image, bgClass, github, live
}: ProjectCardProps) {
    return (
        <div
            className="group flex-shrink-0 rounded-[14px] overflow-hidden cursor-pointer border-[0.5px] transition-all duration-250 hover:-translate-y-1 flex flex-col"
            style={{
                minWidth: "min(260px, calc(100vw - 48px))",
                height: "320px", // ← fixed height
                background: "#111",
                borderColor: "rgba(255,255,255,0.07)",
            }}
            onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,140,0,0.5)"}
            onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)"}
        >
            {/* Screenshot area */}
            <div className="relative h-[140px] overflow-hidden">
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-400 group-hover:scale-105"
                    />
                ) : (
                    <div className={`w-full h-full flex items-center justify-center ${bgStyles[bgClass ?? "bg1"]}`}>
                        <span className="text-white/10 text-5xl font-bold font-mono">{num}</span>
                    </div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(255,140,0,0.15)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Project number */}
                <span className="absolute top-2 left-3 text-2xl font-extrabold text-white/7 font-mono pointer-events-none">
                    {num}
                </span>
                {/* Links */}
                <div className="absolute top-2 right-2 flex gap-1">
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-7 h-7 rounded-[7px] flex items-center justify-center text-white/60 text-sm border-[0.5px] border-white/12 hover:bg-[rgba(255,140,0,0.3)] hover:text-[#FF8C00] transition-all"
                            style={{ background: "rgba(0,0,0,0.55)" }}
                            aria-label="GitHub"
                            onClick={e => e.stopPropagation()}
                        >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                        </a>
                    )}
                    {live && (
                        <a
                            href={live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-7 h-7 rounded-[7px] flex items-center justify-center text-white/60 text-sm border-[0.5px] border-white/12 hover:bg-[rgba(255,140,0,0.3)] hover:text-[#FF8C00] transition-all"
                            style={{ background: "rgba(0,0,0,0.55)" }}
                            aria-label="Live"
                            onClick={e => e.stopPropagation()}
                        >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                        </a>
                    )}
                </div>
            </div>

            {/* Body */}
            <div className="p-3 pb-4 flex flex-col flex-1">
                <p className="text-white font-semibold text-[13px] mb-1">{title}</p>
                <p className="text-white/40 text-[11px] leading-relaxed mb-3 flex-1">{description}</p>
                <span className={`text-[11px] font-medium rounded-full px-[9px] py-[2px] border-[0.5px] self-start ${badgeStyles[badgeColor]}`}>
                    {badge}
                </span>
            </div>
        </div>
    );
}