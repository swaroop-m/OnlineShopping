import React from 'react'
import './App.css'
import NavBar from './component/NavBar'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from './component/Footer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Products from './component/navComponents/Products'
import Product from './component/product/Product'
import ProductList from './component/product/ProductList'
import Home from './component/navComponents/Home'
import Cart from './component/navComponents/Cart'
import ContactUs from './component/navComponents/ContactUs'
import Orders from './component/navComponents/Orders'
// import User from './component/navComponents/User'
// import Address from './component/navComponents/Address'
import Login from './component/Login/Login'
// import AboutUs from './component/navComponents/AboutUs'

function App() {

  const marginTop = {
    marginTop: "20px"
  }

  return (
    <Router>
      <NavBar/>
      <Container>
        <Row>
          <Col lg={12} style={marginTop}>
          <Switch>
              {/* <Route path="/AboutUs" exact component={AboutUs}/> */}
              <Route path="/Home" exact component={Home}/>
              <Route path="/Products" exact component={Products}/>
              <Route path="/addproduct" exact component={Product}/>
              <Route path="/listproducts" exact component={ProductList}/>
              <Route  path="/ContactUs" exact component={ContactUs}/>
              <Route path="/orders" exact component={Orders}/>
              {/* <Route path="/User" exact component={User}/>
              <Route path="/Address" exact component={Address}/> */}
              <Route path="/Login" exact component={Login}/>
              <Route  path="/Cart" exact component={Cart}/>
            </Switch>
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