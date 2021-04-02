import React from 'react'
import {Navbar, Nav , NavDropdown, NavLink} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {AiOutlineShoppingCart } from 'react-icons/ai'

class NavBar extends React.Component
{
    render() {
        return ( 
            <Navbar bg="light" variant="light">
                <Link to={"/"} className="navbar-brand">
                <Navbar.Brand href="#"><img src="https://www.svgrepo.com/show/217771/shopping-logo.svg" width="40" height="40" alt="Brand_Logo"/> Shopping</Navbar.Brand>
                </Link>
                <Nav className="mr-auto">
                    <Link to={"/"} className="nav-link">Home &emsp;</Link>
                    {/* bg-dark text-white */}
                    <NavDropdown title="Product" id="basic-nav-dropdown" /*className="text-white"*/> 
                    <NavDropdown.Item className="NavDropdown"><Link to={"addproduct"} className="nav-link">Add Product</Link></NavDropdown.Item>
                    <NavDropdown.Item className="NavDropdown"><Link to={"listproducts"} className="nav-link">Product List</Link></NavDropdown.Item>
                    </NavDropdown>  
                    {/* <Link to={"addproduct"} className="nav-link">Add Products</Link>
                    <Link to={"listproducts"} className="nav-link">Product List</Link> */}
                     <NavDropdown title="Order" id="basic-nav-dropdown" /*className="bg-dark text-white"*/> 
                    <NavDropdown.Item className="NavDropdown"><Link to={"listorders"} className="nav-link">Order List</Link></NavDropdown.Item>
                    <NavDropdown.Item className="NavDropdown"><Link to={"update"} className="nav-link">Update Order</Link></NavDropdown.Item>
                    </NavDropdown>  
                    <Nav.Link href="#"> &emsp;Contact Us</Nav.Link>
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