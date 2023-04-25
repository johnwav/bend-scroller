import React, { useEffect, useState } from "react";
import "./hero.css";

const texts = ["music", "designs"];

const Hero = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const time = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % texts.length);
    }, 3000);

    return () => clearInterval(time);
  }, []);

  return (
    <div className="container">
      <h1>
        Crafting timeless
        <span className="animate__fadeIn"> {texts[counter]}</span> <br /> for
        inspired living
        {console.log(counter)}
      </h1>
    </div>
  );
};

export default Hero;
