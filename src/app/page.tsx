"use client"
import Benefit from "@/components/organism/Benefit";
import CaseStudies from "@/components/organism/CaseStudies";
import Features from "@/components/organism/Features";
import Header from "@/components/organism/Header";
import Hero from "@/components/organism/Hero";
import Integrations from "@/components/organism/Integrations";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid gap-16">
       <Header />
      <Hero/>
      <Features />
      <Benefit />
      <Integrations />
      <CaseStudies />
    </main>
  );
}
