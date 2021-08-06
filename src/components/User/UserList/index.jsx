import React from "react";
import {
  Col,
  Row,
  Button,
  InputGroupText,
  FormGroup,
  InputGroupAddon,
  Input,
  InputGroup,
} from "reactstrap";
import { Table } from "reactstrap";
import "./UserList.css";
function UserList(props) {
  return (
    <div>
      <h5 className="right-title">User List</h5>
      <Row from>
        <Col md={2}>
          <InputGroup>
            <Input placeholder="State" />
            <InputGroupAddon addonType="append">
              <InputGroupText>@</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Col>
        <Col md={4}>
          <InputGroup>
            <Input placeholder="Search" />
            <InputGroupAddon addonType="append">
              <InputGroupText>@</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Col>
        <Col md={4}>
          <Button color="danger">Create New User</Button>
        </Col>
      </Row>
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
        <tbody>{props.children}</tbody>
      </Table>
    </div>
  );
}

export default UserList;
