import Features from "@/components/Features";
import Hero from "@/components/Hero";

export const metadata = {
  title: "Home | Simple Cruip",
  description: "Nextjs 13 and Tailwindcss Landing page Template",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
    </div>
  );
}
