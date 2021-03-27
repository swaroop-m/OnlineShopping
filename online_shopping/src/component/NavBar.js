import React from 'react'
import {Navbar, Nav , NavDropdown} from 'react-bootstrap'

class NavBar extends React.Component
{
    render() {
        return ( 
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#"><img src="https://img.icons8.com/dusk/64/000000/shop.png" width="25" height="28" alt="Brand_Logo"/>Shopping</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Products</Nav.Link>
                    <NavDropdown title="Categories" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Category0</NavDropdown.Item>
                        <NavDropdown.Item href="#">Category1</NavDropdown.Item>
                        <NavDropdown.Item href="#">Category2</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">Category3</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#">Contact Us</Nav.Link>
                </Nav>
                <Nav className="justify-content-end" activeKey="/home">
                
                <NavDropdown title="Details" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">User</NavDropdown.Item>
                        <NavDropdown.Item href="#">About us</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">Sign Out</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#"><img src="https://img.icons8.com/fluent/48/000000/favorite-cart.png" width="30" height="30"/></Nav.Link>     
                </Nav>
            </Navbar>
        )
    }
}


export default NavBar