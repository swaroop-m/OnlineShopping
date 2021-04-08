import React from 'react'
import {Button,Card , ListGroup} from 'react-bootstrap'

function Myprofile(props) {
    

    return (
        <>
            <h1>My Profile</h1>
            <hr/>
            <Card className="d-flex justify-content-center"style={{ width: '70rem' }}>
                <Card.Body>
                    <Card.Title>Personal Details</Card.Title> 
                    <div>
                        <Button>Update</Button>
                    </div>
                    <ListGroup variant="flush">
                       
                    <ListGroup.Item> Street no: Shreshta</ListGroup.Item>
                        <ListGroup.Item> Building name: Shreshta</ListGroup.Item>
                        <ListGroup.Item> City: Shreshta</ListGroup.Item>
                        <ListGroup.Item> Street no: Shreshta</ListGroup.Item>
                        <ListGroup.Item> Building name: Shreshta</ListGroup.Item>
                        <ListGroup.Item> City: Shreshta</ListGroup.Item>
                        </ListGroup>
                    
                    <Card.Title>Address</Card.Title>

                    
                        <ListGroup.Item> Street no: Shreshta</ListGroup.Item>
                        <ListGroup.Item> Building name: Shreshta</ListGroup.Item>
                        <ListGroup.Item> City: Shreshta</ListGroup.Item>
                        <ListGroup.Item> Street no: Shreshta</ListGroup.Item>
                        <ListGroup.Item> Building name: Shreshta</ListGroup.Item>
                        <ListGroup.Item> City: Shreshta</ListGroup.Item>
                   
                    

                    <Button variant="primary">Go to cart</Button><Button variant="primary">Logout</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Myprofile