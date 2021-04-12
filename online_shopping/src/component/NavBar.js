import React, { Component } from "react";
import {connect} from 'react-redux';
import { Navbar, Nav, NavDropdown, NavLink, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiCustomerService2Fill } from "react-icons/ri";
import Logo from './Image/Logo.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt,faUserPlus,faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import { logoutUser } from './Services/auth/authActions';
import '../index.css'

class NavBar extends Component {

  logout=()=>{
    this.props.logoutUser();
  };

  render(){

    const guestLinks=(
      <>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        <Navbar.Collapse id="responsive-navbar-nav" className="style-nav">
        <Nav className="mr-auto font-weight-bold fs-5 navbar-right" >
          <Link to={"/Login"} className="nav-link"><FontAwesomeIcon icon={faUserPlus} />Login</Link>
          <Link to={"/Register"} className="nav-link"><FontAwesomeIcon icon={faSignInAlt} />Register</Link>
          <Link to={"/AboutUs"} className="nav-link">AboutUs</Link>
        </Nav>
        </Navbar.Collapse>
      </>
    );

    const userLinks=(
      <>
      
      {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
    <Navbar.Collapse id="responsive-navbar-nav" className='style-nav' >
      <Nav className="mr-auto fs-5 "  >
        <Link to={"/Home"} className="nav-link"  >
          Home
        </Link>
        {/* bg-dark text-white */}
        <Link to={"/Shop"} className="nav-link">
          Shop
        </Link>

      
        <NavDropdown className=""
          title="Product"
          id="basic-nav-dropdown" /*className="bg-dark text-white"*/
        >
          <NavDropdown.Item className="NavDropdown bg-warning">
            <Link to={"/addproduct"} className="nav-link">
              Add Product
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item className="NavDropdown bg-warning">
            <Link to={"/listproducts"} className="nav-link">
              Product List
            </Link>
          </NavDropdown.Item>
        </NavDropdown>

        {/* <Link to={"addproduct"} className="nav-link">Add Products</Link>
                  <Link to={"listproducts"} className="nav-link">Product List</Link> */}
        
          <NavDropdown className=""
            title="Product"
            id="basic-nav-dropdown" /*className="bg-dark text-white"*/
          >
            <NavDropdown.Item className="NavDropdown bg-warning">
              <Link to={"/addproduct"} className="nav-link">
                Add Product
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="NavDropdown bg-warning">
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
              <Link to={"/ordersummary"} className="nav-link">
                Order Summary
              </Link>
            </NavDropdown.Item>
          </NavDropdown>


          <NavDropdown className=""
            title="Admin"
            id="basic-nav-dropdown" /*className="bg-dark text-white"*/
          >
            <NavDropdown.Item className="NavDropdown bg-warning">
              <Link to={"/addproduct"} className="nav-link">
                Add Product
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="NavDropdown">
              <Link to={"/listorder"} className="nav-link">
                Order List
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="NavDropdown">
              <Link to={"/listcustomers"} className="nav-link">
                Customer List
              </Link>
            </NavDropdown.Item>

          </NavDropdown>

          

          <Link to={"/AboutUs"} className="nav-link">
            AboutUs
          </Link>
        </Nav>
        
        <Nav className="justify-content-end"  classname="style-nav1" activeKey="/home">

        <NavDropdown
            title="My Account"
            id="basic-nav-dropdown">
            <NavDropdown.Item className="NavDropdown bg-warning ">
              <Link to={"/MyProfile"} className="nav-link ">
                My Profile
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="NavDropdown bg-warning">
              <Link to={"/CustomerCare"} className="nav-link ">
                <RiCustomerService2Fill /> Contact Us
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item classname="NavDropdown bg-warning">
            <Link to={"/LogOut"} className="nav-link " onClick={this.logout}><FontAwesomeIcon icon={faSignOutAlt} />LogOut</Link>
            </NavDropdown.Item>
          </NavDropdown>

          <Link to={"/Cart"} className="nav-link">
            Cart 
            <AiOutlineShoppingCart size="1.5em" />
          </Link>

        <NavDropdown
          title="Customer"
          id="basic-nav-dropdown-c" /*className="bg-dark text-white"*/>
          <NavDropdown.Item className="NavDropdown bg-warning">
            <Link to={"/addcustomer"} className="nav-link">
              Add Customer
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item className="NavDropdown bg-warning">
            <Link to={"/listcustomers"} className="nav-link">
              Customer List
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item className="NavDropdown bg-warning">
          <Link to={"/ViewAllComplaints"} classname="nav-link">Complaints</Link>
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
            <Link to={"/ordersummary"} className="nav-link">
              Order Summary
            </Link>
          </NavDropdown.Item>
        </NavDropdown>

        <Link to={"/AboutUs"} className="nav-link">
          AboutUs
        </Link>
      </Nav>
      
      <Nav className="justify-content-end"  classname="style-nav1" activeKey="/home">

      <NavDropdown
          title="My Account"
          id="basic-nav-dropdown">
          <NavDropdown.Item className="NavDropdown bg-warning ">
            <Link to={"/MyProfile"} className="nav-link ">
              My Profile
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item className="NavDropdown bg-warning">
            <Link to={"/CustomerCare"} className="nav-link ">
              <RiCustomerService2Fill /> Contact Us
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item classname="NavDropdown bg-warning">
          <Link to={"/LogOut"} className="nav-link " onClick={this.logout}><FontAwesomeIcon icon={faSignOutAlt} />LogOut</Link>
          </NavDropdown.Item>
        </NavDropdown>

        

        <Link to={"/UserList"} className="nav-link">Users List</Link>

        <Link to={"/Cart"} className="nav-link">
          Cart 
          <AiOutlineShoppingCart size="1.5em" />
        </Link>

        

        
              
          



       
        
        
      </Nav>
    </Navbar.Collapse>
    </>
    );
    

  return (
    <Navbar collapseOnSelect expand="lg" bg="warning" variant="light">
      <Link to={"/Home"} className="navbar-link">
        <Navbar.Brand>
          <img
            src={Logo}
            width="40"
            height="50"
            alt="Brand_Logo"
          />
         <a >ShopAura</a> 
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
      {this.props.auth.isLoggedIn ? userLinks : guestLinks }
    </Navbar>
  );
};
}

const mapStateToProps= state=>{
  console.log(state)
  return{
    auth:state.auth
  };
};

const mapDispatchToProps=dispatch=>{
  return{
    logoutUser:()=>dispatch(logoutUser())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);
