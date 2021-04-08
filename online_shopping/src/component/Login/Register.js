import React, { Component } from 'react';
import {Card,Form,Button} from 'react-bootstrap';
import { faPlusSquare, faSave} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Register extends Component{

    constructor(props){
        super(props);
        this.state={userName:'',password:'',role:''};
    }

    resgisterUser(event){
        alert(this.state.userName)
        event.preventDefault();
    }

    render () {
        return(
            <Card className={"border border-dark"}>
                <Card.Header><FontAwesomeIcon icon={faPlusSquare}/>Register</Card.Header>
                <Form onSubmit={this.registerUser} id="registerId">
                <Card.Body>
                    <Form.Group>
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" name="userName" 
                        value={this.state.userName} onChange={this.userChange} required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password"/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Role</Form.Label>
                        <Form.Control type="text" placeholder="Enter Role" name="role"/>
                    </Form.Group>
                </Card.Body>
                <Card.Footer style={{"textAlign":"right"}}>
                    <Button variant="success" type="submit" size="sm">
                        <FontAwesomeIcon icon={faSave}/>
                        Submit
                    </Button>
                </Card.Footer>
                </Form>
            </Card>
        );
    }
}