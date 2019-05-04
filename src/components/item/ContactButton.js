import React from "react";
import { Button } from "reactstrap";

/* Check if user ID is the same as post author ID */
export default function ContactButton({
  item,
  userSignedIn,
  setModalOpen,
  modalOpen
}) {
  return (
    <Button
      onClick={() => {
        item.authorId === userSignedIn
          ? alert("You cannot contact yourself!")
          : setModalOpen(!modalOpen);
      }}
      color="info"
      style={{ float: "right" }}
    >
      Contact
    </Button>
  );
}
