import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import React, { Component } from 'react';
function AlertModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <span>Notification</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <h4>
            {props.message}
          </h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default AlertModal;

  