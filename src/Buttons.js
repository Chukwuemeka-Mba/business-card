import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Buttons() {
  return (
    <div>
      <div className="buttons">
        <a href="https://fooledbyrandomness.com/CV.htm">
          <button type="submit" className="email">
            <FontAwesomeIcon icon={faEnvelope} className=""></FontAwesomeIcon>
            <span>Email</span>
          </button>
        </a>
        <a href="https://linkedin.com/in/nassimtaleb">
          <button type="" className="linkedin">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="hover: blue:500"
            ></FontAwesomeIcon>
            <span>Linkedin</span>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Buttons;
