import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div>
      <div className="footer">
        <a href="https://facebook.com">
          <FontAwesomeIcon
            className="footer-icon"
            icon={faFacebook}
          ></FontAwesomeIcon>
        </a>
        <a href="https://facebook.com">
          <FontAwesomeIcon
            className="footer-icon"
            icon={faTwitter}
          ></FontAwesomeIcon>{" "}
        </a>
        <a href="https://facebook.com">
          <FontAwesomeIcon
            className="footer-icon"
            icon={faInstagram}
          ></FontAwesomeIcon>{" "}
        </a>
      </div>
    </div>
  );
}

export default Footer;
