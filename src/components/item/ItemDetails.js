import React from "react";
import { Container, Button } from "reactstrap";
import moment from "moment";

// Detailed view of status (displayed below MapView)
const ItemDetails = ({ userSignedIn, item }) => {
  if (item) {
    return (
      <Container style={{ marginTop: 10 }}>
        {/* Title */}
        <h5>{item.title} </h5>
        <div className="lead">{item.location.description}</div>
        <div>
          <span style={{ fontSize: 14, color: "gray" }}>
            Date Posted: {moment(item.createdAt.toDate()).calendar()}
          </span>

          {/* Check if user ID is the same as post author ID */}
          <Button
            onClick={() => {
              item.authorId === userSignedIn
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

export default ItemDetails;
