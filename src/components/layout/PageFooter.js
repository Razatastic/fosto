import React from "react";
import { Layout } from "antd";
import githubLogo from "../../assets/github_logo.png";

const { Footer } = Layout;

export default function PageFooter() {
  return (
    <Footer className="footer">
      <a href="https://github.com/razatastic/fosto">
        <img
          src={githubLogo}
          style={{ width: 32, marginRight: 10, float: "left" }}
          alt="Github logo"
        />
      </a>
      <h3>Powered by Netlify</h3>
    </Footer>
  );
}
