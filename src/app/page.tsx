"use client";
import Benefit from "@/components/organism/Benefit";
import CaseStudies from "@/components/organism/CaseStudies";
import CTA from "@/components/organism/CTA";
import Features from "@/components/organism/Features";
import Footer from "@/components/organism/Footer";
import Header from "@/components/organism/Header";
import Hero from "@/components/organism/Hero";
import Integrations from "@/components/organism/Integrations";
import Testimonies from "@/components/organism/Testimonies";

export default function Home() {
  return (
    <main className="grid gap-16 md:gap-20">
      <Header />
      <Hero />
      <Features />
      <Benefit />
      <Integrations />
      <CaseStudies />
      <Testimonies />
      <CTA />
      <Footer />
    </main>
  );
}
