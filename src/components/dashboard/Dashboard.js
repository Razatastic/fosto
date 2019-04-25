import React from "react";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { PostButton } from "./";

const Dashboard = ({ statuses, auth, notifications }) => {
  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <Container>
      <Row>
        <PostButton />
      </Row>
      <Row>
        <Col sm="12" md="7">
          {/* <ItemsList /> */}
        </Col>
        <Col sm="12" md={{ size: 4, offset: 1 }}>
          {/* <MapView /> */}
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    faq: state.firestore.statuses,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "faq" }])
)(Dashboard);
