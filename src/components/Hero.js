import React, { useState } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "iPhone 14 Series",
      description: "Up to 10% off Voucher",
      image: "/images/iphone.png",
      backgroundColor: "#000",
    },
    // Add more slides here if needed
  ];

  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "400px",
    overflow: "hidden",
    borderRadius: "8px",
    marginBottom: "20px",
  };

  const slideStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "40px",
    height: "100%",
    backgroundColor: slides[currentSlide].backgroundColor,
    color: "#fff",
  };

  const contentStyle = {
    flex: "1",
    paddingLeft: "40px",
  };

  const imageStyle = {
    flex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const buttonStyle = {
    backgroundColor: "#fff",
    color: "#000",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "20px",
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
  };

  const dotsContainerStyle = {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "10px",
  };

  const dotStyle = (isActive) => ({
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: isActive ? "#fff" : "rgba(255, 255, 255, 0.5)",
    cursor: "pointer",
  });

  return (
    <div style={containerStyle}>
      <div style={slideStyle}>
        <div style={contentStyle}>
          <img
            src="/images/apple-logo.png"
            alt="Apple"
            style={{ width: "50px", marginBottom: "20px" }}
          />
          <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
            {slides[currentSlide].title}
          </h1>
          <h2 style={{ fontSize: "32px", marginBottom: "30px" }}>
            {slides[currentSlide].description}
          </h2>
          <button style={buttonStyle}>
            Shop Now
            <span style={{ fontSize: "20px" }}>→</span>
          </button>
        </div>
        <div style={imageStyle}>
          <img
            src={slides[currentSlide].image}
            alt="iPhone 14"
            style={{
              maxWidth: "100%",
              height: "auto",
              transform: "rotate(-15deg)",
            }}
          />
        </div>
      </div>
      <div style={dotsContainerStyle}>
        {slides.map((_, index) => (
          <div
            key={index}
            style={dotStyle(index === currentSlide)}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
