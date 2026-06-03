type BlobProps = {
  classname?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  width?: string;
  height?: string;
  blur?: string;
  background?: string;
  opacity?: number;
}

{/* <div className="hidden md:block" style={{
        position: "absolute",
        top: "200vh", left: "3vw",
        width: "50vw", height: "60vh",
        borderRadius: "50%",
        background: "radial-gradient(circle, #FF5E00 0%, #C45000 40%, transparent 75%)",
        filter: "blur(10vw)",
        pointerEvents: "none", zIndex: 0,
        opacity: 0.4,
      }} /> */}

export default function GradientBlob({
  classname = "hidden md:block",
  top, left, right, bottom,
  width = "600px",
  height = "600px",
  blur = "600px",
  background = "radial-gradient(circle, #FFD700 0%, #FFAE00 15%, #FF5E00 35%, #6D28D9 65%, #2D0A5E 85%, transparent 100%)",
  opacity
}: BlobProps) {
  return (
    <div
      className={classname}
      style={{
        position: "absolute",
        top, left, right, bottom,
        width, height,
        borderRadius: "50%",
        background: background,
        filter: `blur(${blur})`,
        pointerEvents: "none",
        opacity: opacity
      }} />
  );
}