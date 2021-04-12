import { Button, Card, Col, Row ,Form} from 'react-bootstrap'
import './orderStyle.css'
import React from 'react'
import { useHistory } from "react-router-dom";
//Author:Aishwarya A S
//Code Starts here
 function ThankYou(props){
     
     return(
         <div className="col text-center">
         <h1 className="font-weight-heavy ">Thank You for shopping with us</h1>
         <Card.Img variant="top" className="img" style={{height: 90, objectFit: "contain"}} src={"https://i.pinimg.com/474x/d0/e4/57/d0e4579d3d1ca8436a45fa99f1ff782c.jpg"}/>
         <br/><h2>Your order will be delivered soon!</h2>
         <br/>
         </div>
     )
 }
 export default ThankYou
//Code ends here
