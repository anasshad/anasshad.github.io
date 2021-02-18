import Head from "next/head";
import styles from "../styles/Home.module.css";

import Main from "../components/Main";
import Personal from "../components/Personal";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="container">
      <Main />
      <Personal />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
}
