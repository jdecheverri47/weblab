import Image from "next/image";
import LandingPage from "../components/section/LandingPage";
import BenefitSection from "@/components/section/BenefitSection";
import ServiceSection from "@/components/section/ServiceSection";

export default function Home() {
  return (
    <main className="text-white overflow-hidden">
      <div className="absolute w-[500px] h-[500px] bg-fuchsia-600 bg-opacity-50 rounded-full blur-[120px] -right-[5%] -top-[45%] -z-10" />
      <div className="absolute w-[456px] h-[444px] bg-fuchsia-600 bg-opacity-50 rounded-full blur-[600px] -left-[10%] -bottom-[40%] -z-20" />

      <LandingPage />
      <BenefitSection />
      <ServiceSection />
    </main>
  );
}
