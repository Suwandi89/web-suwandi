import About from "@/components/sections/about";
import GradientBlob from "@/components/ui/gradient-blob";
import Navbar from "@/components/sections/navbar";
import Experience from "@/components/sections/experience";
import HomePage from "@/components/sections/home";

export default function Home() {
  return (
    <div className="relative bg-black overflow-x-hidden">
      
      {/* Blob home - desktop */}
      <GradientBlob
        top="-25vh" left="-40vw"
        width="100vw" height="70vh" blur="15vw"
      />

      {/* Blob home - mobile */}
      <GradientBlob
        classname="block md:hidden"
        top="-15vh" left="-30vw"
        width="80vw" height="35vh" blur="40px" 
        background="radial-gradient(circle, #FFD700 0%, #FFAE00 15%, #FF5E00 35%, #6D28D9 65%, #2D0A5E 85%, transparent 100%)"
      />

      {/* Blob about - kiri bawah desktop */}
      <div className="hidden md:block" style={{
        position: "absolute",
        top: "100vh", left: "-15vw",
        width: "50vw", height: "60vh",
        borderRadius: "50%",
        background: "radial-gradient(circle, #FF5E00 0%, #C45000 40%, transparent 75%)",
        filter: "blur(10vw)",
        pointerEvents: "none", zIndex: 0,
        opacity: 0.4,
      }} />

      {/* Blob about - mobile */}
      <div className="block md:hidden" style={{
        position: "absolute",
        top: "95vh", right: "-30vw",
        width: "80vw", height: "60vw",
        borderRadius: "50%",
        background: "radial-gradient(circle, #4C1D95 0%, #2D0A5E 50%, transparent 100%)",
        filter: "blur(40px)",
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* Blob Experience - kiri tengah desktop (Orange) */}
      <div className="hidden md:block" style={{
        position: "absolute",
        top: "200vh", left: "3vw",
        width: "50vw", height: "60vh",
        borderRadius: "50%",
        background: "radial-gradient(circle, #FF5E00 0%, #C45000 40%, transparent 75%)",
        filter: "blur(10vw)",
        pointerEvents: "none", zIndex: 0,
        opacity: 0.4,
      }} />


      {/* Blob Experience - kiri tengah desktop (Ungu) */}
      <div className="hidden md:block" style={{
        position: "absolute",
        top: "225vh", left: "12vw",
        width: "20vw", height: "30vw",
        borderRadius: "50%",
        background: "radial-gradient(circle, #4C1D95 0%, #2D0A5E 50%, transparent 100%)",
        filter: "blur(5vw)",
        pointerEvents: "none", zIndex: 0,
        opacity: 0.3
      }} />

      {/* Blob Experience - kiri mobile (Orange) */}
      <div className="block md:hidden" style={{
        position: "absolute",
        top: "215vh", left: "-40vw",
        width: "90vw", height: "60vw",
        borderRadius: "50%",
        background: "radial-gradient(circle, #FF5E00 0%, #C45000 40%, transparent 75%)",
        filter: "blur(40px)",
        pointerEvents: "none", zIndex: 0,
        opacity:0.4
      }} />

      <Navbar />

      {/* Section HomePage */}
      <section id="home" className="relative z-10 flex flex-col">
        <HomePage />
      </section>

      {/* Section About */}
      <section id="about">
        <About />
      </section>

      {/* Section Experience */}
      <section id="experience">
        <Experience />
      </section>
    </div>
  );
}