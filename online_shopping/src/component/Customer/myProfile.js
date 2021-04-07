import React, {Component} from 'react';
import {Button,Card , ListGroup} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUsers} from '@fortawesome/free-solid-svg-icons';

// function Myprofile(props) {
export default class Myprofile extends Component{    
render(){
    return (
        <>
         <img src="data:image/png;base64,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" width="25" alt="brand"/>
            <h1><FontAwesomeIcon icon={faUsers} /> My profile</h1>
            <hr/>
            <Card className="d-flex justify-content-center border border-dark bg-info text-white" style={{ width: '70rem' }}>
                <Card.Body>
                    <Card.Title>Personal Details</Card.Title> 
                    
                    <ListGroup variant="flush">
                    <ListGroup.Item> Street no: Shreshta</ListGroup.Item>
                        <ListGroup.Item> Building name: Shreshta</ListGroup.Item>
                        <ListGroup.Item> City: Shreshta</ListGroup.Item>
                        <ListGroup.Item> Street no: Shreshta</ListGroup.Item>
                        <ListGroup.Item> Building name: Shreshta</ListGroup.Item>
                        <ListGroup.Item> City: Shreshta</ListGroup.Item>
                        </ListGroup>
                    <br/>
                    <Card.Title>Address</Card.Title>

                    
                        <ListGroup.Item> Street no: Shreshta</ListGroup.Item>
                        <ListGroup.Item> Building name: Shreshta</ListGroup.Item>
                        <ListGroup.Item> City: Shreshta</ListGroup.Item>
                        <ListGroup.Item> Street no: Shreshta</ListGroup.Item>
                        <ListGroup.Item> Building name: Shreshta</ListGroup.Item>
                        <ListGroup.Item> City: Shreshta</ListGroup.Item>
                   
                    <br/>                    
                   
                    <Button>Update</Button>{' '}
                    
                    <Button variant="primary">Go to cart</Button>{' '}
                    <Button variant="primary">Logout</Button>
                </Card.Body>
            </Card>
            <br/>
            <br/>
            <br/>
        </>
    );
}

}