import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import FlashSales from "./components/FlashSales";
import Categories from "./components/Categories";
import MusicPromo from "./components/MusicPromo";
import OurProducts from "./components/OurProducts";
import FeaturedCategories from "./components/FeaturedCategories";
import ServiceFeatures from "./components/ServiceFeatures";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [language, setLanguage] = useState("English");

  const headerStyle = {
    backgroundColor: "#000",
    color: "#fff",
    padding: "10px 0",
    textAlign: "center",
    width: "100%",
  };

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    borderBottom: "1px solid #eee",
    width: "100%",
    boxSizing: "border-box",
  };

  const searchStyle = {
    padding: "8px 15px",
    borderRadius: "20px",
    border: "1px solid #ddd",
    width: "250px",
    "@media (max-width: 768px)": {
      width: "150px",
    },
  };

  const logoStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    textDecoration: "none",
    color: "#000",
  };

  const menuStyle = {
    display: "flex",
    gap: "20px",
    "@media (max-width: 768px)": {
      gap: "10px",
    },
  };

  const mainLayoutStyle = {
    width: "100%",
    maxWidth: "1440px",
    margin: "0 auto",
    padding: "0 20px",
    boxSizing: "border-box",
    "@media (max-width: 1024px)": {
      padding: "0 10px",
    },
  };

  const splitViewStyle = {
    display: "flex",
    gap: "20px",
    marginBottom: "40px",
    "@media (max-width: 1024px)": {
      flexDirection: "column",
    },
  };

  const sidebarContainerStyle = {
    width: "300px",
    minWidth: "300px",
    height: "600px", // Match Hero height
    "@media (max-width: 1024px)": {
      width: "100%",
      minWidth: "100%",
      height: "auto",
    },
  };

  const heroContainerStyle = {
    flex: 1,
    height: "600px", // Fixed height
    "@media (max-width: 1024px)": {
      width: "100%",
      height: "400px", // Shorter on mobile
    },
  };

  const fullWidthContentStyle = {
    width: "100%",
  };

  return (
    <div style={{ minHeight: "100vh", width: "100%" }}>
      {/* Top Banner */}
      <div style={headerStyle}>
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%{" "}
          <span style={{ textDecoration: "underline", cursor: "pointer" }}>
            ShopNow
          </span>
        </p>
      </div>

      {/* Navigation */}
      <nav style={navStyle}>
        <a href="/" style={logoStyle}>
          Exclusive
        </a>

        <div style={menuStyle}>
          <a href="/" style={{ color: "#000", textDecoration: "none" }}>
            Home
          </a>
          <a href="/contact" style={{ color: "#000", textDecoration: "none" }}>
            Contact
          </a>
          <a href="/about" style={{ color: "#000", textDecoration: "none" }}>
            About
          </a>
          <a href="/signup" style={{ color: "#000", textDecoration: "none" }}>
            Sign Up
          </a>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <input
            type="text"
            placeholder="What are you looking for?"
            style={searchStyle}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={{ padding: "5px" }}
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
        </div>
      </nav>

      {/* Main Content */}
      <main style={mainLayoutStyle}>
        {/* Split View for Sidebar and Hero */}
        <div style={splitViewStyle}>
          <div style={sidebarContainerStyle}>
            <Sidebar />
          </div>
          <div style={heroContainerStyle}>
            <Hero />
          </div>
        </div>

        {/* Full Width Content */}
        <div style={fullWidthContentStyle}>
          <FlashSales />
          <Categories />
          <MusicPromo />
          <OurProducts />
          <FeaturedCategories />
          <ServiceFeatures />
        </div>
      </main>
    </div>
  );
};

export default App;
