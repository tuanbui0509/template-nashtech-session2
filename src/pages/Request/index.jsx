import React from "react";
import { Table } from "reactstrap";
import { BsCheck } from "@react-icons/all-files/bs/BsCheck";
import { IoCloseSharp } from "@react-icons/all-files/io5/IoCloseSharp";
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
import { AiFillFilter } from "@react-icons/all-files/ai/AiFillFilter";
import { AiFillCalendar } from "@react-icons/all-files/ai/AiFillCalendar";



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
function Request() {
  return (
    <div>
      <h5 className="right-title">Request List</h5>
      <Row from>
        <Col md={2}>
          <InputGroup>
            <Input placeholder="State" />
            <InputGroupAddon addonType="append">
              <InputGroupText className="right__icon"><AiFillFilter /></InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Col>
        <Col md={3}>
          <InputGroup>
            <Input placeholder="Assigned Date" />
            <InputGroupAddon addonType="append">
              <InputGroupText className="right__icon"><AiFillCalendar /></InputGroupText>
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
      </Row>
      <Table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Asset Code</th>
            <th>Asset Name</th>
            <th>Requested by</th>
            <th>Assigned Date</th>
            <th>Accepted by</th>
            <th>Returned Date</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>MO100005</td>
            <td>Monitor </td>
            <td>hungtv1</td>
            <td>15/03/2019</td>
            <td>binhnv</td>
            <td>07/03/2019</td>
            <td>Completed</td>
            <td>
              <span className="icon-nash icon-nash--red">
                <IoCloseSharp />
              </span>
              <span className="icon-nash icon-nash--black">
                <BsCheck />
              </span>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Request;
