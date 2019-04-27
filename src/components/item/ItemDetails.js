import React from "react";
import { Container, Button } from "reactstrap";
import moment from "moment";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

// Detailed view of status (displayed alone)
const ItemDetails = ({ item, itemId, auth }) => {
  if (item) {
    return (
      <Container style={{ marginTop: 10 }}>
        <h5>{item.title} </h5>
        <div className="lead">
          {item.authorFirstName} {item.authorLastName}
        </div>
        <div>
          <span style={{ fontSize: 14, color: "gray" }}>
            Date Posted: {moment(item.createdAt.toDate()).calendar()}
          </span>
          <Button
            onClick={() => {
              item.authorId === auth.uid
                ? alert("You cannot contact yourself!")
                : alert("Coming soon!");
            }}
            color="info"
            style={{ float: "right" }}
          >
            Contact
          </Button>
        </div>
        <hr className="my-3" />
        <p>{item.description}</p>
      </Container>
    );
  } else {
    return (
      <h5 style={{ marginTop: 30 }}>Click on an item to view its details.</h5>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.itemId;
  const items = state.firestore.data.items;
  const item = items ? items[id] : null;
  return {
    item: item
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "items" }])
)(ItemDetails);
