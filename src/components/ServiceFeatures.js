import React from "react";

const ServiceFeatures = () => {
  const services = [
    {
      id: 1,
      icon: "🚚",
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      id: 2,
      icon: "🎧",
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      id: 3,
      icon: "🛡️",
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ];

  const containerStyle = {
    width: "100%",
    padding: "40px 0",
    boxSizing: "border-box",
    backgroundColor: "#F5F5F5",
    marginTop: "20px",
  };

  const contentWrapperStyle = {
    width: "100%",
    margin: "0 auto",
    padding: "0 20px",
    boxSizing: "border-box",
  };

  const gridContainerStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  };

  const innerGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "40px",
    width: "100%",
    "@media (max-width: 1024px)": {
      gap: "20px",
    },
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gap: "20px",
    },
  };

  const serviceCardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "24px",
    backgroundColor: "#FFFFFF",
    borderRadius: "12px",
    width: "100%",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "translateY(-5px)",
    },
  };

  const iconStyle = {
    fontSize: "32px",
    marginBottom: "16px",
    width: "70px",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    borderRadius: "50%",
    color: "#fff",
  };

  const titleStyle = {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#000",
  };

  const descriptionStyle = {
    fontSize: "14px",
    color: "#666",
    lineHeight: "1.5",
    margin: "0 auto",
  };

  return (
    <div style={containerStyle}>
      <div style={contentWrapperStyle}>
        <div style={gridContainerStyle}>
          <div style={innerGridStyle}>
            {services.map((service) => (
              <div key={service.id} style={serviceCardStyle}>
                <div style={iconStyle}>
                  <span role="img" aria-label={service.title}>
                    {service.icon}
                  </span>
                </div>
                <h3 style={titleStyle}>{service.title}</h3>
                <p style={descriptionStyle}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFeatures;
