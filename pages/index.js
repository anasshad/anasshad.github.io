import Head from "next/head";
import styles from "../styles/Home.module.css";

import Main from "../components/Main";
import Personal from "../components/Personal";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import Contact from "../components/Contact";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full">
      <Header />
      <section id="main">
        <Main />
      </section>
      <section id="profile">
        <Personal />
      </section>
      <section id="technologies">
        <Technologies />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
