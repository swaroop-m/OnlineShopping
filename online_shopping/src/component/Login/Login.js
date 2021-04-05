import React from 'react'
import { Form, Button} from 'react-bootstrap'

function Login(props) {
    

    return (
        <>

        <h2>Login page</h2>
        <hr/>
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">Login </Button> <Button variant="secondary" type="register">Register </Button>
        </Form>
            
        </>
    )
}

export default Login