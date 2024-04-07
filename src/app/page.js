import AboutUs from "@/components/AboutUs";
import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import MissionStatement from "@/components/MissionStatement";
import Products from "@/components/Products";
import WhyUS from "@/components/WhyUS";

export default function Home() {
  return (
    <div>
      <Hero />
      <Products />
      <Explore />
      <AboutUs />
      <MissionStatement />
    </div>
  );
}
