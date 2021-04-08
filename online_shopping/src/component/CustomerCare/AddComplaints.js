import React , {useEffect, useState} from 'react'
import axios from 'axios'
import {Button,  Form } from 'react-bootstrap'
import {RiCustomerService2Fill} from 'react-icons/ri'


function Addcomplaints() {

    let [complaints,setComplaints]=useState({name:' ',phoneNo: ' ',productName:' ',message:' '})
   


     const submitProduct = (event) => {
        event.preventDefault();
        axios.post('http://localhost:9000/api/addcomplaints',complaints)
        .then(res=>console.log(res.data))
        .catch(error=>console.log(error))
        window.location.reload()
        };


    function successSubmit(){  
            alert("Complaint registered successfully!!");
    }

    return (
<>
        <div>
      <h3><RiCustomerService2Fill/> Customer Care</h3>

      <Form onSubmit={submitProduct}>

            <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" onChange={e=>setComplaints({...complaints,name:e.target.value})} value={complaints.name}/>
                <Form.Text className="text-muted">
                We'll never share your details with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Phone no</Form.Label>
                <Form.Control type="text" placeholder="Enter Phone no" onChange={e=>setComplaints({...complaints,phoneNo:e.target.value})} value={complaints.phoneNo} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Product Name" onChange={e=>setComplaints({...complaints,productName:e.target.value})} value={complaints.productName} />
            </Form.Group>
        
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" placeholder="Issue with the product?" rows={3} onChange={e=>setComplaints({...complaints,message:e.target.value})} value={complaints.message} />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={successSubmit}>
                Submit
            </Button>
        </Form>
        </div>
    
        </>
        )
    }
    
   

export default Addcomplaints