import React from "react";
import HeroSection from "./components/HeroSection";
import Trusted from "./components/Trusted";
import Services from "./components/Services";

const Home = () => {
  const data = {
    name: " Apple Store",
    description:
      "The Apple Store, a tech enthusiast's haven, is a sleek and modern retail space where cutting-edge technology and innovative design converge. Here, you'll find a curated selection of Apple's iconic products, from the latest iPhones and MacBooks to an array of accessories and software. The store's minimalist aesthetics and friendly, knowledgeable staff create an immersive and educational shopping experience, making it the go-to destination for anyone seeking the best in tech and style.",
  };

  return (
    <>
      <HeroSection myData={data} />
      <Services />
      <Trusted />
    </>
  );
};
export default Home;
