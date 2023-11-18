import React from "react";
import "./Footer.css";

import insta from "../../assets/instagram.png";
import twitch from "../../assets/twitch.png";
import facebook from "../../assets/facebook.png";

function Footer() {
  return (
    <div className="footer">
      <div className="icons">
        <a href="https://www.instagram.com/lsacbucuresti/">
          <img className="one-icon" src={insta} />
        </a>
        <a href="https://www.twitch.tv/lsac_bucuresti">
          <img className="one-icon" src={twitch} />
        </a>
        <a href="https://www.facebook.com/LsacBucuresti/">
          <img className="one-icon" src={facebook} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
