import React from "react";
import { Container, Spinner } from "reactstrap";

export default function LoadingIcon() {
  return (
    <Container className="text-center" style={{ marginTop: 100 }}>
      <Spinner style={{ width: "3rem", height: "3rem" }} type="grow" />
    </Container>
  );
}
