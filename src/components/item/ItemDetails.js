import React from "react";
import { Container } from "reactstrap";
import moment from "moment";
import ContactButton from "./ContactButton.js";

// Detailed view of status (displayed below MapView)
const ItemDetails = ({ userSignedIn, item, setModalOpen, modalOpen }) => {
  if (item) {
    return (
      <Container style={{ marginTop: 30 }}>
        {/* Title */}
        <h5>{item.title} </h5>
        <div className="lead">{item.location.description}</div>
        <div>
          <span style={{ fontSize: 14, color: "gray" }}>
            Date Posted: {moment(item.createdAt.toDate()).calendar()}
          </span>
          <ContactButton
            item={item}
            userSignedIn={userSignedIn}
            setModalOpen={setModalOpen}
            modalOpen={modalOpen}
          />
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
