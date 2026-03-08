import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { HeroBridge } from "@/components/sections/hero-bridge";
import { Guide } from "@/components/sections/guide";
import { Community } from "@/components/sections/community";
import { CTA } from "@/components/sections/cta";
import { Channels } from "@/components/sections/channels";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HeroBridge />
        <Guide />
        <Community />
        <CTA />
        <Channels />
      </main>
      <Footer />
    </>
  );
}
