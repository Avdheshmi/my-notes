import React, { useContext, useState } from 'react'
import { Card, Button, Modal, Form } from 'react-bootstrap'
import NoteContext from '../Context/NoteContext'
import "./Card.css"

const Cards = (props) => {
    const deletedata = useContext(NoteContext)

    const Dclick = () => {
        deletedata.Deletenote(props.id)
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit {props.tittle}</Modal.Title>
                </Modal.Header>
                <Modal.Body> <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Tittle</Form.Label>
                        <Form.Control type="text" name='tittle' value={props.tittle} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} name='des' value={props.des} />
                    </Form.Group>

                </Form></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <Card className="text-center mt-3">
                <Card.Header>Notes</Card.Header>
                <Card.Body>
                    <Card.Title>{props.tittle}</Card.Title>
                    <Card.Text>
                        {props.des}
                    </Card.Text>
                    <Button className="me-2 editb" variant="primary" onClick={handleShow}>Edit <i className="fa-solid fa-pen-to-square"></i></Button>
                    <Button variant="danger deleteb" onClick={Dclick}>Delete <i class="fa-solid fa-trash-can"></i></Button>
                </Card.Body>
                <Card.Footer className="text-muted">{props.date}</Card.Footer>
            </Card>
        </>
    )
}

export default Cards;