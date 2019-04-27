import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { PostButton } from "./";
import MapView from "./MapView";
import ItemsList from "../item/ItemList";
import ItemDetails from "../item/ItemDetails";

const Dashboard = ({ auth, items }) => {
  const [currentItem, setCurrentItem] = useState("");
  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <Container>
      <Row>
        <PostButton />
      </Row>
      <Row>
        <Col className="itemList" md="3">
          <ItemsList items={items} setCurrentItem={setCurrentItem} />
        </Col>
        <Col md={{ size: 8, offset: 1 }}>
          <Row>
            <MapView />
          </Row>
          <Row>
            <ItemDetails itemId={currentItem} auth={auth} />
          </Row>
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
    { collection: "items", orderBy: ["createdAt", "desc"] }
  ])
)(Dashboard);
