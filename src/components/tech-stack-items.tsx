"use client";
import Image from "next/image";

type Props = {
  name: string;
  icon: string;
  bg: string;
  size: number;
  iconSize: number;
  radius: number;
}

export default function TechStackItem({ name, icon, bg, size, iconSize, radius }: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "6px",
        flexShrink: 0,
        cursor: "pointer",
        transition: "transform 0.2s",
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-6px)")}
      onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
    >
      <div style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: `${radius}px`,
        background: bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: `0 4px 16px ${bg}55`,
      }}>
        <Image src={icon} alt={name} width={iconSize} height={iconSize} />
      </div>
      <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.5)", whiteSpace: "nowrap" }}>
        {name}
      </span>
    </div>
  );
}