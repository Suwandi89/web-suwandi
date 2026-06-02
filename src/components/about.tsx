import Image from "next/image";
import SelectionBox from "./selection-box";

const education = [
    {
        institution: "Universitas Indonesia",
        detail: "Information Systems",
        period: "Sep 2019 – Jan 2023",
        extra: "3.74",
    },
    {
        institution: "SMAN 2 Jakarta",
        detail: "Science",
        period: "Jun 2016 – Jun 2019",
    },
];

const courses = [
    {
        institution: "Udemy",
        detail: "React : The Complete Guide 2023",
        period: "Jun 2023 – Jul 2023",
    },
    {
        institution: "Hactiv8 Indonesia",
        detail: "Scalable Web Service with Golang",
        period: "Mar 2023 – May 2023",
    },
];

export default function About() {
    return (
        <section id="about" className="relative z-10 min-h-screen flex flex-col items-center justify-center py-24 px-6 md:px-16">

            {/* Heading */}
            <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-6">
                Get to Know <SelectionBox>Me</SelectionBox>
            </h2>

            {/* Subtext */}
            <p className="text-white/60 text-center text-sm md:text-base leading-relaxed max-w-[600px] mb-16">
                I&apos;m a Frontend Developer who transforms designs into fast, responsive, and
                accessible web experiences. Proficient in Flutter Web, HTML, CSS, JavaScript, and
                React, with supporting backend skills that allow me to understand the full
                picture and build smarter, more integrated solutions.
            </p>

            {/* Grid Education & Course */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-[800px] px-6 md:px-0">

                {/* Education */}
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <Image src="/icons/education.png" alt="Education" width={28} height={28} />
                        <h3 className="text-white font-bold text-xl">Education</h3>
                    </div>
                    <div className="relative">
                        {/* Vertical line */}
                        <div style={{
                            position: "absolute",
                            left: "-20px",
                            top: 0,
                            bottom: 0,
                            width: "2px",
                            background: "linear-gradient(to bottom, #FF8C00, #6D28D9)",
                        }} />
                        <div className="flex flex-col gap-4">
                            {education.map((item) => (
                                <div key={item.institution} style={{
                                    background: "rgba(255,255,255,0.05)",
                                    border: "0.5px solid rgba(255,255,255,0.1)",
                                    borderRadius: "12px",
                                    padding: "16px 20px",
                                }}>
                                    <div className="flex justify-between items-start mb-1">
                                        <p className="text-white font-semibold text-base">{item.institution}</p>
                                        {item.extra && (
                                            <span className="text-[#FF8C00] text-base font-bold">{item.extra}</span>
                                        )}
                                    </div>
                                    <p className="text-white/50 text-sm mb-3">{item.detail}</p>
                                    {item.extra && (
                                        <div style={{
                                            height: "3px",
                                            background: "linear-gradient(to right, #FF8C00, transparent)",
                                            borderRadius: "2px",
                                            marginBottom: "10px",
                                        }} />
                                    )}
                                    <span style={{
                                        fontSize: "12px",
                                        color: "white",
                                        background: "rgba(255,140,0,0.2)",
                                        border: "0.5px solid rgba(255,140,0,0.4)",
                                        borderRadius: "20px",
                                        padding: "3px 10px",
                                    }}>
                                        {item.period}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Course */}
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <Image src="/icons/course.png" alt="Course" width={28} height={28} />
                        <h3 className="text-white font-bold text-xl">Course</h3>
                    </div>
                    <div className="relative">
                        {/* Vertical line */}
                        <div style={{
                            position: "absolute",
                            left: "-20px",
                            top: 0,
                            bottom: 0,
                            width: "2px",
                            background: "linear-gradient(to bottom, #6D28D9, #2D0A5E)",
                        }} />
                        <div className="flex flex-col gap-4">
                            {courses.map((item) => (
                                <div key={item.institution} style={{
                                    background: "rgba(255,255,255,0.05)",
                                    border: "0.5px solid rgba(255,255,255,0.1)",
                                    borderRadius: "12px",
                                    padding: "16px 20px",
                                }}>
                                    <p className="text-white font-semibold text-base mb-1">{item.institution}</p>
                                    <p className="text-white/50 text-sm mb-3">{item.detail}</p>
                                    <span style={{
                                        fontSize: "12px",
                                        color: "white",
                                        background: "rgba(109,40,217,0.2)",
                                        border: "0.5px solid rgba(109,40,217,0.4)",
                                        borderRadius: "20px",
                                        padding: "3px 10px",
                                    }}>
                                        {item.period}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}