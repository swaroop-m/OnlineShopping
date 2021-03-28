import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class Product extends Component {
    render() {
        return (
                <Card className="border border-dark bg-dark text-white">
                <Card.Header>
                    <div style={{ "float": "left" }}>
                        {/* <FontAwesomeIcon icon={faList} /> */}
                        Add a Product
                    </div>
                </Card.Header>
                <Card.Body>

                </Card.Body>
            </Card>
        );
    }
}

export default Product;