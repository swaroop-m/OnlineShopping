import React from 'react'
import './App.css'
import NavBar from './component/NavBar'
import {Container, Row , Col} from 'react-bootstrap'
import Welcome from './component/Welcome'
import Footer from './component/Footer'

function App() {

  const marginTop = {
    marginTop:"20px"
  }
  return (
    <div className="App">
      <NavBar/>
      <Container>
        <Row>
          <Col lg={12} style={marginTop}>
            <Welcome/>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}

export default App
