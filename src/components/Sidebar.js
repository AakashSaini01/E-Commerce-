import React from "react";

const Sidebar = () => {
  const categories = [
    "Woman's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  const containerStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    padding: "20px",
    boxSizing: "border-box",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    borderRadius: "8px",
  };

  const categoryStyle = {
    padding: "12px 15px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#333",
    borderBottom: "1px solid #eee",
    transition: "all 0.3s ease",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "#f5f5f5",
      paddingLeft: "20px",
    },
    "@media (max-width: 1024px)": {
      padding: "10px",
      fontSize: "14px",
    },
  };

  const arrowStyle = {
    color: "#666",
    fontSize: "18px",
    transition: "transform 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      {categories.map((category, index) => (
        <div
          key={index}
          style={categoryStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#f5f5f5";
            e.currentTarget.style.paddingLeft = "20px";
            e.currentTarget.querySelector(".arrow").style.transform =
              "translateX(5px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.paddingLeft = "15px";
            e.currentTarget.querySelector(".arrow").style.transform =
              "translateX(0)";
          }}
        >
          <span>{category}</span>
          <span className="arrow" style={arrowStyle}>
            ›
          </span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
