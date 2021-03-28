import React from 'react'
import {Navbar, Nav , NavDropdown} from 'react-bootstrap'
import {BiStore} from 'react-icons/bi'
import {AiOutlineShoppingCart } from 'react-icons/ai'
import {Link, NavLink} from 'react-router-dom'

class NavBar extends React.Component
{
    render() {
        return (                   
                <Navbar bg="dark" variant="dark">
                        <Link to={"Home"} className="navbar-brand"><BiStore size="2em"/>Shopping</Link> 
                    <Nav className="mr-auto">
                        <Link to={"Home"} className="nav-link">Home</Link> 
                        
                        <Link to={"Products"} className="nav-link">Products</Link>
                    <NavDropdown title="Product" id="basic-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to={"addproduct"} className="NavDropdown"> Add Product</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to={"listproducts"} className="NavDropdown"> Product List</NavDropdown.Item>
                            {/* <NavDropdown.Item as={NavLink} to={"#"} className="NavDropdown"> Category2</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={NavLink} to={"#"} className="NavDropdown"> Category3</NavDropdown.Item> */}
                    </NavDropdown>
                        <Link to={"ContactUs"} className="nav-link">Contact Us</Link>
                    </Nav>
                    <Nav className="justify-content-end" activeKey="/home">
                        <Link to={"Orders"} className="nav-link">Orders</Link>

                        {/* <NavDropdown title="Profile" id="basic-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to={"User"} className="NavDropdown">User</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to={"Address"} className="NavDropdown">Address</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item> <button className="btn btn-danger" align="center">SignOut</button></NavDropdown.Item>
                        </NavDropdown> */}

                        <Link to={"#"} className="nav-link">Log in</Link> 
                        <Link to={"Cart"} className="nav-link">Cart<AiOutlineShoppingCart size="1.5em"/></Link>     
                    </Nav>
                </Navbar>
        )
    }
}


export default NavBar