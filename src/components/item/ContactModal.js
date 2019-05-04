import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import createMessage from "../../store/actions/messageActions";

function ContactModal({ createMessage, className, modalOpen, setModalOpen }) {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    createMessage({ message });
    setModalOpen(!modalOpen);
  };

  return (
    <Modal
      isOpen={modalOpen}
      toggle={() => setModalOpen(!modalOpen)}
      className={className}
    >
      <ModalHeader toggle={() => setModalOpen(!modalOpen)}>
        Contact Listing Author
      </ModalHeader>
      <ModalBody onChange={e => setMessage(e.target.value)}>
        <Input
          type="textarea"
          placeholder="Found your headphones! I dropped them off with the receptionist on the first floor."
          rows={5}
        />
      </ModalBody>

      <ModalFooter>
        <Button color="primary" onClick={handleSubmit}>
          Send
        </Button>
        <Button color="secondary" onClick={() => setModalOpen(!modalOpen)}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    createMessage: message => dispatch(createMessage(message))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ContactModal);
