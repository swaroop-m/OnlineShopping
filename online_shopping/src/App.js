import React from 'react'
import './App.css'
import NavBar from './component/NavBar'
import { Container, Row, Col } from 'react-bootstrap'
import Welcome from './component/Welcome'
import Footer from './component/Footer'
import CreateProduct from './component/product/CreateProduct'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Product from './component/product/Product'
import ProductList from './component/product/ProductList'
import Cart from './component/navComponents/Cart'
import ContactUs from './component/navComponents/ContactUs'
import AboutUs from './component/navComponents/AboutUs'
import Home from './component/navComponents/Home'


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
      <Container>
        <Row>
          <Col lg={12} style={marginTop}>
            <Route path="/" exact component={Welcome}/>
            <Route path="/Home" exact component={Home}/>

            <Route path="/addproduct" exact component={Product}/>
            <Route path="/listproducts" exact component={ProductList}/>
            <Route path="/AboutUs" exact component={AboutUs}/>
            

            <Route path="/Cart" excat component={Cart}/>
            <Route path="/ContactUs" exact component={ContactUs}/>
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
