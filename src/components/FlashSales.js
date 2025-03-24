import React, { useState, useEffect } from "react";

const FlashSales = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const products = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      originalPrice: 160,
      discount: 40,
      image: "/images/gamepad.jpg",
      rating: 4.5,
      reviews: 88,
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      price: 960,
      originalPrice: 1160,
      discount: 35,
      image: "/images/keyboard.jpg",
      rating: 4.5,
      reviews: 75,
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      price: 370,
      originalPrice: 400,
      discount: 30,
      image: "/images/monitor.jpg",
      rating: 4.5,
      reviews: 99,
    },
    {
      id: 4,
      name: "S-Series Comfort Chair",
      price: 375,
      originalPrice: 400,
      discount: 25,
      image: "/images/chair.jpg",
      rating: 4.5,
      reviews: 99,
    },
  ];

  const containerStyle = {
    width: "100%",
    padding: "20px 0",
    marginTop: "20px",
    position: "relative",
    boxSizing: "border-box",
  };

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "40px",
    padding: "0 20px",
  };

  const titleContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  };

  const redDotStyle = {
    width: "20px",
    height: "40px",
    backgroundColor: "#DB4444",
    borderRadius: "4px",
  };

  const titleStyle = {
    margin: "0",
    fontSize: "36px",
    fontWeight: "600",
  };

  const timerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  };

  const timeBoxStyle = {
    color: "#DB4444",
    padding: "8px 12px",
    minWidth: "35px",
    textAlign: "center",
    fontWeight: "700",
    fontSize: "24px",
    fontFamily: "Arial, sans-serif",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(219, 68, 68, 0.15)",
    border: "1px solid rgba(219, 68, 68, 0.1)",
  };

  const colonStyle = {
    color: "#DB4444",
    fontSize: "24px",
    fontWeight: "700",
    textShadow: "0 2px 4px rgba(219, 68, 68, 0.1)",
    margin: "0 -4px",
  };

  const carouselContainerStyle = {
    position: "relative",
    width: "100%",
    padding: "0 40px",
    boxSizing: "border-box",
    backgroundColor: "#fff",
    "@media (max-width: 768px)": {
      padding: "0 30px",
    },
  };

  const productsContainerStyle = {
    display: "flex",
    gap: "20px",
    overflowX: "auto",
    padding: "20px 0",
    scrollBehavior: "smooth",
    msOverflowStyle: "none",
    scrollbarWidth: "none",
    width: "100%",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  };

  const productCardStyle = {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    border: "1px solid #eee",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    backgroundColor: "#fff",
    flex: "0 0 280px",
    position: "relative",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    "@media (max-width: 768px)": {
      flex: "0 0 240px",
      padding: "15px",
    },
  };

  const discountBadgeStyle = {
    position: "absolute",
    top: "12px",
    left: "12px",
    background: "#DB4444",
    color: "#fff",
    padding: "4px 8px",
    borderRadius: "4px",
    fontSize: "14px",
  };

  const productImageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    marginBottom: "15px",
    "@media (max-width: 768px)": {
      height: "160px",
    },
  };

  const productNameStyle = {
    fontSize: "16px",
    fontWeight: "500",
    margin: "0 0 10px 0",
    color: "#000",
  };

  const priceContainerStyle = {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    marginBottom: "10px",
  };

  const currentPriceStyle = {
    color: "#DB4444",
    fontWeight: "600",
    fontSize: "16px",
  };

  const originalPriceStyle = {
    color: "#666",
    textDecoration: "line-through",
    fontSize: "14px",
  };

  const ratingStyle = {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    color: "#666",
    fontSize: "14px",
  };

  const arrowButtonStyle = (direction) => ({
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    [direction]: "0",
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    border: "1px solid #eee",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    zIndex: 2,
    transition: "all 0.3s ease",
    "@media (max-width: 768px)": {
      width: "30px",
      height: "30px",
      [direction]: "-5px",
    },
    "&:hover": {
      backgroundColor: "#DB4444",
      color: "#fff",
    },
  });

  const scrollContainer = (direction) => {
    const container = document.getElementById("products-container");
    if (container) {
      const scrollAmount =
        direction === "left" ? -container.offsetWidth : container.offsetWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <div style={titleContainerStyle}>
          <div style={redDotStyle}></div>
          <div>
            <div
              style={{
                color: "#DB4444",
                fontWeight: "600",
                marginBottom: "4px",
              }}
            >
              Today's
            </div>
            <h2 style={titleStyle}>Flash Sales</h2>
          </div>
        </div>
        <div style={timerStyle}>
          <div style={timeBoxStyle}>
            {String(timeLeft.days).padStart(2, "0")}
          </div>
          <span style={colonStyle}>:</span>
          <div style={timeBoxStyle}>
            {String(timeLeft.hours).padStart(2, "0")}
          </div>
          <span style={colonStyle}>:</span>
          <div style={timeBoxStyle}>
            {String(timeLeft.minutes).padStart(2, "0")}
          </div>
          <span style={colonStyle}>:</span>
          <div style={timeBoxStyle}>
            {String(timeLeft.seconds).padStart(2, "0")}
          </div>
        </div>
      </div>

      <div style={carouselContainerStyle}>
        <button
          style={arrowButtonStyle("left")}
          onClick={() => scrollContainer("left")}
          aria-label="Scroll left"
        >
          ←
        </button>
        <button
          style={arrowButtonStyle("right")}
          onClick={() => scrollContainer("right")}
          aria-label="Scroll right"
        >
          →
        </button>
        <div id="products-container" style={productsContainerStyle}>
          {products.map((product) => (
            <div
              key={product.id}
              style={productCardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)";
              }}
            >
              <div style={discountBadgeStyle}>-{product.discount}%</div>
              <img
                src={product.image}
                alt={product.name}
                style={productImageStyle}
              />
              <h3 style={productNameStyle}>{product.name}</h3>
              <div style={priceContainerStyle}>
                <span style={currentPriceStyle}>${product.price}</span>
                <span style={originalPriceStyle}>${product.originalPrice}</span>
              </div>
              <div style={ratingStyle}>
                {"★".repeat(Math.floor(product.rating))}
                <span>({product.reviews})</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashSales;
