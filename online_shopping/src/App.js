import React from 'react'
import './App.css'
import NavBar from './component/NavBar'
import { Container, Row, Col } from 'react-bootstrap'
import Welcome from './component/Welcome'
import Footer from './component/Footer'

import {Provider} from 'react-redux';
import store from './component/reducer/store';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Product from './component/product/Product'
import ProductList from './component/product/ProductList'
import ViewProduct from './component/product/ViewProduct'

import Customer from './component/Customer/Customer'
import CustomerList from './component/Customer/CustomerList'

import Cart from './component/navComponents/Cart'
import AboutUs from './component/navComponents/AboutUs'
import Home from './component/navComponents/Home'
import CustomerCare from './component/navComponents/CustomerCare'
import MyProfile from './component/Customer/MyProfile'
import Shop from './component/product/Shop'

import OrderList from './component/Order/OrderList'
import OrderSummary from './component/Order/OrderSummary'
import Order from './component/Order/Order'

import Login from './component/Login/Login'
import Register from './component/Login/Register'
import UserList from './component/Login/UserList'
import ViewAllComplaints from './component/CustomerCare/ViewAllComplaints'



export default function App() {

  const marginTop = {
    marginTop: "20px"
  }

  // const heading = "Welcome to Book Store";
  // const quote = "Good friends, good books, and a sleepy conscience: this is the ideal life.";
  // const footer = "Mark Twain";

  return (
    <div>
    <Router>
      <NavBar/>
      <Welcome/>
      <div>
        <Row>
          <Col lg={12} style={marginTop}>
            <Route path="/" exact component={Welcome}/>
            <Route path="/Home" exact component={Home}/>
            <Route path="/Shop" exact component={Shop}/>

            <Route path="/addproduct" exact component={Product}/>
            <Route path="/editproduct/:productId" exact component={Product}/>
            <Route path="/listproducts" exact component={ProductList}/>
            <Route path="/viewproduct/:productId" exact component={ViewProduct}/>
            <Route path="/AboutUs" exact component={AboutUs}/>
            
            <Route path="/addcustomer" exact component={Customer}/>
            <Route path="/editcustomer/:customerId" exact component={Customer}/>
            <Route path="/listcustomers" exact component={CustomerList}/>
            <Route path="/MyProfile" exact component={MyProfile}/>
            <Route path="/Cart" excat component={Cart}/>
            <Route path="/CustomerCare" exact component={CustomerCare}/>
            <Route path="/ViewAllComplaints" exact component={ViewAllComplaints}/>

            <Route path="/listorder" exact component={OrderList}/>
            <Route path="/editorder/:orderId" exact component={Order}/>
            <Route path="/ordersummary" exact component={OrderSummary}/>
            <Route path="/addorder" exact component={Order}/>

            <Route path="/Login" exact component={Login}/>
            <Route path="/Register" exact component={Register}/>
            <Route path="/UserList" exact component={() => 
              <Provider store={store}><UserList/></Provider>}/>
            <Route path="/Logout" exact component={Login}/>

           
          </Col>
        </Row>
      </div>
      <Footer/>
    </Router>
    </div>
  );
}

