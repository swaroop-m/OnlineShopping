import React from 'react'
import './App.css'
import NavBar from './component/NavBar'
import { Container, Row, Col } from 'react-bootstrap'
import Welcome from './component/Welcome'
import Footer from './component/Footer'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Product from './component/product/Product'
import ProductList from './component/product/ProductList'
import ViewProduct from './component/product/ViewProduct'

import Customer from './component/Customer/Customer'
import CustomerList from './component/Customer/CustomerList'
// import Customer from './component/Customer/Customer'

import Cart from './component/navComponents/Cart'
import AboutUs from './component/navComponents/AboutUs'
import Home from './component/navComponents/Home'
import CustomerCare from './component/navComponents/CustomerCare'
import Login from './component/Login/Login'
import Order from './component/Order/Order'
import OrderList from './component/Order/OrderList'
import OrderSummary from './component/Order/OrderSummary'



function App() {

  const marginTop = {
    marginTop: "20px"
  }

  // const heading = "Welcome to Book Store";
  // const quote = "Good friends, good books, and a sleepy conscience: this is the ideal life.";
  // const footer = "Mark Twain";

  return (
    <Router>
      {/* <Router>
        <NavBar />
        <Container>
          <Row>
            <Col lg={12} className={"margin-top"}>
              <Switch>
              <Route path="/" exact component={Welcome}/>
              <Route path="/saveproduct" exact component={CreateProduct}/>
                 <Route path="/" exact component={() => <Welcome heading={heading} quote={quote} footer={footer} />} /> 
                 <Route path="/add" exact component={Book} />
                <Route path="/edit/:id" exact component={Book} />
                <Route path="/list" exact component={BookList} />
                <Route path="/users" exact component={UserList} />
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Login} />
                <Route path="/logout" exact component={Login} /> 
              </Switch>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Router> */}


      <NavBar/>
      <Welcome/>
      <Container>
        <Row>
          <Col lg={12} style={marginTop}>
            <Route path="/" exact component={Welcome}/>
            <Route path="/Home" exact component={Home}/>
        


            <Route path="/addproduct" exact component={Product}/>
            <Route path="/editproduct/:productId" exact component={Product}/>
            <Route path="/listproducts" exact component={ProductList}/>
            <Route path="/viewproduct/:productId" exact component={ViewProduct}/>
            <Route path="/AboutUs" exact component={AboutUs}/>
            
            <Route path="/addcustomer" exact component={Customer}/>
            <Route path="/editcustomer/:customerId" exact component={Customer}/>
            <Route path="/listcustomers" exact component={CustomerList}/>
    
            <Route path="/listorder" exact component={OrderList}/>
            <Route path="/editorder/:orderId" exact component={Order}/>
            <Route path="/ordersummary" exact component={OrderSummary}/>
            <Route path="/addorder" exact component={Order}/>
    
            <Route path="/Login" exact component={Login}/>
            <Route path="/Cart" excat component={Cart}/>
            <Route path="/CustomerCare" exact component={CustomerCare}/>

            {/* <CreateProduct />
            <ProductList /> */}
          </Col>
        </Row>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App
