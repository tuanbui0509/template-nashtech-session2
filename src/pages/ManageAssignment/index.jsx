import React from "react";
import { Table } from "reactstrap";
import { IoMdCreate } from "@react-icons/all-files/io/IoMdCreate";
import { IoIosCloseCircleOutline } from "@react-icons/all-files/io/IoIosCloseCircleOutline";
import { MdSettingsBackupRestore } from "@react-icons/all-files/md/MdSettingsBackupRestore";
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
function ManageAssignment() {
  return (
    <div classname="Assignment">
      <h5 className="right-title">Assignment List</h5>
      <Row from>
        <Col md={2}>
          <InputGroup>
            <Input placeholder="State" />
            <InputGroupAddon addonType="append">
              <InputGroupText>@</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Col>
        <Col md={3}>
          <InputGroup>
            <Input placeholder="Assigned Date" />
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
        <Col md={3}>
          <Button color="danger">Create New User</Button>
        </Col>
      </Row>
      <Table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Asset Code</th>
            <th>Asset Name</th>
            <th>Assigned to</th>
            <th>Assigned by</th>
            <th>Assigned Date</th>
            <th>State</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>MO100005</td>
            <td>Monitor Dell UltraSharp</td>
            <td>yentth</td>
            <td>tuanha</td>
            <td>15/03/2019</td>
            <td>Accepted</td>
            <td>
              <span className="icon-nash icon-nash--black">
                <IoMdCreate />
              </span>
              <span className="icon-nash icon-nash--red">
                <IoIosCloseCircleOutline />
              </span>
              <span className="icon-nash icon-nash--blue">
                <MdSettingsBackupRestore />
              </span>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default ManageAssignment;
