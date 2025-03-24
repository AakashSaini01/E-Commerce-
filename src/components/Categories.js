import React from "react";

const Categories = () => {
  const categories = [
    { id: 1, name: "Camera", icon: "📸" },
    { id: 2, name: "Computers", icon: "💻" },
    { id: 3, name: "Phones", icon: "📱" },
    { id: 4, name: "Smartwatch", icon: "⌚" },
    { id: 5, name: "Headphones", icon: "🎧" },
    { id: 6, name: "Gaming", icon: "🎮" },
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
    gap: "16px",
    marginBottom: "40px",
    padding: "0 20px",
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

  const gridStyle = {
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

  const categoryItemStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 15px",
    border: "1px solid #eee",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    backgroundColor: "#fff",
    flex: "0 0 180px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    "@media (max-width: 768px)": {
      flex: "0 0 150px",
      padding: "15px 10px",
    },
  };

  const categoryIconStyle = {
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "28px",
    marginBottom: "12px",
    transition: "all 0.3s ease",
    backgroundColor: "#f5f5f5",
    borderRadius: "50%",
    "@media (max-width: 768px)": {
      width: "40px",
      height: "40px",
      fontSize: "24px",
    },
  };

  const categoryNameStyle = {
    fontSize: "16px",
    fontWeight: "500",
    margin: "0",
    color: "#000",
    transition: "all 0.3s ease",
    textAlign: "center",
    "@media (max-width: 768px)": {
      fontSize: "14px",
    },
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
    const container = document.getElementById("categories-container");
    if (container) {
      const scrollAmount =
        direction === "left" ? -container.offsetWidth : container.offsetWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <div style={redDotStyle}></div>
        <h2 style={titleStyle}>Categories</h2>
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
        <div id="categories-container" style={gridStyle}>
          {categories.map((category) => (
            <div
              key={category.id}
              style={categoryItemStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#DB4444";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.querySelector("p").style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#fff";
                e.currentTarget.style.color = "#000";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.querySelector("p").style.color = "#000";
              }}
            >
              <div style={categoryIconStyle}>{category.icon}</div>
              <p style={categoryNameStyle}>{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
