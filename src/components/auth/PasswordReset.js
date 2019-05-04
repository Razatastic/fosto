import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Alert
} from "reactstrap";

export default function PasswordReset({
  resetError,
  modalOpen,
  setModalOpen,
  className,
  resetPass
}) {
  const [resetEmail, setResetEmail] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    resetPass(resetEmail);
  };

  return (
    <Modal
      isOpen={modalOpen}
      toggle={() => setModalOpen(!modalOpen)}
      className={className}
    >
      <ModalHeader toggle={() => setModalOpen(!modalOpen)}>
        Reset your password
      </ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="Email">Email</Label>
            <Input
              type="email"
              name="resetEmail"
              id="resetEmail"
              placeholder="youremail@gmail.com"
              onChange={e => setResetEmail(e.target.value)}
              required
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSubmit}>
          Reset
        </Button>
        <Button color="secondary" onClick={() => setModalOpen(false)}>
          Cancel
        </Button>
        <div>
          {resetError ? (
            <Alert color="danger" style={{ marginTop: 10 }}>
              Reset failed. Please check if your email is correct!
            </Alert>
          ) : null}
        </div>
      </ModalFooter>
    </Modal>
  );
}
