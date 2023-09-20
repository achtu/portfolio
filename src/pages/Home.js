import React from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";


export default function Home() {
  return (
    <>
      <div className="home-wrp">
        <div className="portfolio">
          <h1 style={{ fontSize: "48px" }}>Portfolio</h1>
          <hr className="hr-style-one" />
          <h2>Frontend Developer</h2>
        </div>

        <About />

        <Projects />

        <Contact />
      </div>
    </>
  );
}
