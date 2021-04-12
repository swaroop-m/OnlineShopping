//MyProfile.js



// Author: Shrestha Chowdhury [JEEFSI_Uni41]
// Code starts here
import React, { Component } from 'react';
import { ButtonGroup, Card, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';




class MyProfile extends Component {

    render() {

        return (
            <div className="container">
                <>
                    {/* Heading for the page  */}
                    <h1><FontAwesomeIcon icon={faUser} /> My Profile</h1>
                    <hr />
                    {/* Creating a card content container to include the list group in it. */}
                    <Card className="d-flex justify-content-center border border-dark bg-info text-white container" style={{ width: '70rem' }}>
                        <Card.Body>
                            <Card.Title><b>Personal Details</b></Card.Title>

                            {/* Creating a list group for personal details of customer/ user */}
                            <ListGroup >
                                <ListGroup.Item><b>First Name:</b>  Shrestha</ListGroup.Item>
                                <ListGroup.Item><b>Last Name:</b> Chowdhury</ListGroup.Item>
                                <ListGroup.Item><b>Mobile:</b> 9035292939</ListGroup.Item>
                                <ListGroup.Item><b>Email Id:</b> shrestha@gmail.com</ListGroup.Item>

                            </ListGroup>
                            <br />
                            <Card.Title><b>Address</b></Card.Title>

                            {/* Creating a list group for address details of customer/ user */}
                            <ListGroup.Item><b>Street no:</b> 1st A</ListGroup.Item>
                            <ListGroup.Item><b>Building name:</b> Aura Mansion</ListGroup.Item>
                            <ListGroup.Item><b>City:</b> Bangalore</ListGroup.Item>
                            <ListGroup.Item><b>State:</b> Karnataka</ListGroup.Item>
                            <ListGroup.Item><b>Country:</b> India</ListGroup.Item>
                            <ListGroup.Item><b>Pin Code:</b> 560064</ListGroup.Item>
                            <br />


                        </Card.Body>
                        {/* Adding an update button to the footer of the card for the customer to update his profile details*/}
                        <Card.Footer style={{ "textAlign": "right" }}>
                            <ButtonGroup>
                                <Link to={"/editcustomer/:customerId"} className="btn btn-sm btn-warning">Update</Link>{' '}

                            </ButtonGroup>
                        </Card.Footer>



                    </Card>
                </>
                <br />
                <br />
                <br />
            </div>


        );
    }
}

export default MyProfile;
    // Author: Shrestha Chowdhury [JEEFSI_Uni41]
// Code ends here
