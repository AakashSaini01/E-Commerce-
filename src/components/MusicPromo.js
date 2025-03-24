import React, { useState, useEffect } from "react";

const MusicPromo = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    days: 5,
    minutes: 59,
    seconds: 35,
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

  const containerStyle = {
    width: "100%",
    padding: "60px 20px",
    background: "#000",
    color: "#fff",
    position: "relative",
    boxSizing: "border-box",
    marginTop: "20px",
  };

  const contentWrapperStyle = {
    maxWidth: "1200px",
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
  };

  const categoryStyle = {
    color: "#00FF66",
    fontSize: "16px",
    fontWeight: "500",
    marginBottom: "20px",
  };

  const titleStyle = {
    fontSize: "48px",
    fontWeight: "600",
    marginBottom: "40px",
    lineHeight: "1.2",
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
    },
  };

  const timeBoxStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#fff",
    color: "#000",
    borderRadius: "50%",
    width: "80px",
    height: "80px",
    justifyContent: "center",
    "@media (max-width: 768px)": {
      width: "60px",
      height: "60px",
    },
  };

  const numberStyle = {
    fontSize: "24px",
    fontWeight: "700",
    "@media (max-width: 768px)": {
      fontSize: "20px",
    },
  };

  const labelStyle = {
    fontSize: "12px",
    color: "#666",
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
    },
  };

  const imageContainerStyle = {
    flex: "1",
    display: "flex",
    justifyContent: "center",
    "@media (max-width: 768px)": {
      width: "100%",
    },
  };

  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
    objectFit: "contain",
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
              <span style={numberStyle}>
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <span style={labelStyle}>Hours</span>
            </div>
            <div style={timeBoxStyle}>
              <span style={numberStyle}>
                {String(timeLeft.days).padStart(2, "0")}
              </span>
              <span style={labelStyle}>Days</span>
            </div>
            <div style={timeBoxStyle}>
              <span style={numberStyle}>
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <span style={labelStyle}>Minutes</span>
            </div>
            <div style={timeBoxStyle}>
              <span style={numberStyle}>
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
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

export default MusicPromo;
