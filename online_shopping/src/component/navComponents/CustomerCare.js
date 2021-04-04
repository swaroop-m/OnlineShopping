import React, { Component, useState } from 'react';
import axios from 'axios'
import {Button,  Form, Row, Col} from 'react-bootstrap'
import {RiCustomerService2Fill} from 'react-icons/ri'


function CustomerCare() {

//   const [userList, setUserList] = useState([]);

  const [displayMessage, setDisplayMessage] = useState(false);
  const [invalidForm, setInvalidForm] = useState(false);
  const [apiCallInProgress, setApiCallInProgress] = useState(false);
  const [name, setName] = useState("");
  const [productId, setProductId] = useState("");
  const [message, setMessage] = useState("");

  const onChangeName = (e) => setName(e.target.value);
  const onChangeProductId = (e) => setProductId(e.target.value);
  const onChangeMessage= (e) => setMessage(e.target.value);

  /**
   * THIS has all the data
   * About to MAKE API CALL
   */
  const onSubmit = async () => {
    console.log(name, productId,message);

    // VALIDATION AT THE BEGINING
    if (name === "" || productId == "" || message == "") {
      setInvalidForm(true);
    // setTimeout(() => setInvalidForm(false), 5000);

      // return, no furterh processing
      return;
    } else {
      setInvalidForm(false);
    }

    // Diable multiple Click
    setApiCallInProgress(true);

    // FAKE
    const postUrl = "https://jsonplaceholder.typicode.com/posts";
    const result = await axios({
      method: "POST",
      url: postUrl,
      data: { title: name, body: message, userId: productId },
    });

    console.log(result);

    // // PUT INTO THE LIST :: Dummy CRUD Simulations
    // const newUser = {
    //     name: name,
    //     productId: productId,
    //     message: message,
    //   };
    //   setUserList([newUser, ...userList]);

    // B2:: Display message conditioanlly
    setDisplayMessage(true);
    setTimeout(() => setDisplayMessage(false), 3000);

    // B2:: RESET THE FORM AFTER GETTING THE OUTPUT FROM THE SERVER
    setName("");
    setProductId("");
    setMessage("");

    // eneable the button again
    setApiCallInProgress(false);
  };

//   const deleteUser = (index) => {
//     console.log("call here....");
//     // remove specific index from the list
//     userList.splice(index, 1);

//     console.log(userList);
//     setUserList([...userList]);
//   };

//   const editUser = (inputData) => {
//     console.log(inputData);
//     setName(inputData.name);
//     setProductId(inputData.productId);
//     setMessage(inputData.message);
//   };

  return (
    <div>
      <h3><RiCustomerService2Fill/> Customer Care</h3>

      <Form>
             <div>
                 {displayMessage && (
                <div className="alert alert-primary">Complaint Registered successfully!</div>
                )}
            </div>

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
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" placeholder="Issue with the product?" rows={3} value={message} onChange={onChangeMessage} />
            </Form.Group>

            {invalidForm && (
                <div className="alert alert-danger">Form is Invalid!!</div>
                )}


            <Button variant="primary" type="submit" onClick={onSubmit} disabled={apiCallInProgress}>
                Submit
            </Button>
        </Form>

        <br/>
        <br/>
            {/* <div >
                <h4>My Complaints</h4>
                <hr/>
                {
                     userList.map(
                        (data, index) => 
                        (
                            <div key={index}>
                            {data.name} {data.productId} {data.message}
                            <table>
                                <Row>
                                    <Col> </Col>
                                    <Col><button className="btn btn-sm btn-outline-info mx-1" onClick={() => editUser(data)}>Edit</button></Col>
                                    <Col><button className="btn btn-sm btn-outline-danger" onClick={() => deleteUser(index)}>Delete</button></Col>
                                </Row>
                            </table>     
                            </div>
                        )
                        )
                    }
        </div> */}
        <br/>
        <br/>
    </div>
    )
}
    
export default CustomerCare;

