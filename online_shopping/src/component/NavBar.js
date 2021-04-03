import React,{Component} from 'react'
import {Navbar, Nav , NavDropdown, NavLink} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {AiOutlineShoppingCart } from 'react-icons/ai'
import {RiCustomerService2Fill} from 'react-icons/ri'

class NavBar extends Component
{
    render() {
        return ( 
            <Navbar bg="light" variant="light">
                <Link to={"Home"} className="navbar-link">
                <Navbar.Brand ><img src="https://www.svgrepo.com/show/217771/shopping-logo.svg" width="40" height="40" alt="Brand_Logo"/> Shopping</Navbar.Brand>
                </Link>
                <Nav className="mr-auto">
                    <Link to={"Home"} className="nav-link">Home</Link>
                    {/* bg-dark text-white */}
                    <NavDropdown title="Product" id="basic-nav-dropdown" /*className="bg-dark text-white"*/> 
                    <NavDropdown.Item className="NavDropdown"><Link to={"addproduct"} className="nav-link">Add Product</Link></NavDropdown.Item>
                    <NavDropdown.Item className="NavDropdown"><Link to={"listproducts"} className="nav-link">Product List</Link></NavDropdown.Item>
                    </NavDropdown>  
                    {/* <Link to={"addproduct"} className="nav-link">Add Products</Link>
                    <Link to={"listproducts"} className="nav-link">Product List</Link> */}
                     <Link to={"AboutUs"} className="nav-link">AboutUs</Link>
                </Nav>
                <Nav className="justify-content-end" activeKey="/home">
                
                <Link to={"#"} className="nav-link">Log in</Link> 
                    <Link to={"Cart"} className="nav-link">Cart<AiOutlineShoppingCart size="1.5em"/></Link>    
                    <Link to={"ContactUs"} className="nav-link"><RiCustomerService2Fill/></Link>
                </Nav>
            </Navbar>
        )
    }
}


export default NavBar