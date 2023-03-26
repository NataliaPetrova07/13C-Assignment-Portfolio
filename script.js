"use strict";

// ARROW

const wiggleProp = {
  duration: 500,
  iterations: Infinity,
  direction: "alternate",
  easing: "ease-in-out",
};

const wiggleKey = [{ transform: "translateX(0rem)" }, { transform: "translateX(-1rem)" }];

const arrow = document.querySelector(".bi-arrow-right-circle-fill");
const wiggleAnimation = arrow.animate(wiggleKey, wiggleProp);
