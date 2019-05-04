import React from "react";
import { Button, Container } from "reactstrap";
import { Link } from "react-router-dom";

export default function PostButton({ setButtonClicked }) {
  return (
    <Container
      className="float-right"
      style={{ marginTop: 20, marginBottom: 2 }}
    >
      <Button
        style={{ margin: 5 }}
        color="primary"
        // onClick={() => setButtonClicked(true)}
        tag={Link}
        to="/create"
      >
        Add an Item
      </Button>
      {/* <Button style={{ margin: 5 }} color="danger">
        Delete
      </Button> */}
    </Container>
  );
}
