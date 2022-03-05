import React from "react";
import "./styles.css";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div id="footer">
      <p className="text-title">Drew Perkins &copy; 2022</p>
      <div className="links">
        <a href="https://github.com/perkdrew">
          <Icon icon="entypo-social:github" width="30" height="30" style={{marginRight: "10px"}} />
        </a>
        <a href="https://www.linkedin.com/in/drewperk">
          <Icon icon="akar-icons:linkedin-v1-fill" width="28" height="28" />
        </a>
      </div>
    </div>
  );
}

export default React.memo(Footer);
