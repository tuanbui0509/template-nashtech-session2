import React from "react";
import { Table } from "reactstrap";
import { IoMdCreate } from "@react-icons/all-files/io/IoMdCreate";
import { IoIosCloseCircleOutline } from "@react-icons/all-files/io/IoIosCloseCircleOutline";
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
import { AiFillFilter } from "@react-icons/all-files/ai/AiFillFilter";
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
function ManageAsset() {
  return (
    <div>
      <h5 className="right-title">Asset List</h5>
      <Row from>
        <Col md={2}>
          <InputGroup>
            <Input placeholder="State" />
            <InputGroupAddon addonType="append">
            <InputGroupText className="right__icon"><AiFillFilter /></InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Col>
        <Col md={2}>
          <InputGroup>
            <Input placeholder="Category" />
            <InputGroupAddon addonType="append">
            <InputGroupText className="right__icon"><AiFillFilter /></InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Col>
        <Col md={4}>
          <InputGroup>
            <Input placeholder="Search" />
            <InputGroupAddon addonType="append">
            <InputGroupText className="right__icon"><AiOutlineSearch /></InputGroupText>
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
            <th>Asset Code</th>
            <th>Asset Name</th>
            <th>Category</th>
            <th>State</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>MO100005</td>
            <td>Monitor Dell UltraSharp</td>
            <td>Monitor</td>
            <td>Available</td>
            <td>
              <span className="icon-nash icon-nash--black">
                <IoMdCreate />
              </span>
              <span className="icon-nash icon-nash--red">
                <IoIosCloseCircleOutline />
              </span>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default ManageAsset;
