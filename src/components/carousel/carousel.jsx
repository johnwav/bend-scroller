import React, { useEffect } from "react";
import "./carousel.scss";
import Glide from "@glidejs/glide";

//  If your slide items using a dynamic data, you should pass variable that contain the data, to useEffect() dependencies.

const Carousel = ({ imageData }) => {
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    window.addEventListener("load", (event) => {
      // eslint-disable-next-line no-undef
      new Glide(".glide", {
        type: "carousel",
        // focusAt: "center",s
        perView: 3,
        animationDuration: 300,
        gap: 10,
        autoplay: 3000,
        hoverpause: true,
        peek: {
          before: 200,
          after: 80,
        },
        breakpoints: {
          1280: {
            perView: 3,
            peek: {
              before: 200,
              after: 80,
            },
          },
          1024: {
            perView: 2,
            peek: {
              before: 150,
              after: 30,
            },
            gap: 5,
          },
          580: {
            perView: 1,
            peek: {
              before: 70,
              after: 60,
            },
            gap: 5,
          },
        },
      }).mount();
    });
  }, []);


  return (
    <section className="glide">
      <div id="scrolling">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {imageData.map((item, i) => {
              return (
                <li key={i} className="glide__slide">
                  <img className="image" src={item.image} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
