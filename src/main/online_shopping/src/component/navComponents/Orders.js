import React, { Component } from 'react';

class Orders extends Component {
    render() {
        return (
            <div>
               <h1 className="text-white">Order id</h1> 
               <h1 className="text-white">Order Date</h1> 
               <h1 className="text-white">Order Status</h1>
               <h1 className="text-white">Customer</h1>
               <h1 className="text-white">Address</h1>
               <h1 className="text-white">Product list</h1>
            </div>
        );
    }
}

export default Orders;