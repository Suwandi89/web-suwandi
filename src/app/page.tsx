import About from "@/components/about";
import GradientBlob from "@/components/gradient-blob";
import Hero from "@/components/hero";
import HeroCard from "@/components/hero-card";
import Navbar from "@/components/navbar";
import TechStack from "@/components/tech-stack";

export default function Home() {
  return (
    <div className="relative bg-black overflow-x-hidden">

      <GradientBlob
        top="-25vh" left="-40vw"
        width="100vw" height="70vh" blur="15vw"
      />

      {/* Blob mobile */}
      <div
        className="block md:hidden"
        style={{
          position: "absolute",
          top: "-15vh",
          left: "-28vw",
          width: "80vw",
          height: "50vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, #FFD700 0%, #FFAE00 15%, #FF5E00 35%, #6D28D9 65%, #2D0A5E 85%, transparent 100%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

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

      <Navbar />

      {/* Section Home */}
      <section id="home" className="relative z-10 flex flex-col">
        <div className="flex flex-col md:flex-row">
          <div className="order-2 md:order-1 md:flex-1">
            <Hero />
          </div>
          <div className="order-1 md:order-2 md:flex-1 pt-30 md:pt-0 pl-12 md:pl-0 md:min-h-screen md:flex md:items-center">
            <HeroCard />
          </div>
        </div>
        <div className="md:hidden mt-2">
          <TechStack />
        </div>
      </section>
      
      {/* Section About */}
      <section id="about">
        <About />
      </section>
    </div>
  );
}