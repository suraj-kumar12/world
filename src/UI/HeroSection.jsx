import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import heroImage from "../assets/image.png"; // adjust the path as per your folder structure

const HeroSection = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1>
            Explore the World, One <br /> Country at a Time
          </h1>
          <p>
            Discover the history, culture and beauty of every nation. Sort,
            search and filter through countries to find details you need.
          </p>

          <button className="btn">
            Start Exploring
            <span>
              <FaRegArrowAltCircleRight />
            </span>
          </button>
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="beauty of nature" />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
