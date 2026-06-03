import SelectionBox from "./selection-box";
import { Download } from "lucide-react";
import { TechStackDesktop } from "./tech-stack";
import TypingText from "./typing-text";

export default function Hero() {
    return (
        <div className="flex flex-col px-6 md:pl-[130px] md:pr-16 pt-8 md:pt-0 md:justify-center md:min-h-screen">

            <p className="text-white/60 text-sm mb-2">Hello, world!</p>

            <h1 className="text-3xl md:text-[56px] font-bold text-white leading-tight mb-5">
                Hi, I{"'"}m{" "}
                <SelectionBox><TypingText
                    text="Suwandi"
                    typeSpeed={100}
                    deleteSpeed={60}
                    pauseDuration={5000}
                    delay={600}
                /></SelectionBox>
                <br />Kurniawan
            </h1>

            <p className="text-white/65 text-sm md:text-[16px] leading-relaxed mb-8 max-w-[360px]">
                a Frontend Developer focused on turning designs into fast,
                responsive, and accessible websites.
            </p>
            <a

                href="/cv-suwandi-kurniawan.pdf"
                download="CV Suwandi Kurniawan.pdf"
                className="hidden md:block bg-[#FF5E00] text-white px-7 py-3 rounded-[30px] text-[14px] font-bold cursor-pointer no-underline w-fit mb-6"
            >
                Work with Me
            </a>
            <a
                href="/cv-suwandi-kurniawan.pdf"
                download="CV Suwandi Kurniawan.pdf"
                className="md:hidden flex items-center gap-2 border border-white/40 text-white px-6 py-3 rounded-full text-sm cursor-pointer bg-transparent w-fit no-underline"
            >
                <Download size={16} />
                Download CV
            </a>

            <div className="hidden md:block mt-2">
                <TechStackDesktop />
            </div>

        </div>
    );
}