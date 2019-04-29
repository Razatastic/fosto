import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { PostButton, MapView } from "./";
import { ItemsList, ItemDetails } from "../item/";

const Dashboard = ({ auth, items, ogItems }) => {
  const [currentItemId, setCurrentItemId] = useState(items);
  const currentItem = ogItems ? ogItems[currentItemId] : null;
  const currentLat = currentItem ? currentItem.location.lat : null;
  const currentLng = currentItem ? currentItem.location.lng : null;

  if (!auth.uid) return <Redirect to="/signin" />; // Redirect

  return (
    <Container>
      <Row>
        <PostButton />
      </Row>
      <Row>
        {/* Sidebar */}
        <Col className="itemList" md="3">
          <ItemsList items={items} setCurrentItemId={setCurrentItemId} />
        </Col>
        {/* Map */}
        <Col md={{ size: 8, offset: 1 }}>
          <Row>
            <MapView currentLat={currentLat} currentLng={currentLng} />
          </Row>
          <Row>
            <ItemDetails item={currentItem} userSignedIn={auth.uid} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    items: state.firestore.ordered.items,
    ogItems: state.firestore.data.items
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "items", orderBy: ["createdAt", "desc"] }])
)(Dashboard);
