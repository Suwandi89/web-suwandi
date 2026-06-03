"use client";
import TechStackItem from "./tech-stack-items";

const techs = [
    { name: "HTML5", icon: "/icons/html.png", bg: "#E44D26" },
    { name: "TypeScript", icon: "/icons/typescript.png", bg: "#3178C6" },
    { name: "JavaScript", icon: "/icons/js.png", bg: "#F7DF1E" },
    { name: "Flutter", icon: "/icons/flutter.png", bg: "#FFFFFF" },
    { name: "Python", icon: "/icons/python.png", bg: "#3776AB" },
    { name: "Java", icon: "/icons/java.png", bg: "#333333" },
    { name: "Django", icon: "/icons/django.png", bg: "#092E20" },
    { name: "React", icon: "/icons/react.png", bg: "#20232A" },
    { name: "Spring", icon: "/icons/spring.png", bg: "#E2FFCF" },
];

// Mobile - scrollable dengan label
export function TechStackMobile() {
  return (
    <div className="md:hidden px-6 py-6">
      <p className="mb-4" style={{
        fontSize: "11px",
        color: "rgba(255,255,255,0.4)",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
      }}>
        Tech Stack
      </p>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        overflowX: "auto",
        scrollbarWidth: "none",
        paddingBottom: "4px",
      }}>
        {techs.map((tech) => (
          <TechStackItem
            key={tech.name}
            name={tech.name}
            icon={tech.icon}
            bg={tech.bg}
            size={44}
            iconSize={28}
            radius={10}
          />
        ))}
      </div>
    </div>
  );
}

// Desktop - icon sejajar dengan divider tiap 3 item
export function TechStackDesktop() {
  return (
    <div className="hidden md:flex items-center gap-3">
      {techs.map((tech, i) => (
        <div key={tech.name} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {i !== 0 && i % 3 === 0 && (
            <div style={{
              width: "0.5px",
              height: "28px",
              background: "rgba(255,255,255,0.15)",
            }} />
          )}
          <TechStackItem
            name={tech.name}
            icon={tech.icon}
            bg={tech.bg}
            size={28}
            iconSize={16}
            radius={6}
          />
        </div>
      ))}
    </div>
  );
}

// Default export untuk backward compatibility
export default function TechStack() {
  return (
    <>
      <TechStackMobile />
    </>
  );
}