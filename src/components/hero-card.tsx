import Image from "next/image";

const floatingIcons = [
    { src: "/icons/js.png", alt: "JavaScript", top: "5%", left: "-5%" },
    { src: "/icons/flutter.png", alt: "Flutter", top: "-14%", right: "18%" },
    { src: "/icons/python.png", alt: "Python", top: "25%", right: "-10%" },
    { src: "/icons/java.png", alt: "Java", bottom: "5%", right: "8%" },
];

export default function HeroCard() {
    return (
        <div className="flex flex-1 items-center justify-center md:justify-end pr-16">

            {/* Wrapper scalable */}
            <div style={{
                position: "relative",
                width: "70vw",
                aspectRatio: "380/280",
            }}
                className="md:w-[30vw] md:max-w-[450px] md:mr-[60px]"
            >

                {/* Kartu SVG */}
                <svg
                    viewBox="0 0 380 500"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    style={{
                        width: "100%",
                        height: "100%",
                        filter: "drop-shadow(0 25px 60px rgba(0,0,0,0.5))",
                    }}
                >
                    <defs>
                        <linearGradient id="cardGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#C45000" />
                            <stop offset="30%" stopColor="#6D28D9" />
                            <stop offset="100%" stopColor="#FF8C00" />
                        </linearGradient>
                    </defs>

                    <path
                        d="
                            M 25,80
                            L 350,4
                            Q 380,0 380,50
                            L 380,460
                            Q 380,500 360,500
                            L 20,430
                            Q 10,420 10,400
                            L 10,120
                            Q 10,85 25,80
                            Z
                        "
                        fill="url(#cardGradient)"
                    />
                </svg>

                {/* Floating icons */}
                {floatingIcons.map((icon) => (
                    <div
                        key={icon.alt}
                        style={{
                            position: "absolute",
                            top: icon.top,
                            left: icon.left,
                            right: icon.right,
                            bottom: icon.bottom,
                        }}
                    >
                        <div style={{
                            background: "white",
                            borderRadius: "14px",
                            padding: "10px",
                            boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                            width: "52px",
                            height: "52px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                            <Image src={icon.src} alt={icon.alt} width={32} height={32} />
                        </div>
                    </div>
                ))}

                {/* Badge LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/suwandi-kurniawan-b05827150/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        position: "absolute",
                        bottom: "20%",
                        left: "-12%",
                        background: "white",
                        borderRadius: "30px",
                        padding: "8px 16px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                        whiteSpace: "nowrap",
                        textDecoration: "none",
                        cursor: "pointer",
                    }}>
                    <Image src="/icons/linkedin.png" alt="LinkedIn" width={30} height={30} />
                    <span style={{ fontSize: "14px", fontWeight: 500, color: "#0065C7" }}>
                        suwandi-kurniawan
                    </span>
                </a>

            </div>
        </div>
    );
}