import React from 'react'
import {Navbar, Nav , NavDropdown, NavLink} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {AiOutlineShoppingCart } from 'react-icons/ai'

class NavBar extends React.Component
{
    render() {
        return ( 
            <Navbar bg="dark" variant="dark">
                <Link to={"/"} className="navbar-brand">
                <Navbar.Brand href="#"><img src="https://img.icons8.com/dusk/64/000000/shop.png" width="25" height="28" alt="Brand_Logo"/>Shopping</Navbar.Brand>
                </Link>
                <Nav className="mr-auto">
                    <Link to={"/"} className="nav-link">Home</Link>
                    <NavDropdown title="Product" id="basic-nav-dropdown" className="bg-dark text-white"> 
                    <NavDropdown.Item className="NavDropdown bg-dark text-white"><Link to={"addproduct"} className="nav-link">Add Product</Link></NavDropdown.Item>
                    <NavDropdown.Item className="NavDropdown bg-dark text-white"><Link to={"listproducts"} className="nav-link bg-dark text-white">Product List</Link></NavDropdown.Item>
                    </NavDropdown>  
                    <Link to={"addproduct"} className="nav-link">Add Products</Link>
                    <Link to={"listproducts"} className="nav-link">Product List</Link>
                    <Nav.Link href="#">Contact Us</Nav.Link>
                </Nav>
                <Nav className="justify-content-end" activeKey="/home">
                
                <Link to={"#"} className="nav-link">Log in</Link> 
                    <Link to={"Cart"} className="nav-link">Cart<AiOutlineShoppingCart size="1.5em"/></Link>    
                </Nav>
            </Navbar>
        )
    }
}


export default NavBar