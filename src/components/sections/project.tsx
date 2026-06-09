"use client";
import { useRef, useState, useEffect } from "react";
import ProjectCard from "@/components/ui/project-card";

const projects = [
    {
        num: "01",
        title: "Wandi Meals",
        description: "Dummy food ordering app with menu browsing, cart management, and order summary UI.",
        badge: "React",
        badgeColor: "react" as const,
        bgClass: "bg1",
        image: "/images/project-wandi-meals.png",
        github: "https://github.com/Suwandi89/food-order-app",
        live: "https://wandi-foodorderapp.netlify.app/",
    },
    {
        num: "02",
        title: "My Gram",
        description: "Go-powered social media backend with user auth, photo CRUD, and nested comments via RESTful API.",
        badge: "Go",
        badgeColor: "go" as const,
        bgClass: "bg2",
        image: "/images/project-mygram.png",
        github: "https://github.com/Suwandi89/mygram",
    },
    {
        num: "03",
        title: "Map Promosi",
        description: "Field ops tool for technicians to manage banner installation points across PIK area.",
        badge: "Flutter Web",
        badgeColor: "flutter" as const,
        bgClass: "bg3",
        image: "/images/project-map-promosi.png",
        live: "https://promosi.web.app/map",
    },
    {
        num: "04",
        title: "Handover",
        description: "Unit handover management system to streamline the property handover process for PIK residential projects.",
        badge: "Flutter Web",
        badgeColor: "flutter" as const,
        bgClass: "bg3",
        image: "/images/project-tenancy.png",
        live: "https://tenancy.sedayu.one/",
    },
    {
        num: "05",
        title: "Account Receivable",
        description: "Web-based accounting system to create invoices, process refunds, record receipts, and recognize revenue in one place.",
        badge: "Flutter Web",
        badgeColor: "flutter" as const,
        bgClass: "bg3",
        image: "/images/project-ar.png",
        live: "https://ardev.sedayu.one/",
    },
    {
        num: "06",
        title: "Medix",
        description: "Dashboard integrating data from collaborating hospitals with centralized reporting.",
        badge: "Springboot",
        badgeColor: "spring" as const,
        bgClass: "bg5",
        github: "https://github.com/Suwandi89/SI-Medix",
    },
    {
        num: "07",
        title: "DGS Well Monitoring",
        description: "Real-time well monitoring dashboard to visualize data for internal stakeholders.",
        badge: "React",
        badgeColor: "react" as const,
        bgClass: "bg1",
        image: "/images/project-dgs.png",
        github: "https://github.com/Suwandi89/dgs",
    },
];

const total = projects.length;
const gap = 20;

// Card width berbeda desktop vs mobile
function getCardWidth() {
    if (typeof window === "undefined") return 260;
    if (window.innerWidth >= 768) return 260;
    return Math.min(260, window.innerWidth - 32);
}

const getMaxIndex = () => {
    if (typeof window === "undefined") return 0;
    if (window.innerWidth < 768) return total - 1;

    const cardW = getCardWidth();
    const containerWidth = Math.min(window.innerWidth, 900) - 80; // md:px-10 = 40px × 2
    const visibleCards = Math.floor((containerWidth + gap) / (cardW + gap));
    return Math.max(0, total - visibleCards);
};


export default function Project() {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);
    const [maxIndex, setMaxIndex] = useState(0);
    const trackRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    useEffect(() => {
        console.log("maxIndex:", getMaxIndex(), "cardW:", getCardWidth(), "windowW:", window.innerWidth);
    }, [maxIndex]);

    // Simpan getMaxIndex di ref agar stable
    const getMaxIndexRef = useRef(getMaxIndex);
    useEffect(() => {
        getMaxIndexRef.current = getMaxIndex;
    });

    function goTo(i: number) {
        const safeIndex = Math.min(i, getMaxIndex());
        setCurrent(safeIndex);
        if (trackRef.current) {
            let offset: number;

            if (safeIndex === total - 1 && window.innerWidth < 768) {
                // Card terakhir di mobile: rata kanan
                const cardW = getCardWidth();
                const containerW = window.innerWidth - 42;
                offset = (total * (cardW + gap)) - containerW - gap;
            } else {
                offset = safeIndex * (getCardWidth() + gap);
            }

            trackRef.current.style.transition = "transform 0.5s cubic-bezier(0.4,0,0.2,1)";
            trackRef.current.style.transform = `translateX(-${offset}px)`;
        }
    }

    useEffect(() => {
        if (paused) return;
        const timer = setInterval(() => {
            setCurrent(prev => {
                const next = prev >= getMaxIndexRef.current() ? 0 : prev + 1;
                if (trackRef.current) {
                    let offset: number;
                    if (next === total - 1 && window.innerWidth < 768) {
                        const cardW = getCardWidth();
                        const containerW = window.innerWidth - 42;
                        offset = (total * (cardW + gap)) - containerW - gap;
                    } else {
                        offset = next * (getCardWidth() + gap);
                    }
                    trackRef.current.style.transform = `translateX(-${offset}px)`;
                }
                return next;
            });
        }, 3000);
        return () => clearInterval(timer);
    }, [paused]);

    useEffect(() => {
        const update = () => setMaxIndex(getMaxIndex());

        const t = setTimeout(update, 0);
        window.addEventListener("resize", update);
        return () => {
            clearTimeout(t);
            window.removeEventListener("resize", update);
        };
    }, []);

    const handleMouseDown = (e: React.MouseEvent) => {
        isDragging.current = true;
        startX.current = e.pageX;
        scrollLeft.current = current * (getCardWidth() + gap);
        setPaused(true);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current) return;
        const delta = startX.current - e.pageX;
        if (trackRef.current) {
            trackRef.current.style.transition = "none";
            trackRef.current.style.transform = `translateX(-${scrollLeft.current + delta}px)`;
        }
    };

    const handleMouseUp = (e: React.MouseEvent) => {
        if (!isDragging.current) return;
        isDragging.current = false;
        setPaused(false);

        const delta = startX.current - e.pageX;
        const threshold = getCardWidth() / 3;

        if (delta > threshold) {
            goTo(Math.min(current + 1, maxIndex));
        } else if (delta < -threshold) {
            goTo(Math.max(current - 1, 0));
        } else {
            goTo(current); // snap balik ke posisi semula
        }

        if (trackRef.current) {
            trackRef.current.style.transition = "transform 0.5s cubic-bezier(0.4,0,0.2,1)";
        }
    };

    const handleMouseLeave = () => {
        if (isDragging.current) {
            isDragging.current = false;
            setPaused(false);
            goTo(current);
            if (trackRef.current) {
                trackRef.current.style.transition = "transform 0.5s cubic-bezier(0.4,0,0.2,1)";
            }
        }
    };

    return (
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center py-24">

            <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-16 px-6 md:px-16">
                Projects
            </h2>

            <div className="w-full max-w-[900px] px-4 md:px-8">
                <div
                    className="overflow-hidden cursor-grab active:cursor-grabbing"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                >
                    <div
                        ref={trackRef}
                        className="flex gap-4 transition-transform duration-500"
                        style={{
                            transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)",
                            userSelect: "none",
                            paddingLeft: "24px",
                        }}
                    >
                        {projects.map((p) => (
                            <div
                                key={p.num}
                                onMouseEnter={() => setPaused(true)}
                                onMouseLeave={() => setPaused(false)}
                            >
                                <ProjectCard {...p} />
                            </div>
                        ))}
                    </div>
                </div>
                {/* Dots */}
                <div className="flex gap-[6px] justify-center mt-5">
                    {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            className="h-[6px] rounded-full transition-all duration-300"
                            style={{
                                width: current === i ? "20px" : "6px",
                                background: current === i ? "#FF8C00" : "rgba(255,255,255,0.18)",
                            }}
                            aria-label={`Go to project ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}