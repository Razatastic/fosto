import React from "react";
import { Button } from "reactstrap";

/* Check if user ID is the same as post author ID */
export default function ContactButton({ item, userSignedIn }) {
  return (
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
  );
}
