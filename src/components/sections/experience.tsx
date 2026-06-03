"use client";

import ExperienceCard from "../ui/experience-card";

const experiences = [
    {
        company: "Agung Sedayu Group",
        period: "Aug 2023 - Present",
        description:
            "Developed unit handover, AR, promotional web, ASG lucky draw, and master data management systems to support key business process across departments.",
        role: "Application Developer",
        tech: "Flutter",
        active: true,
    },
    {
        company: "PT Digital Geo Solusi",
        period: "Jul 2023 - Nov 2023",
        description:
            "Built real-time well monitoring dashboard to visualize data for internal stakeholders.",
        role: "Software Developer",
        tech: "React",
        active: false,
    },
    {
        company: "Medix",
        period: "Jul 2023 - Nov 2023",
        description:
            "Developed a dashboard website to integrate the data of the collaborating hospitals.",
        role: "Lead Programmer",
        tech: "Springboot",
        active: false,
    },
];

export default function Experience() {
    return (
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center py-24 px-6 md:px-16">

            {/* Heading */}
            <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-16">
                Experience
            </h2>

            {/* Timeline */}
            <div className="relative w-full max-w-[700px]">

                {/* Vertical line */}
                <div
                    className="absolute left-[7px] md:left-[7px] top-2 bottom-2 w-[2px]"
                    style={{
                        background: "linear-gradient(to bottom, #FF8C00, #6D28D9, #1a0533)",
                    }}
                />

                {experiences.map((exp, index) => (
                    <ExperienceCard
                        key={exp.company}
                        {...exp}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
}