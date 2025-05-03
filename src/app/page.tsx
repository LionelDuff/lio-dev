import React from "react";
import "@ant-design/v5-patch-for-react-19";

import Header from "@/components/Header";
import Welcome from "@/components/Welcome";
import ButtonFloat from "@/components/ButtonFloat";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <header className="fixed z-1000 top-0 flex justify-center w-screen h-26 header-mask ">
        <Header />
      </header>
      <main
        id="home"
        className="flex flex-col items-center w-screen min-h-[calc(100vh-8rem)] xl:pt-40 pt-24"
      >
        <section className="w-9/10 pb-10 ">
          <Welcome />
        </section>
        <section id="competences" className="w-9/10 pb-10">
          <Skills />
        </section>
        <section id="projets" className="w-9/10 pb-10">
          <Projects />
        </section>
        <section id="contact" className="w-9/10 pb-10">
          <Contact />
        </section>
        <Footer />
      </main>

      <ButtonFloat />
    </div>
  );
}
