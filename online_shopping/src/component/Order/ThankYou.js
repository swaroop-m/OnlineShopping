import { render } from '@testing-library/react'
import { Button, Card, Col, Row ,Form} from 'react-bootstrap'
import './orderStyle.css'
import React from 'react'
import { useHistory } from "react-router-dom";
 function ThankYou(props){
     let history=useHistory();
     function onViewOrder(){
        history.push('/ordersummary');
     }
     return(
         <div className="col text-center">
         <h1 className="font-weight-heavy ">Thank You for shopping with us</h1><br/>
         <Card.Img variant="top" className="img" style={{height: 290, objectFit: "contain"}} src={"https://i.pinimg.com/474x/d0/e4/57/d0e4579d3d1ca8436a45fa99f1ff782c.jpg"}/>
         <br/><h2>Your order will be delivered soon!</h2>
         <br/>
         <div class="col text-center">
         <Button class="btn btn-default" onClick="onViewOrder">View your order</Button>
         </div>
         </div>
     )
 }
 export default ThankYou
