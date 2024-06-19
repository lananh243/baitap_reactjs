import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

export default function ModalBlock() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
  return (
    <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}
