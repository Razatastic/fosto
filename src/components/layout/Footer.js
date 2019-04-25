import React from "react";
import GithubLogo from "../../assets/github_logo.png";

function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/Razatastic/fosto">
        <img src={GithubLogo} style={{ width: 32 }} alt="Github logo" />
      </a>
    </footer>
  );
}

export default Footer;
