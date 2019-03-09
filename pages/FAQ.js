import "../styles/main.scss";
import Navbar from "../components/Navbar";
var data = require("../database/faq.json");

// created a functional component for frequent asked questions
function FAQ() {
  return (
    <div>
      <Navbar />
      <div className="container">
        {/* Title */}
        <h2 className="vertical-center">Frequently Asked Questions</h2>
        <ul>
          {data.map((dataValue, i) => (
            <li key={i}>
              <p className="questionStyle"> {dataValue.q}</p>
              <p className="answerStyle"> {dataValue.a}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FAQ;
