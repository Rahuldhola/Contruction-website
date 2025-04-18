import React, { useEffect, useRef, useState } from "react";
import logo from "./image/main.jpg";
import "./home.css";
import Cerosal from "./Cerousel";
import CountingEffect from "./count";
import Card from "./card";
import Card2 from "./card2";
import Card3 from "./card3";
import "./card.css";


function Home() {
  const galleryRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      { threshold: 0.1 }
    );

    const gallery = galleryRef.current;
    if (gallery) {
      observer.observe(gallery);
    }

    return () => {
      if (gallery) observer.unobserve(gallery);
    };
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={logo} alt="Construction Banner" className="hero-img" />
        <div className="hero-text">
          <h2>Welcome to P S Vadhiya Construction</h2>
        </div>
      </div>

      {/* Our Projects Section */}
      <section className="projects-section">
        <h1>Our Projects</h1>
        <div
          ref={galleryRef}
          className={`project-gallery ${isVisible ? "animate-up" : ""}`}
        >
          <div className="project-item">
            <img src={logo} alt="Project 1" />
            <div className="project-description">
              MRF Tyres Site Construction
            </div>
          </div>
          <div className="project-item">
            <img src={require("./image/work.jpg")} alt="Project 2" />
            <div className="project-description">
              TCS Corporate Office Project
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <p>We specialize in industrial, residential, and infrastructure projects.</p>
        <Cerosal />
      </section>

      {/* Cards Section */}
      <section className="cards-section">
        <h2>Our Clients</h2>
        <div className="cardd">
          <div>
            <a className="text-title" href="/#">MRF Tyres</a>
            <Card />
          </div>
          <div>
            <a className="text-title" href="/#">TCS Company</a>
            <Card2 />
          </div>
          <div>
            <a className="text-title" href="/#">Chemicals</a>
            <Card3 />
          </div>
        </div>
      </section>

      {/* Counting Effect */}
      <section className="count-section">
        <CountingEffect />
      </section>
    </div>
  );
}

export default Home;
