import React, { Component } from 'react';
import {Card, Button, Row,Col ,Container, Jumbotron } from 'react-bootstrap'

class AboutUs extends Component {
    render() {
        return (
            <div className="container">
                <center><h3>WE <img src="https://img.icons8.com/emoji/48/000000/beating-heart.png"/> WHAT WE DO!</h3></center>


                {/* <Jumbotron className="bg-dark text-white">
                    <h1>Hello, Welcome to Online Shop</h1>
                    <blockquote className="blockquote mb-0">
                        <p>
                         IF YOU CAN'T STOP THINKING ABOUT IT. 
                         BUY IT!
                        </p>
                        <footer className="blockquote-footer">
                            Robert Downey Jr
                        </footer>
                    </blockquote>
                </Jumbotron> */}

                <hr/>
                <div>
                <br/>
                    <Row>
                    
                    <div className="align-items-center">
                    
                        <div classsName="col-sm-12 col-lg-6">
                        
                        <h1>About Us</h1>
                        <p>Shopping is an activity in which a customer browses the available goods or services presented by one or more retailers with the potential intent to purchase a suitable selection of them. A typology of shopper types has been developed by scholars which identifies one group of shoppers as recreational shoppers,[1] that is, those who enjoy shopping and view it as a leisure activity.<br/>

                            Online shopping has become a major disruptor in the retail industry[3] as consumers can now search for product information and place product orders across different regions. Online retailers deliver their products directly to the consumers' home, offices or wherever they want. The B2C (business to consumer) process has made it easy for consumers to select any product online from a retailer's website and to have it delivered relatively quickly. Using online shopping methods, consumers do not need to consume energy by physically visiting physical stores. This way they save time and the cost of travelling. A retailer or a shop is a business that presents a selection of goods and offers to trade or sell them to customers for money or other goods.<br/>

                           </p>
                           <p> Shoppers' shopping experiences may vary. They are based on a variety of factors including how the customer is treated, convenience, the type of goods being purchased, and mood.</p>
                        </div>
                        
                        <div classsName="col-sm-12 col-lg-6">
                        <img src="https://cdn.pixabay.com/photo/2018/06/04/00/29/women-3452067_960_720.jpg" style={{ height: 330, objectFit: "contain" }}/>
                        </div>
                        </div>
                    </Row>
                
                </div>
                <h1 className="text-white">About Shopping </h1>

                <img src="https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140604_1280.jpg" width="200px" height="150px"/>
                <p >Online shopping is a form of electronic commerce which allows consumers to directly buy goods or services from a seller over the Internet using a web browser or a mobile app. Consumers find a product of interest by visiting the website of the retailer directly or by searching among alternative vendors using a shopping search engine, which displays the same product's availability and pricing at different e-retailers. As of 2020, customers can shop online using a range of different computers and devices, including desktop computers, laptops, tablet computers and smartphones.

                            An online shop evokes the physical analogy of buying products or services at a regular "bricks-and-mortar" retailer or shopping center; the process is called business-to-consumer (B2C) online shopping. When an online store is set up to enable businesses to buy from another businesses, the process is called business-to-business (B2B) online shopping. A typical online store enables the customer to browse the firm's range of products and services, view photos or images of the products, along with information about the product specifications, features and prices.

                            Online stores usually enable shoppers to use "search" features to find specific models, brands or items. Online customers must have access to the Internet and a valid method of payment in order to complete a transaction, such as a credit card, an Interac-enabled debit card, or a service such as PayPal. For physical products (e.g., paperback books or clothes), the e-tailer ships the products to the customer; for digital products, such as digital audio files of songs or software, the e-tailer usually sends the file to the customer over the Internet. The largest of these online retailing corporations are Alibaba, Amazon.com, and eBay</p>
                <hr/>

                <Container>
                <Row md={3}>

                    <Col>
                    <Card style={{ width: '18rem' }} className="overflow" >
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/07/31/17/09/people-2559042_1280.jpg" />
                    <Card.Body>
                        <Card.Title>Employees</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Know more</Button>
                    </Card.Body>
                    </Card>  
                    </Col>

                    <Col  md={{ span: 1, offset: 0 }}> 
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_1280.jpg" />
                    <Card.Body>
                        <Card.Title>WorkSpace</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Know more</Button>
                    </Card.Body>
                    </Card>  
                    </Col>

                    <Col md={{ span: 3, offset: 3 }}> 
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/12/26/09/15/woman-3040029_1280.jpg" />
                    <Card.Body>
                        <Card.Title>Safe Shopping</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Know more</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                   
                </Row>
                </Container>
                
            </div>
        );
    }
}

export default AboutUs;