import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://github.com/VascoMiguens" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/vasco-miguens-312a92115/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://twitter.com/VascoMaria3" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://stackoverflow.com/users/16318504/vasco"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faStackOverflow} />
        </a>
      </div>
    </footer>
  );
}