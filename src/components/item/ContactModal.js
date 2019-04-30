import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function ContactModal({ className, modalOpen, setModalOpen }) {
  return (
    <Modal
      isOpen={modalOpen}
      toggle={() => setModalOpen(!modalOpen)}
      className={className}
    >
      <ModalHeader toggle={() => setModalOpen(!modalOpen)}>
        Modal title
      </ModalHeader>
      <ModalBody>Nani</ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={() => alert("d")}>
          Do Something
        </Button>
        <Button color="secondary" onClick={() => alert("close")}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}
