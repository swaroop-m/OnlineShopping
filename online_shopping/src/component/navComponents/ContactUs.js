import React, { Component, useState } from 'react';
import {Button,  Form} from 'react-bootstrap'


function ContactUs() {

    //stateful
    // const [displayMessage, setDisplayMessage] = useState(false);

    //initial values
    const [name,setName] =useState(" ")
    const [productId, setProductId] =useState(" ")
    const [message,setMessage] =useState(" ")

    //user typed values
    const onChangeName= (e)=>setName(e.target.value)
    const onChangeProductId= (e)=>setProductId(e.target.value)
    const onChangeMessage= (e)=>{
        setMessage(e.target.value)
        console.log(e.target.value)
    }


    const onSubmit = async()=>{
        console.log(name,productId,message)
    }


    // B2:: Display message conditioanlly
    // setDisplayMessage(true);
    // setTimeout(() => setDisplayMessage(false), 5000);

    //Reset form values 
    // setName(" ")
    // setProductId(" ")
    // setMessage(" ")

    // FAKE Api call
//     const postUrl = "https://jsonplaceholder.typicode.com/posts";
//     const result = await axios({
//       method: "POST",
//       url: postUrl,
//       data: { title: name, body: message, userId: productId },
//     });

//     console.log(result);
//   };

    return (
        <div>
        <h1>Contact us</h1>
        <br/>
        
        <Form>

        {/* {displayMessage && (
        <div className="alert alert-primary">Register successfully!</div>
         )} */}

            <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" value={name} onChange={onChangeName} />
                <Form.Text className="text-muted">
                We'll never share your details with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Product Id</Form.Label>
                <Form.Control type="text" placeholder="Enter Product ID" value={productId} onChange={onChangeProductId} />
            </Form.Group>
        
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Issue with the Product?</Form.Label>
                <Form.Control as="textarea" rows={3} value={message} onChange={onChangeMessage} />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={onSubmit}>
                Submit
            </Button>
        </Form>

<br/>
<br/>
        <div>
            <h4>My Complaints</h4>
        
        </div>
    </div>
    
    )
}


export default ContactUs;

