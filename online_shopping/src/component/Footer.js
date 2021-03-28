import React, { Component } from 'react'
import {Navbar , Col , Container} from "react-bootstrap"


class Footer extends Component {
    render() {
        let fullYear = new Date().getFullYear();
        return (
            <Navbar className="bottom"  bg="dark" varient="dark">
                <Container>
                    <Col lg={12} className="text-center text-muted" >
                        <div>{fullYear}-{fullYear+1}, All Rights Reserved. &copy;Copyright </div>  
                    </Col>
                </Container>
            </Navbar>
        );
    }
}

export default Footer;