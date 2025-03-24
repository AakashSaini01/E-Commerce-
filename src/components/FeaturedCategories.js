import React from "react";

const FeaturedCategories = () => {
  const categories = [
    {
      id: 1,
      name: "Electronics",
      image: "/images/categories/electronics.jpg",
      count: "24 Products",
    },
    {
      id: 2,
      name: "Fashion",
      image: "/images/categories/fashion.jpg",
      count: "18 Products",
    },
    {
      id: 3,
      name: "Home & Living",
      image: "/images/categories/home-living.jpg",
      count: "32 Products",
    },
    {
      id: 4,
      name: "Sports",
      image: "/images/categories/sports.jpg",
      count: "15 Products",
    },
  ];

  const containerStyle = {
    width: "100%",
    padding: "40px 0",
    boxSizing: "border-box",
    marginTop: "20px",
  };

  const contentWrapperStyle = {
    maxWidth: "1440px",
    margin: "0 auto",
    padding: "0 20px",
  };

  const headerStyle = {
    color: "#DB4444",
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "20px",
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
    fontSize: "36px",
    fontWeight: "600",
    marginBottom: "40px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    marginBottom: "40px",
  };

  const categoryCardStyle = {
    position: "relative",
    backgroundColor: "#fff",
    borderRadius: "4px",
    overflow: "hidden",
    cursor: "pointer",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "translateY(-5px)",
    },
  };

  const imageContainerStyle = {
    position: "relative",
    width: "100%",
    aspectRatio: "16/9",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
  };

  const categoryNameStyle = {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "8px",
  };

  const productCountStyle = {
    fontSize: "16px",
    opacity: 0.9,
  };

  return (
    <div style={containerStyle}>
      <div style={contentWrapperStyle}>
        <div style={headerStyle}>
          <div style={redDotStyle}></div>
          <span>Categories</span>
        </div>
        <h2 style={titleStyle}>Shop By Category</h2>
        <div style={gridStyle}>
          {categories.map((category) => (
            <div key={category.id} style={categoryCardStyle}>
              <div style={imageContainerStyle}>
                <img
                  src={category.image}
                  alt={category.name}
                  style={imageStyle}
                />
                <div style={overlayStyle}>
                  <h3 style={categoryNameStyle}>{category.name}</h3>
                  <p style={productCountStyle}>{category.count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
