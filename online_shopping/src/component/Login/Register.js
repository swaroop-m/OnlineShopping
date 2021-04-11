import React, { Component } from 'react';
import { Card,Form,Button,Row,Col} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSave, faLock, faUndo, faUserPlus, faUser} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

import RegisteredToast from './RegisteredToast'

export default class Register extends Component{

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.state.show = false;
        this.userChange = this.userChange.bind(this);
        this.register = this.register.bind(this);
    }

    initialState = {
        userName:'', password:'', role:'', email:''

    };

    register = event => {
        event.preventDefault();

        const user = {
            userName: this.state.userName,
            password: this.state.password,
            role: this.state.role
        };

        axios.post("http://localhost:9000/api/addUser",user)
            .then(response => {
                if(response.data != null) {
                    this.setState({"show":true});
                    setTimeout(() => this.setState({"show":false}),3000 )
                } else {
                    this.setState({"show":false});
                }
            });

            this.setState(this.initialState);
    }

    resetLoginForm = () => {
        this.setState(() => this.initialState);
    };

    userChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        });
    }


    render() {

        const{userName,password,role} = this.state;

        return(
        <div>
            <div style={{"display":this.state.show ? "block" : "none"}}>
                <RegisteredToast children = {{show:this.state.show , message:"User Saved Successfully!"}}/>
            </div>
            <Row className="justify-content-md-center">
            <Col xs={5}>
           <Card className="border border-dark bg dark text-black">
               <Card.Header>
                    <FontAwesomeIcon icon={faUserPlus}/> Register
               </Card.Header>
               <Card.Body>
                    <Form onReset={this.resetLoginForm} onSubmit={this.register} id="registerFormId">
                        <Form.Group controlId="formGridUserName"><FontAwesomeIcon icon={faUser}/>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" required autoComplete="off"
                                name="userName" 
                                className={"bg-dark text-white"} 
                                onChange={this.userChange}
                                value={userName}
                                placeholder="Enter Username"/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword"><FontAwesomeIcon icon={faLock}/>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" required autoComplete="off"
                                name="password" 
                                placeholder="Password" 
                                onChange={this.userChange}
                                value={password}
                                className={"bg-dark text-white"} />
                        </Form.Group>

                        <Form.Group controlId="formGridRole"><FontAwesomeIcon icon={faUser}/>
                            <Form.Label>Role</Form.Label>
                            <Form.Control type="text" required autoComplete="off"
                                name="role" 
                                placeholder="Enter Role" 
                                onChange={this.userChange}
                                value={role}
                                className={"bg-dark text-white"} />
                        </Form.Group>
                        <Button size="sm" variant="success" type="submit">
                            <FontAwesomeIcon icon={faSave}/>
                            Register
                        </Button>{' '}
                        <Button size="sm" variant="primary" type="reset" onClick={this.resetLoginForm}>
                            <FontAwesomeIcon icon={faUndo}/>
                            Reset
                        </Button>
                    </Form>
               </Card.Body>
           </Card>
           </Col>
           </Row>
           <br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
        );
    }
}