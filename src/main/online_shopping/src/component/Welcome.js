import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap'

class Welcome extends Component {
    render() {
        return (
            <div>
                 <Jumbotron className="bg-dark text-white">
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
                </Jumbotron>
            </div>
        );
    }
}

export default Welcome