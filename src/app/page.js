import Developers from "@/components/home/Developers";
import Testimonial from "@/components/home/Testimonial";
import FAQ from "@/components/home/FAQ";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Developers />
      <Testimonial />
      <FAQ />
    </main>
  );
}
