type SelectionBoxProps = {
    children: React.ReactNode;
}

export default function SelectionBox({ children }: SelectionBoxProps) {
    return (
        <span style={{ position: "relative", display: "inline-block", padding: "4px 10px" }}>
            {children}

            {/* Semua border dan corner hanya tampil di desktop */}
            <span className="hidden md:block">

                {/* Border utama */}
                <span style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(255, 255, 255, 0.15)",
                    border: "1.5px solid rgba(173, 216, 230, 0.7)",
                    pointerEvents: "none",
                }} />

                {/* Corner kiri atas */}
                <span style={{ position: "absolute", top: -4, left: -4, width: 10, height: 10, background: "rgba(173, 216, 230, 0.9)", border: "1.5px solid white" }} />

                {/* Corner kanan atas */}
                <span style={{ position: "absolute", top: -4, right: -4, width: 10, height: 10, background: "rgba(173, 216, 230, 0.9)", border: "1.5px solid white" }} />

                {/* Corner kiri bawah */}
                <span style={{ position: "absolute", bottom: -4, left: -4, width: 10, height: 10, background: "rgba(173, 216, 230, 0.9)", border: "1.5px solid white" }} />

                {/* Corner kanan bawah */}
                <span style={{ position: "absolute", bottom: -4, right: -4, width: 10, height: 10, background: "rgba(173, 216, 230, 0.9)", border: "1.5px solid white" }} />

            </span>

            <span className="md:hidden">

                {/* Border utama */}
                <span style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "4px",
                    border: "1.5px solid rgba(173, 216, 230, 0.7)",
                    pointerEvents: "none",
                }} />
            </span>
            
        </span>
    );
}