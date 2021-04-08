import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, NavLink, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiCustomerService2Fill } from "react-icons/ri";
import Logo from './Image/Logo.svg'

function NavBar(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Link to={"/Home"} className="navbar-link">
        <Navbar.Brand style={{fontFamily:'Sans'}}>
          <img
            src={Logo}
            width="50"
            height="60"
            alt="Brand_Logo"
          />
          ShopAura
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to={"/Home"} className="nav-link">
            Home
          </Link>
          {/* bg-dark text-white */}
          <Link to={"/Shop"} className="nav-link">
            Shop
          </Link>
          <NavDropdown
            title="Product"
            id="basic-nav-dropdown" /*className="bg-dark text-white"*/
          >
            <NavDropdown.Item className="NavDropdown">
              <Link to={"/addproduct"} className="nav-link">
                Add Product
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="NavDropdown">
              <Link to={"/listproducts"} className="nav-link">
                Product List
              </Link>
            </NavDropdown.Item>
          </NavDropdown>

          {/* <Link to={"addproduct"} className="nav-link">Add Products</Link>
                    <Link to={"listproducts"} className="nav-link">Product List</Link> */}
          
          <NavDropdown
            title="Customer"
            id="basic-nav-dropdown-c" /*className="bg-dark text-white"*/
          >
            <NavDropdown.Item className="NavDropdown">
              <Link to={"/addcustomer"} className="nav-link">
                Add Customer
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="NavDropdown">
              <Link to={"/listcustomers"} className="nav-link">
                Customer List
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
    <NavDropdown
            title="Order"
            id="basic-nav-dropdown-c" /*className="bg-dark text-white"*/
          >
            <NavDropdown.Item className="NavDropdown">
              <Link to={"/listorder"} className="nav-link">
                Order List
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="NavDropdown">
              <Link to={"/addorder"} className="nav-link">
                Add Order
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="NavDropdown">
              <Link to={"/ordersummary"} className="nav-link">
                Order Summary
              </Link>
            </NavDropdown.Item>
          </NavDropdown>

          <Link to={"/AboutUs"} className="nav-link">
            AboutUs
          </Link>
        </Nav>
        <Nav className="justify-content-end" activeKey="/home">

        <NavDropdown
            title="My Account"
            id="basic-nav-dropdown" /*className="bg-dark text-white"*/>
            <NavDropdown.Item className="NavDropdown">
              <Link to={"/MyProfile"} className="nav-link">
                My Profile
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item >
              <Button className="btn btn-danger">Log out</Button>
            </NavDropdown.Item>
          </NavDropdown>

          <Link to={"/Login"} className="nav-link">
            Log in
          </Link>
          <Link to={"/Cart"} className="nav-link">
            Cart 
            <AiOutlineShoppingCart size="1.5em" />
          </Link>
          <Link to={"/CustomerCare"} className="nav-link">
            <RiCustomerService2Fill />
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
