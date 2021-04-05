 //   const [userList, setUserList] = useState([]);

//   const [displayMessage, setDisplayMessage] = useState(false);
//   const [invalidForm, setInvalidForm] = useState(false);
//   const [apiCallInProgress, setApiCallInProgress] = useState(false);
//   const [name, setName] = useState("")
//   const [phoneNo, setPhoneNo] =useState(" ")
//   const [productId, setProductId] = useState("")
//   const [message, setMessage] = useState("")
  

//   const onChangeName = (e) => setName(e.target.value)
//   const onChangePhoneNo =(e)=> setPhoneNo(e.target.value)
//   const onChangeProductId = (e) => setProductId(e.target.value)
//   const onChangeMessage= (e) => setMessage(e.target.value)

//   /**
//    * THIS has all the data
//    * About to MAKE API CALL
//    */
//   const onSubmit = async () => {
//     console.log(name,phoneNo, productId,message);

//     // VALIDATION AT THE BEGINING
//     if (name === "" || phoneNo==="" || productId == "" || message == "") {
//       setInvalidForm(true);
//     // setTimeout(() => setInvalidForm(false), 5000);

//       // return, no furterh processing
//       return;
//     } else {
//       setInvalidForm(false);
//     }

//     // Diable multiple Click
//     setApiCallInProgress(true);

//     // FAKE
//     // const postUrl = "http://localhost:9000/api/addcomplaints";
//     // const result = await axios({
//     //   method: "POST",
//     //   url: postUrl,
//     //   data: { title: name, number : phoneNo, body: message, Id: productId },
//     // });

//     // console.log(result);

//     // // PUT INTO THE LIST :: Dummy CRUD Simulations
//     // const newUser = {
//     //     name: name,
//     //     productId: productId,
//     //     phoneNo: phoneNo,
//     //     message: message,
//     //   };
//     //   setUserList([newUser, ...userList]);

//     // B2:: Display message conditioanlly
//     setDisplayMessage(true);
//     setTimeout(() => setDisplayMessage(false), 3000);

//     // B2:: RESET THE FORM AFTER GETTING THE OUTPUT FROM THE SERVER
//     setName("")
//     setPhoneNo(" ")
//     setProductId("")
//     setMessage(" ")

//     // eneable the button again
//     setApiCallInProgress(false);
//   };

// //   const deleteUser = (index) => {
// //     console.log("call here....");
// //     // remove specific index from the list
// //     userList.splice(index, 1);

// //     console.log(userList);
// //     setUserList([...userList]);
// //   };

// //   const editUser = (inputData) => {
// //     console.log(inputData);
// //     setName(inputData.name);
// //     setProductId(inputData.productId);
// //     setMessage(inputData.message);
// //   };
    

   

    //     <br/>
    //     <br/>
    //         {/* <div >
    //             <h4>My Complaints</h4>
    //             <hr/>
    //             {
    //                  userList.map(
    //                     (data, index) => 
    //                     (
    //                         <div key={index}>
    //                         {data.name} {data.productId} {data.message}
    //                         <table>
    //                             <Row>
    //                                 <Col> </Col>
    //                                 <Col><button className="btn btn-sm btn-outline-info mx-1" onClick={() => editUser(data)}>Edit</button></Col>
    //                                 <Col><button className="btn btn-sm btn-outline-danger" onClick={() => deleteUser(index)}>Delete</button></Col>
    //                             </Row>
    //                         </table>     
    //                         </div>
    //                     )
    //                     )
    //                 }
    //     </div> */}
    //     <br/>
    //     <br/>
    // </div>
    
//     )
// }