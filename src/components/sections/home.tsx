import Hero from "../ui/hero";
import HeroCard from "../ui/hero-card";
import TechStack from "../ui/tech-stack";

export default function HomePage() {
    return (<>
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
    </>
    );
}