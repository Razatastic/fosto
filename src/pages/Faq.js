import React from "react";
import "../styles/Faq.css";
import FaqIcon from "../components/FaqIcon";
import { Icon } from "antd";

var data = require("../database/faq.json");

// created a functional component for frequent asked questions
function Faq() {
  return (
    <div>
      {/* Title */}
      <h1 className="vertical-center faqTitle">Frequently Asked Questions</h1>
      {/* <FaqIcon className="faq-title-Icon" /> */}
      <ul style={{ listStyleType: "none" }}>
        {data.map((dataValue, i) => (
          <li key={i}>
            <p className="questionStyle"> {dataValue.q}</p>
            <p className="answerStyle"> {dataValue.a}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Faq;
