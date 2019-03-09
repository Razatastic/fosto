import "../styles/main.scss";
import "../components/Navbar";
var data = require("../database/faq.json");

// created a functional component for frequent asked questions
function FAQ() {
  return (
    <div>
      <Navbar />
      {/* Title */}
      <h2 className="vertical-center">Frequently Asked Questions</h2>
      <ol>
        {data.map((dataValue, i) => (
          <li key={i}>
            <h5> {dataValue.q}</h5>
            <h6> {dataValue.a}</h6>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default FAQ;
