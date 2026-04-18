import { useEffect } from "react";
import styles from"./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import {Contact} from "./components/Contact/Contact";
import { Background } from "./components/Background/Background";

const EXTRA_TRACKING_PARAMS = ["fbclid", "gclid", "igshid", "mc_cid", "mc_eid"];

function App() {
  useEffect(() => {
    const url = new URL(window.location.href);
    let changed = false;

    for (const key of [...url.searchParams.keys()]) {
      const normalizedKey = key.toLowerCase();
      if (normalizedKey.startsWith("utm_") || EXTRA_TRACKING_PARAMS.includes(normalizedKey)) {
        url.searchParams.delete(key);
        changed = true;
      }
    }

    if (!changed) {
      return;
    }

    const query = url.searchParams.toString();
    const cleanUrl = `${url.pathname}${query ? `?${query}` : ""}${url.hash}`;
    window.history.replaceState({}, "", cleanUrl);
  }, []);

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero/>
      <Background/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App
