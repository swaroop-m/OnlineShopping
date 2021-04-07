import React, { Component } from 'react';

class Shop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
    }

    componentDidMount() {
        axios.get("http://localhost:9000/api/viewallproducts")
            .then(response => response.data)
            .then((data) => {
                this.setState({ products: data });
            });
    };
    
    render() {


        return (
            <div>
                
            </div>
        );
    }
}

export default Shop;