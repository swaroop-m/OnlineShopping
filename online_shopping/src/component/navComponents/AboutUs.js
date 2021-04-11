import React, { Component } from 'react';
import {Card, Row,Col ,Container, Jumbotron } from 'react-bootstrap'


class AboutUs extends Component {
     
    
    render() {
        
        return (

            <>
            <div className='container'>
            <center><h3>WE <img src="https://img.icons8.com/emoji/48/000000/beating-heart.png"/> WHAT WE DO!</h3></center>

                <Jumbotron className="bg-warning text-dark">
                    <h1>Hello, Welcome to ShopAura</h1>
                    <blockquote className="blockquote mb-0">
                        <p>
                        IF YOU CAN'T STOP THINKING ABOUT IT. 
                        BUY IT!
                    </p>
                        <footer className="blockquote-footer text-dark">
                        <b>Batch 1 - Group 8</b>
                        </footer>
                    </blockquote>
                </Jumbotron>
                </div>

                <div >
                    <h4 className="d-flex align-items-center justify-content-center">About Us</h4>
                    <hr/>
                </div>

            
            

            <div>
            <Container>
                 <Row md={3}>

                     <Col>
                     <Card style={{ width: '18rem' }} className="overflow" >
                     <Card.Img variant="top" src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                     <Card.Body>
                         <Card.Title>Creators</Card.Title>
                         <Card.Text>
                         A group of 5, motivated, hard working interns, developed the web application which helps people to buy the desired products online.
                         </Card.Text>
                     </Card.Body>
                     </Card>  
                     </Col>

                    <Col  md={{ span: 1, offset: 0 }}> 
                     <Card style={{ width: '18rem' }}>
                     <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_1280.jpg" />
                     <Card.Body>
                         <Card.Title>Work Space</Card.Title>
                     <Card.Text>
                        Uncertain Pandemics don't stop us from doing what we like.<br/> We work from Home!
                     </Card.Text>
                     </Card.Body>
                    </Card>  
                     </Col>

                     <Col md={{ span: 3, offset: 3 }}> 
                     <Card style={{ width: '18rem' }}>
                 <Card.Img variant="top" src="https://images.pexels.com/photos/1036857/pexels-photo-1036857.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
                 <Card.Body>
                     <Card.Title>Shopping</Card.Title>
                        <Card.Text>
                         We are open 24/7. You can shop online at any time and from any place. <br/>Your welcome!.
                         </Card.Text>
                     </Card.Body>
                     </Card>
                     </Col>
                   
                 </Row>
                 </Container>
                 <br/>
                 <br/>
                 </div>
            </>
            
         );
    }
}

export default AboutUs;