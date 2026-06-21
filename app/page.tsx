import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import ProblemSolution from "@/components/problem-solution";
import ForBuyers from "@/components/for-buyers";
import ForSellers from "@/components/for-sellers";
import CategoriesGrid from "@/components/categories-grid";
import BuiltForAfrica from "@/components/built-for-africa";
import WhyJoinEarly from "@/components/why-join-early";
import TrustPillars from "@/components/trust-pillars";
import SecondCta from "@/components/second-cta";
import Footer from "@/components/footer";

export default function WaitlistPage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProblemSolution />
      <ForBuyers />
      <ForSellers />
      <CategoriesGrid />
      <BuiltForAfrica />
      <WhyJoinEarly />
      <TrustPillars />
      <SecondCta />
      <Footer />
    </main>
  );
}
