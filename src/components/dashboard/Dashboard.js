import React from "react";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { PostButton } from "./";
import MapView from "./MapView";
import ItemsList from "../item/ItemList";

const Dashboard = ({ auth, items }) => {
  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <Container style={{ height: "94vh" }}>
      <Row>
        <PostButton />
      </Row>
      <Row>
        <Col md="3">
          <div style={{ height: "75vh" }}>
            <ItemsList items={items} />
          </div>
        </Col>
        <Col sm="12" md={{ size: 8, offset: 1 }}>
          <MapView />
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    faq: state.firestore.statuses,
    auth: state.firebase.auth,
    items: state.firestore.ordered.items
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "faq" },
    { collection: "items", orderBy: ["date", "desc"] }
  ])
)(Dashboard);
