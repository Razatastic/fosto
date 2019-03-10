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
      <h2 className="vertical-center faqTitle">
        Frequently Asked Questions - <FaqIcon className="faq-title-Icon" />
      </h2>
      <ol>
        {data.map((dataValue, i) => (
          <li key={i}>
            <p className="questionStyle"> {dataValue.q}</p>
            <p className="answerStyle"> {dataValue.a}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Faq;
