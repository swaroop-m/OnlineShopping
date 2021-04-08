import React ,{useEffect,useState} from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'

function ViewAllComplaints(props) {

    let [complaints,setComplaints]=useState([])

    useEffect(()=>
    {
        axios.get('http://localhost:9000/api/viewallcomplaints')
             .then((res)=>{
                 console.log(res.data)
                 setComplaints(res.data)
             })
             .catch((error)=>console.log(error))
    },[])

    // const onDelete=(() =>
    // {
    //     axios.get('http://localhost:9000/api/deletecomplaints')
    //          .then((res)=>{
    //              console.log(res.data)
    //              console.log("deleting data")
    //              setComplaints([])
    //          })
    //          .catch((error)=>console.log(error))
    //         },[])


    return (
        <div>
            <div  className="d-flex justify-content-start align-items-center h3 text-dark" style={{height:100}}>All Complaints
            <Button className="btn btn-danger ml-5" >Delete</Button>
            
            </div>
            <hr/>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>phoneNo</th>
                        <th>productName</th>
                        <th>message</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        complaints.map(complaints=>
                        <tr key={complaints.name}>
                            <td>{complaints.name}</td>
                            <td>{complaints.phoneNo}</td>
                            <td>{complaints.productName}</td>
                            <td>{complaints.message}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ViewAllComplaints


