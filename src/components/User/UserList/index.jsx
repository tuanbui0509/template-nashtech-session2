import React from 'react'

import { Table } from 'reactstrap';
function UserList(props) {
    return (
        <div>
            <h5 className="right-title">User List</h5>
            <Table>
                <thead>
                    <tr>
                        <th>Staff Code</th>
                        <th>Full Name</th>
                        <th>Username</th>
                        <th>Joined Date</th>
                        <th>Type</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                   {props.children}
                </tbody>
            </Table>
        </div>

    )
}

export default UserList
