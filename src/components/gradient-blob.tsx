type BlobProps = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  width?: string;
  height?: string;
  blur?: string;
}

export default function GradientBlob({
  top, left, right, bottom,
  width = "600px",
  height = "600px",
  blur = "600px",
}: BlobProps) {
  return (
    <div
      className="hidden md:block"
      style={{
        position: "absolute",
        top, left, right, bottom,
        width, height,
        borderRadius: "50%",
        background: "radial-gradient(circle, #FFD700 0%, #FFAE00 15%, #FF5E00 35%, #6D28D9 65%, #2D0A5E 85%, transparent 100%)",
        filter: `blur(${blur})`,
        pointerEvents: "none",
      }} />
  );
}