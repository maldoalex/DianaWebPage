import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Contact />
    </main>
  );
}
