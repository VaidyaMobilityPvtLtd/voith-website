import Businesses from "@/components/Businesses";
import Features from "@/components/Features";
import Family from "@/components/Family";
import FutureSection from "@/components/FutureSection";
import Global from "@/components/Global";
import Hero from "@/components/Hero";
import History from "@/components/History";
import Milestones from "@/components/Milestones";
import Philosophy from "@/components/Philosophy";
import Testimonials from "@/components/Testimonials";

export const revalidate = 86_400;

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Businesses />
      <Global />
      <Milestones />
      <History />
      <Philosophy />
      <Family />
      <FutureSection />
      <Testimonials />
    </>
  );
}
