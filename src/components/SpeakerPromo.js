import React from "react";

const SpeakerPromo = () => {
  const containerStyle = {
    width: "100%",
    background: "linear-gradient(90deg, #000 60%, #1A1A1A 100%)",
    color: "#fff",
    padding: "60px 20px",
    boxSizing: "border-box",
    marginTop: "40px",
    position: "relative",
    overflow: "hidden",
  };

  const contentWrapperStyle = {
    maxWidth: "1440px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "40px",
    "@media (max-width: 768px)": {
      flexDirection: "column",
      textAlign: "center",
    },
  };

  const textContentStyle = {
    flex: "1",
    maxWidth: "600px",
    zIndex: "1",
    "@media (max-width: 768px)": {
      maxWidth: "100%",
    },
  };

  const categoryStyle = {
    color: "#00FF66",
    fontSize: "16px",
    fontWeight: "500",
    marginBottom: "20px",
    textTransform: "uppercase",
    letterSpacing: "1px",
  };

  const titleStyle = {
    fontSize: "64px",
    fontWeight: "600",
    marginBottom: "30px",
    lineHeight: "1.1",
    "@media (max-width: 1024px)": {
      fontSize: "48px",
    },
    "@media (max-width: 768px)": {
      fontSize: "36px",
    },
  };

  const timerContainerStyle = {
    display: "flex",
    gap: "20px",
    marginBottom: "40px",
    "@media (max-width: 768px)": {
      justifyContent: "center",
      gap: "15px",
    },
  };

  const timeBoxStyle = {
    background: "#fff",
    color: "#000",
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    "@media (max-width: 768px)": {
      width: "60px",
      height: "60px",
    },
  };

  const numberStyle = {
    fontSize: "24px",
    fontWeight: "700",
    lineHeight: "1",
  };

  const labelStyle = {
    fontSize: "12px",
    color: "#666",
    marginTop: "4px",
  };

  const buttonStyle = {
    background: "#00FF66",
    color: "#000",
    border: "none",
    padding: "16px 48px",
    borderRadius: "4px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      background: "#00CC52",
      transform: "translateY(-2px)",
    },
  };

  const imageContainerStyle = {
    flex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    "@media (max-width: 768px)": {
      width: "100%",
      marginTop: "20px",
    },
  };

  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
    transform: "rotate(-5deg)",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "rotate(-5deg) scale(1.05)",
    },
  };

  return (
    <div style={containerStyle}>
      <div style={contentWrapperStyle}>
        <div style={textContentStyle}>
          <div style={categoryStyle}>Categories</div>
          <h2 style={titleStyle}>
            Enhance Your
            <br />
            Music Experience
          </h2>
          <div style={timerContainerStyle}>
            <div style={timeBoxStyle}>
              <span style={numberStyle}>23</span>
              <span style={labelStyle}>Hours</span>
            </div>
            <div style={timeBoxStyle}>
              <span style={numberStyle}>05</span>
              <span style={labelStyle}>Days</span>
            </div>
            <div style={timeBoxStyle}>
              <span style={numberStyle}>59</span>
              <span style={labelStyle}>Minutes</span>
            </div>
            <div style={timeBoxStyle}>
              <span style={numberStyle}>35</span>
              <span style={labelStyle}>Seconds</span>
            </div>
          </div>
          <button style={buttonStyle}>Buy Now!</button>
        </div>
        <div style={imageContainerStyle}>
          <img
            src="/images/jbl-speaker.png"
            alt="JBL Speaker"
            style={imageStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default SpeakerPromo;
