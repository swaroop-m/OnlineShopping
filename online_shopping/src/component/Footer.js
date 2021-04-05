import React, { Component } from 'react'
import {Navbar , Col , Container} from "react-bootstrap"


class Footer extends Component {
    render() {
        let fullYear = new Date().getFullYear();
        return (
            <Navbar className="" position="bottom" bg="dark" varient="dark">
                <Container>
                    <Col lg={12} className="text-center text-white" >
                        <div>All Rights Reserved. &copy; Copyright {fullYear}-{fullYear+1} </div>  
                    </Col>
                </Container>
            </Navbar>
        );
    }
}

export default Footer;