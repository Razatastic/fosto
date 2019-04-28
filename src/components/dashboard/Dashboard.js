import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { PostButton, MapView } from "./";
import { ItemsList, ItemDetails } from "../item/";

const Dashboard = ({ auth, items }) => {
  const [currentItem, setCurrentItem] = useState(items);

  if (!auth.uid) return <Redirect to="/signin" />; // Redirect

  return (
    <Container>
      <Row>
        <PostButton />
      </Row>
      <Row>
        {/* Sidebar */}
        <Col className="itemList" md="3">
          <ItemsList items={items} setCurrentItem={setCurrentItem} />
        </Col>
        {/* Map */}
        <Col md={{ size: 8, offset: 1 }}>
          <Row>
            <MapView />
          </Row>
          <Row>
            <ItemDetails currentItem={currentItem} userSignedIn={auth.uid} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    items: state.firestore.ordered.items
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "items", orderBy: ["createdAt", "desc"] }])
)(Dashboard);
