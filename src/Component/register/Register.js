import React from 'react'
import {Form,Button} from "react-bootstrap"
import "./Register.css"


const Signup = () => {
    return (
        <>
          <div className="container mt-4">
            <Form>
            <Form.Group className="mb-3 namebox" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"  />
                </Form.Group>
                <Form.Group className="mb-3 emailbox" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3 passwordbox" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form></div>


        </>
    )
}

export default Signup;