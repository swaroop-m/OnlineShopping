import React, { Component } from 'react';
import { Card, Form, Button, Col } from 'react-bootstrap';
// import { Col } from 'react-bootstrap';

class Product extends Component {
    render() {
        return (
            <div>
                <Card className="border border-dark bg-dark text-white">
                    <Card.Header>
                        <div style={{ "float": "left" }}>
                            {/* <FontAwesomeIcon icon={faList} /> */}
                        Add a Product
                    </div>
                    </Card.Header>
                    <Card.Body>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridTitle">
                                <Form.Label>Title</Form.Label>
                                {/* <Form.Control required autoComplete="off"
                                type="test" name="title"
                                value={title} onChange={this.bookChange}
                                className={"bg-dark text-white"}
                                placeholder="Enter Book Title" /> */}
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridAuthor">
                                <Form.Label>Author</Form.Label>
                                {/* <Form.Control required autoComplete="off"
                                type="test" name="author"
                                value={author} onChange={this.bookChange}
                                className={"bg-dark text-white"}
                                placeholder="Enter Book Author" /> */}
                            </Form.Group>
                        </Form.Row>
                    </Card.Body>
                </Card>
                <hr />
                <div className="card border border-dark bg-dark text-white">
                    <div className="card-header">
                        Add a Product
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="row">
                                <div className="col">
                                    <label>Title</label>
                                    <input name="email" className="form-control bg-dark text-white" placeholder="email"/>
                                </div>
                                <div className="col">
                                    <label >Password</label>
                                    <input name="password" className="form-control bg-dark text-white"/>
                                </div>
                            </div>
                        </form>
                        <a  className="btn btn-primary">Add Product</a>
                    </div>
                </div>
            <br />
            </div>
        );
    }
}

export default Product;