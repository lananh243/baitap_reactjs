import Button from 'react-bootstrap/Button';
import Modal1 from 'react-bootstrap/Modal';

function Modal() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <Modal1 show={show} onHide={handleClose} animation={false}>
        <Modal1.Header closeButton>
        <Modal1.Title>Modal heading</Modal1.Title>
        </Modal1.Header>
        <Modal1.Body>Woohoo, you are reading this text in a modal!</Modal1.Body>
        <Modal1.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
            Save Changes
        </Button>
        </Modal1.Footer>
    </Modal1>
  );
}

export default Modal;