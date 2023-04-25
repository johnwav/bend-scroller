import "./App.css";
import imageData from "./data.json";
import Carousel from "./components/carousel/carousel";
import { useState } from "react";
import Hero from "./components/hero/hero";
import Contact from "./components/contact/contact";
import "animate.css";

function App() {
  return (
    <div className="app">
      <Carousel imageData={imageData} />
      <Hero />
      <Contact />
    </div>
  );
}

export default App;
