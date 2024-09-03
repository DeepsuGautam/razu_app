import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import TalentSection from "@/components/TalentSection";
import TopSection from "@/components/TopSection";
import React from "react";

const Home = async () => {
  return (
    <main className="bg-slate-950">
      <TopSection />
      <AboutSection/>
      <TalentSection/>
      <ContactForm/>
    </main>
  );
};

export const revalidate = 0;

export default Home;
