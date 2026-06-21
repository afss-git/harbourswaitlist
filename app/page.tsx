import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import DeviceShowcase from "@/components/device-showcase";
import ProblemSolution from "@/components/problem-solution";
import ForBuyers from "@/components/for-buyers";
import ForSellers from "@/components/for-sellers";
import CanvaShowcase from "@/components/canva-showcase";
import CategoriesGrid from "@/components/categories-grid";
import BuiltForAfrica from "@/components/built-for-africa";
import WhyJoinEarly from "@/components/why-join-early";
import TrustPillars from "@/components/trust-pillars";
import SecondCta from "@/components/second-cta";
import Footer from "@/components/footer";
import FadeIn from "@/components/fade-in";

export default function WaitlistPage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <DeviceShowcase />
      <FadeIn>
        <ProblemSolution />
      </FadeIn>
      <FadeIn>
        <ForBuyers />
      </FadeIn>
      <ForSellers />
      <CanvaShowcase />
      <FadeIn>
        <CategoriesGrid />
      </FadeIn>
      <FadeIn>
        <BuiltForAfrica />
      </FadeIn>
      <FadeIn>
        <WhyJoinEarly />
      </FadeIn>
      <FadeIn>
        <TrustPillars />
      </FadeIn>
      <FadeIn>
        <SecondCta />
      </FadeIn>
      <Footer />
    </main>
  );
}
