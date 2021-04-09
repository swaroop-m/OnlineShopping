import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../Services/user/userActions';
import { Card, Table, Image, Button, ButtonGroup, InputGroup, FormControl ,Alert} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faEdit, faTrash, faStepBackward, faFastBackward, faStepForward, faFastForward,faList} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import UpdatedToast from './UpdatedToast';
import DeletedToast from './DeletedToast';

class UserList extends Component{

        constructor(props) {
            super(props);
            this.state = {
                user: [],
                //pagination code begins
                currentPage : 1,
                customerPerPage : 5
                //pagination code ends
            };
        }
    
        componentDidMount() {
            //this.viewAllUsers();
            this.props.fetchUsers();
        }
    
        /*viewAllUsers() {
    
            axios.get("http://localhost:9000/api/viewAllUsers")
                .then(response => response.data)
                .then((data) => {
                    this.setState({ user: data });
                });
        };*/
    
        /*deleteUser = (userId) => {
            axios.delete("http://localhost:9000/api/deleteUser/" + userId)
                .then(response => {
                    if (response.data != null) {
                        this.setState({ "show": true });
                        setTimeout(() => this.setState({ "show": false }), 3000);
                        this.setState({
                            user: this.state.user.filter(user => user.userId !== userId)
                        });
                    } else {
                        this.setState({ "show": false });
                    }
                });
        };*/
    
        //Methods used to implement pagination
        changePage = event => {
            this.setState({
                [event.target.name]: parseInt(event.target.value)
            });
        };
    
        firstPage = () => {
            if(this.state.currentPage > 1) {
                this.setState({
                    currentPage: 1
                });
            }
        };
    
        prevPage = () => {
            if(this.state.currentPage > 1) {
                this.setState({
                    currentPage: this.state.currentPage - 1
                });
            }
        };
    
        lastPage = () => {
            let usersLength = this.props.userData.users.length;
            if(this.state.currentPage < Math.ceil(usersLength / this.state.usersPerPage)) {
                this.setState({
                    currentPage: Math.ceil(usersLength / this.state.usersPerPage)
                });
            }
        };
    
        nextPage = () => {
            if(this.state.currentPage < Math.ceil(this.props.userData.users.length / this.state.usersPerPage)) {
                this.setState({
                    currentPage: this.state.currentPage + 1
                });
            }
        };
    
    
    render () {
         //pagination code begins
         const {currentPage, userPerPage} = this.state;
         const lastIndex = currentPage * userPerPage;
         const firstIndex = lastIndex - userPerPage;

         const userData = this.props.userData;
         const users = userData.users;
         const currentUser = users.slice(firstIndex, lastIndex);
         const totalPages = users.length / userPerPage;
 
         const pageNumCss = {
             width: "45px",
             border: "1px solid #FFFFFF",
             color: "#FFFFFF",
             textAlign: "center",
             fontWeight: "bold"
         };
        return(
            <div>
                {userData.error ?
                    <Alert variant="danger">
                        {userData.error}
                    </Alert>:
            <Card className={"border border-dark"}>
                <Card.Header><FontAwesomeIcon icon={faList}/>User List</Card.Header>
                <Card.Body>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>User Name</th>
                            <th>Password</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                                {
                                    users.length === 0 ?
                                        <tr align="center">
                                            <td colSpan="6">No Users available!</td>

                                        </tr> :
                                            currentUser.map((user) => (
                                            <tr className="col-3" key={user.userId}>
                                                <td>
                                                    <Image src={"https://webstockreview.net/images/clipart-woman-cellphone-19.png"} roundedCircle width="25" height="25" />
                                                    {user.userName}
                                                </td>
                                                <td>{user.password}</td>
                                                <td>{user.role}</td>
                                                
                                                <td>
                                                    <ButtonGroup>
                                                    <Link to={"editUser/"+user.userId} className="btn btn-sm btn-outline-success"><FontAwesomeIcon icon={faEdit} /></Link>{' '}
                                                        {/* <Button size="sm" variant="outline-success"><FontAwesomeIcon icon={faEdit} /></Button> */}
                                                        <Button size="sm" variant="outline-danger" onClick={this.deleteUser.bind(this, user.userId)}><FontAwesomeIcon icon={faTrash} /></Button>
                                                    </ButtonGroup>

                                                </td>

                                            </tr>
                                        ))
                                }
                            </tbody>

                </Table>
                </Card.Body>
                    {/*Pagination code begins here */}
                    <Card.Footer>
                        <div style={{"float":"left"}}>
                                Showing Page {currentPage} of {totalPages}
                        </div>
                        <div style={{"float":"right"}}>
                                <InputGroup size="sm">
                                    <InputGroup.Prepend>
                                        <Button type="button" variant="outline-dark" disabled={currentPage === 1 ? true : false}
                                            onClick={this.firstPage}>
                                        <FontAwesomeIcon icon={faFastBackward} /> First
                                        </Button>
                                        <Button type="button" variant="outline-dark" disabled={currentPage === 1 ? true : false}
                                            onClick={this.prevPage}>
                                        <FontAwesomeIcon icon={faStepBackward} /> Prev
                                        </Button>
                                    </InputGroup.Prepend>
                                    <FormControl style={pageNumCss} className={"bg-info"} name="currentPage" value={currentPage}
                                        onChange={this.changePage}/>
                                    <InputGroup.Append>
                                        <Button type="button" variant="outline-dark" disabled={currentPage === totalPages ? true : false}
                                            onClick={this.nextPage}>
                                        <FontAwesomeIcon icon={faStepForward} /> Next
                                        </Button>
                                        <Button type="button" variant="outline-dark" disabled={currentPage === totalPages ? true : false}
                                            onClick={this.lastPage}>
                                        <FontAwesomeIcon icon={faFastForward} /> Last
                                        </Button>
                                    </InputGroup.Append>
                                </InputGroup>
                        </div>
                    </Card.Footer>

                <br />
                <br />
                <br />
            </Card>
            }
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(UserList);
