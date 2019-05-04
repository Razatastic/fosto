import React from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import LoadingIcon from "../components/layout/LoadingIcon";

function Faq({ faq }) {
  if (faq) {
    return (
      <Container style={{ marginTop: "5vh" }}>
        {/* Title */}
        <h1 className="faqTitle">F.A.Q.</h1>
        <ul style={{ listStyleType: "none" }}>
          {faq &&
            faq.map((dataValue, i) => (
              <li key={i}>
                <p className="questionStyle"> {dataValue.question}</p>
                <p className="answerStyle"> {dataValue.answer}</p>
              </li>
            ))}
        </ul>
      </Container>
    );
  } else {
    return <LoadingIcon />;
  }
}

const mapStateToProps = state => {
  return {
    faq: state.firestore.ordered.faq
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "faq", orderBy: ["order"] }])
)(Faq);
