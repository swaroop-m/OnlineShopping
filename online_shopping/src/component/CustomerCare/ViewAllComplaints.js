import React ,{useEffect,useState} from 'react'
import axios from 'axios'


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

    return (
        <div>
            <div  className="d-flex justify-content-start align-items-center h3 text-dark" style={{height:100}}>All Complaints
        
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


