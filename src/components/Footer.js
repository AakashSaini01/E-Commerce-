import React from "react";

const Footer = () => {
  const containerStyle = {
    width: "100%",
    backgroundColor: "#000",
    color: "#fff",
    padding: "40px 0 20px",
    boxSizing: "border-box",
    margin: 0,
    overflow: "hidden",
  };

  const contentWrapperStyle = {
    width: "100%",
    margin: "0 auto",
    padding: "0 40px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  };

  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "20px",
    width: "100%",
    boxSizing: "border-box",
    "@media (max-width: 1200px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    "@media (max-width: 768px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "30px",
    },
    "@media (max-width: 480px)": {
      gridTemplateColumns: "1fr",
    },
  };

  const sectionStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    boxSizing: "border-box",
  };

  const headingStyle = {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "8px",
  };

  const subscribeStyle = {
    fontSize: "16px",
    marginBottom: "16px",
  };

  const emailInputContainerStyle = {
    display: "flex",
    gap: "8px",
    marginBottom: "16px",
    maxWidth: "100%",
  };

  const inputStyle = {
    flex: 1,
    padding: "12px",
    backgroundColor: "transparent",
    border: "1px solid #666",
    borderRadius: "4px",
    color: "#fff",
    fontSize: "14px",
    minWidth: 0,
    maxWidth: "100%",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    padding: "12px 20px",
    backgroundColor: "transparent",
    border: "1px solid #666",
    borderRadius: "4px",
    color: "#fff",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#000",
    },
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "14px",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#ccc",
    },
  };

  const socialContainerStyle = {
    display: "flex",
    gap: "16px",
    marginTop: "16px",
    flexWrap: "wrap",
  };

  const downloadContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    maxWidth: "100%",
    boxSizing: "border-box",
  };

  const qrCodeStyle = {
    width: "100px",
    height: "100px",
    backgroundColor: "#fff",
    borderRadius: "8px",
  };

  const storeButtonsStyle = {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
    maxWidth: "100%",
  };

  const storeButtonImageStyle = {
    height: "40px",
    cursor: "pointer",
  };

  const copyrightStyle = {
    textAlign: "center",
    borderTop: "1px solid #333",
    marginTop: "40px",
    paddingTop: "20px",
    fontSize: "14px",
    color: "#666",
  };

  return (
    <footer style={containerStyle}>
      <div style={contentWrapperStyle}>
        <div style={gridContainerStyle}>
          <div style={sectionStyle}>
            <h2 style={headingStyle}>Exclusive</h2>
            <p style={subscribeStyle}>Subscribe</p>
            <p>Get 10% off your first order</p>
            <div style={emailInputContainerStyle}>
              <input
                type="email"
                placeholder="Enter your email"
                style={inputStyle}
              />
              <button style={buttonStyle}>→</button>
            </div>
          </div>

          <div style={sectionStyle}>
            <h3 style={headingStyle}>Support</h3>
            <p>111 Bijoy sarani, Dhaka,</p>
            <p>DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>

          <div style={sectionStyle}>
            <h3 style={headingStyle}>Account</h3>
            <a href="/account" style={linkStyle}>
              My Account
            </a>
            <a href="/login" style={linkStyle}>
              Login / Register
            </a>
            <a href="/cart" style={linkStyle}>
              Cart
            </a>
            <a href="/wishlist" style={linkStyle}>
              Wishlist
            </a>
            <a href="/shop" style={linkStyle}>
              Shop
            </a>
          </div>

          <div style={sectionStyle}>
            <h3 style={headingStyle}>Quick Link</h3>
            <a href="/privacy" style={linkStyle}>
              Privacy Policy
            </a>
            <a href="/terms" style={linkStyle}>
              Terms Of Use
            </a>
            <a href="/faq" style={linkStyle}>
              FAQ
            </a>
            <a href="/contact" style={linkStyle}>
              Contact
            </a>
          </div>

          <div style={sectionStyle}>
            <h3 style={headingStyle}>Download App</h3>
            <p>Save $3 with App New User Only</p>
            <div style={downloadContainerStyle}>
              <div style={qrCodeStyle}></div>
              <div style={storeButtonsStyle}>
                <img
                  src="/images/google-play.png"
                  alt="Get it on Google Play"
                  style={storeButtonImageStyle}
                />
                <img
                  src="/images/app-store.png"
                  alt="Download on App Store"
                  style={storeButtonImageStyle}
                />
              </div>
              <div style={socialContainerStyle}>
                <a href="#" style={linkStyle}>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" style={linkStyle}>
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" style={linkStyle}>
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" style={linkStyle}>
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div style={copyrightStyle}>
          © Copyright Rimel 2022. All right reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
