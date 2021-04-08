import { faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import {Card,Table} from 'react-bootstrap';

export default class UserList extends Component{
    render () {
        return(
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
                        <tr align="center">
                            <td colSpan="4">No Users Available</td>
                        </tr>
                    </tbody>
                </Table>
                </Card.Body>
            </Card>
        );
    }
}
