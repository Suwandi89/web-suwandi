"use client";
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none pb-4">

            <div className="flex items-start justify-between px-3 md:items-center md:px-0">
                {/* Logo */}
                <span className="text-white font-bold text-2xl md:text-[34px] mt-6 md:mt-[60px] ml-0 md:ml-[120px] tracking-normal">
                    WANDI
                </span>

                {/* Hamburger - mobile only */}
                <button
                    className="md:hidden text-white mt-7 flex flex-col gap-[5px] p-1"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {/* Garis 1 */}
                    <span className={`block w-6 h-[2px] bg-white transition-all duration-200 origin-center
            ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
                    />
                    {/* Garis 2 */}
                    <span className={`block w-6 h-[2px] bg-white transition-all duration-200
            ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
                    />
                    {/* Garis 3 */}
                    <span className={`block w-6 h-[2px] bg-white transition-all duration-200 origin-center
            ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
                    />
                </button>

                {/* Nav links - desktop only */}
                {/* Di layar besar: absolute center. Di layar medium: relative flex-1 justify-end */}
                <div className="hidden md:flex gap-[60px] lg:gap-[90px] lg:absolute lg:left-1/2 lg:-translate-x-1/2 md:flex-1 md:justify-center lg:flex-none lg:justify-normal mr-[60px] lg:mr-0 mt-6 md:mt-[60px]">
                    {["About", "Experience", "Project"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-white no-underline text-xl font-normal relative group transition-colors hover:text-yellow-400"
                        >
                            {item}
                            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </div>
            </div>

            {/* Mobile menu dropdown dengan animasi */}
            <div className={`md:hidden overflow-hidden transition-all duration-200 ease-in-out
        ${menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
            >
                <div className="flex flex-col items-center gap-6 py-6 bg-black/60 backdrop-blur-sm">
                    {["About", "Experience", "Project"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-white text-lg font-normal hover:text-white/70 transition-colors"
                            onClick={() => setMenuOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>

        </nav>
    );
}