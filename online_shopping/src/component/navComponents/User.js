import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <div>
                <h1 className="text-white">Customer Id</h1>
                <h1 className="text-white">First Name</h1>
                <h1 className="text-white">Last Name</h1>
                <h1 className="text-white"> mobile number</h1>
                <h1 className="text-white">address</h1>
                <h1 className="text-white">Email</h1>
            </div>
        );
    }
}

export default User;