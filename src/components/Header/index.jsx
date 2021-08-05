import React from 'react';
import { useState } from 'react';
import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Header.css'
const Header = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <div className='header'>

            <Container>

                <Row >
                    <Col xs="6">Home</Col>
                    <Col xs="6" className="header-right">
                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle caret>
                                Binh
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header>Binh</DropdownItem>
                                <DropdownItem>Logout</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                </Row>

            </Container>
        </div>

    );
}

export default Header;