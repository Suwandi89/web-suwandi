export default function Footer() {
    return (
        <footer className="relative z-10 border-t border-white/[0.08]">

            {/* Top */}
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 px-6 md:px-20 py-12 md:py-14">

                {/* Left — Logo + tagline + socials */}
                <div className="flex flex-col gap-4">
                    <p className="text-white font-bold text-xl tracking-tight">WANDI</p>
                    <p className="text-white/40 text-sm leading-relaxed max-w-[260px]">
                        Frontend Developer focused on turning designs into fast,
                        responsive, and accessible websites.
                    </p>
                    <div className="flex gap-3 mt-1">
                        <a
                            href="https://github.com/Suwandi89"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="w-9 h-9 rounded-[10px] flex items-center justify-center text-white/50 border-[0.5px] border-white/10 transition-all duration-200 hover:bg-[rgba(255,140,0,0.15)] hover:border-[rgba(255,140,0,0.3)] hover:text-[#FF8C00]"
                            style={{ background: "rgba(255,255,255,0.05)" }}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z"/>
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/suwandi-kurniawan-b05827150/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="w-9 h-9 rounded-[10px] flex items-center justify-center text-white/50 border-[0.5px] border-white/10 transition-all duration-200 hover:bg-[rgba(255,140,0,0.15)] hover:border-[rgba(255,140,0,0.3)] hover:text-[#FF8C00]"
                            style={{ background: "rgba(255,255,255,0.05)" }}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                        <a
                            href="https://www.instagram.com/suwandi_k89/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="w-9 h-9 rounded-[10px] flex items-center justify-center text-white/50 border-[0.5px] border-white/10 transition-all duration-200 hover:bg-[rgba(255,140,0,0.15)] hover:border-[rgba(255,140,0,0.3)] hover:text-[#FF8C00]"
                            style={{ background: "rgba(255,255,255,0.05)" }}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Right — Nav + Contact */}
                <div className="flex gap-12 md:gap-16">
                    <div className="flex flex-col gap-3">
                        <p className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-1">Navigation</p>
                        <a href="#about" className="text-white/50 text-sm hover:text-[#FF8C00] transition-colors no-underline">About</a>
                        <a href="#experience" className="text-white/50 text-sm hover:text-[#FF8C00] transition-colors no-underline">Experience</a>
                        <a href="#project" className="text-white/50 text-sm hover:text-[#FF8C00] transition-colors no-underline">Project</a>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-1">Contact</p>
                        <a
                            href="mailto:Suwandikurniawan89@gmail.com"
                            className="text-white/50 text-sm hover:text-[#FF8C00] transition-colors no-underline"
                        >
                            Suwandikurniawan89@gmail.com
                        </a>
                        <p className="text-white/50 text-sm">Jakarta, Indonesia</p>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-white/[0.06] px-6 md:px-20 py-5 flex flex-col md:flex-row items-center justify-between gap-2">
                <p className="text-white/25 text-xs">© 2024 Suwandi Kurniawan</p>
                <p className="text-white/25 text-xs">Designed & developed by Wandi</p>
            </div>

        </footer>
    );
}