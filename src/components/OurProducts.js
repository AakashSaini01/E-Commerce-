import React from "react";

const OurProducts = () => {
  const products = [
    {
      id: 1,
      name: "Cesar Dog Food",
      price: 100,
      rating: 3,
      image: "/images/products/cesar-dog-food.jpg",
      isNew: false,
    },
    {
      id: 2,
      name: "Canon EOS 850D",
      price: 360,
      rating: 4,
      image: "/images/products/canon-camera.jpg",
      isNew: false,
    },
    {
      id: 3,
      name: "Gaming Laptop",
      price: 700,
      rating: 5,
      image: "/images/products/gaming-laptop.jpg",
      isNew: false,
    },
    {
      id: 4,
      name: "Cosmetic Set",
      price: 500,
      rating: 4,
      image: "/images/products/cosmetic-set.jpg",
      isNew: false,
    },
    {
      id: 5,
      name: "Kids Electric Car",
      price: 960,
      rating: 5,
      image: "/images/products/kids-car.jpg",
      isNew: true,
    },
    {
      id: 6,
      name: "Soccer Cleats",
      price: 1160,
      rating: 5,
      image: "/images/products/soccer-cleats.jpg",
      colors: ["yellow", "red"],
      isNew: false,
    },
    {
      id: 7,
      name: "Gaming Controller",
      price: 660,
      rating: 4.5,
      image: "/images/products/gaming-controller.jpg",
      colors: ["red"],
      isNew: true,
    },
    {
      id: 8,
      name: "Bomber Jacket",
      price: 660,
      rating: 4.5,
      image: "/images/products/bomber-jacket.jpg",
      colors: ["green", "red"],
      isNew: false,
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
    gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
    gap: "30px",
    marginBottom: "40px",
  };

  const productCardStyle = {
    position: "relative",
    backgroundColor: "#fff",
    borderRadius: "4px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  };

  const imageContainerStyle = {
    position: "relative",
    width: "100%",
    aspectRatio: "1",
    backgroundColor: "#F5F5F5",
    borderRadius: "4px",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  };

  const newBadgeStyle = {
    position: "absolute",
    top: "12px",
    left: "12px",
    backgroundColor: "#00FF66",
    color: "#fff",
    padding: "4px 8px",
    borderRadius: "4px",
    fontSize: "12px",
    fontWeight: "500",
  };

  const actionButtonsStyle = {
    position: "absolute",
    top: "12px",
    right: "12px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  };

  const iconButtonStyle = {
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  };

  const productInfoStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  };

  const productNameStyle = {
    fontSize: "16px",
    fontWeight: "500",
    color: "#000",
  };

  const priceStyle = {
    fontSize: "16px",
    fontWeight: "600",
    color: "#DB4444",
  };

  const ratingContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  const ratingStyle = {
    color: "#FFD700",
  };

  const colorOptionsStyle = {
    display: "flex",
    gap: "8px",
    marginTop: "8px",
  };

  const colorDotStyle = (color) => ({
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: color,
    border: "2px solid #fff",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  });

  const viewAllButtonStyle = {
    display: "block",
    width: "fit-content",
    margin: "0 auto",
    padding: "16px 48px",
    backgroundColor: "#DB4444",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "background-color 0.2s",
    "&:hover": {
      backgroundColor: "#C83333",
    },
  };

  return (
    <div style={containerStyle}>
      <div style={contentWrapperStyle}>
        <div style={headerStyle}>
          <div style={redDotStyle}></div>
          <span>Our Products</span>
        </div>
        <h2 style={titleStyle}>Explore Our Products</h2>
        <div style={gridStyle}>
          {products.map((product) => (
            <div key={product.id} style={productCardStyle}>
              <div style={imageContainerStyle}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={imageStyle}
                />
                {product.isNew && <span style={newBadgeStyle}>NEW</span>}
                <div style={actionButtonsStyle}>
                  <button style={iconButtonStyle} aria-label="Add to wishlist">
                    ♡
                  </button>
                  <button style={iconButtonStyle} aria-label="Quick view">
                    👁
                  </button>
                </div>
              </div>
              <div style={productInfoStyle}>
                <h3 style={productNameStyle}>{product.name}</h3>
                <span style={priceStyle}>${product.price}</span>
                <div style={ratingContainerStyle}>
                  <span style={ratingStyle}>
                    {"★".repeat(Math.floor(product.rating))}
                  </span>
                  <span style={ratingStyle}>
                    {product.rating % 1 !== 0 ? "½" : ""}
                  </span>
                </div>
                {product.colors && (
                  <div style={colorOptionsStyle}>
                    {product.colors.map((color, index) => (
                      <div key={index} style={colorDotStyle(color)}></div>
                    ))}
                  </div>
                )}
              </div>
              {product.id === 2 && (
                <button
                  style={{
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "#000",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Add To Cart
                </button>
              )}
            </div>
          ))}
        </div>
        <button style={viewAllButtonStyle}>View All Products</button>
      </div>
    </div>
  );
};

export default OurProducts;
