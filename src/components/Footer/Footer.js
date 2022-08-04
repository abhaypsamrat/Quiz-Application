import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" style={{ textAlign: "center", marginBottom: 10 }}>
      <hr />
     <p> Made with ❤️ by{" "}
      <a
        href="https://apsamrat.netlify.app/"
        style={{ cursor: "pointer" }}
        target="blank"
      >
        <span>Samrat</span>
      </a>
      </p>
    </div>
  );
};

export default Footer;
