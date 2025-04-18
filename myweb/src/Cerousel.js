import React, { useState, useEffect ,useCallback} from "react";
import "./Carousel.css"; // Import CSS file for styling

function Carousel() {
  // Array of image paths (replace with your actual images)
  const images = [
    require("./image/project2.jpg"),
    require("./image/project3.jpg"),
    require("./image/project2.jpg"),
    require("./image/project4.jpg"),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Auto Slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000); // 3000ms = 3 seconds

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <div className="carousel-container">
      {/* <h2 style={{ color: "black" }}>Our Work</h2> */}
      <div className="carousel">
        <button className="prev" onClick={prevImage}>
          &#10094;
        </button>
        <img
          src={images[currentIndex]}
          alt="carousel"
          className="carousel-image"
        />
        <button className="next" onClick={nextImage}>
          &#10095;
        </button>
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      ></div>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Carousel;