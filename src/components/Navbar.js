import { DownOutlined} from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const Navigationbar = () => {
    const homemenu = (
        <Menu
            items={[
                {
                    key: "1",
                    label: <a href="http://localhost:3000/">Home</a>,
                },
                {
                    key: "2",
                    label: <a href="http://localhost:3000/">Home 2</a>,
                },
                {
                    key: "3",
                    label: <a href="http://localhost:3000/">Home 3</a>,
                },
            ]}
        />
    );
    const doctorsmenu = (
        <Menu
            items={[
                {
                    key: "1",
                    label: <a href="http://localhost:3000/">Doctor Dashboard</a>,
                },
                {
                    key: "2",
                    label: <a href="http://localhost:3000/">Appointments </a>,
                },
                {
                    key: "3",
                    label: <a href="http://localhost:3000/">Schedule Timing</a>,
                },
                {
                    key: "4",
                    label: <a href="http://localhost:3000/">Patients List</a>,
                },
                {
                    key: "5",
                    label: <a href="http://localhost:3000/">Patients Profile</a>,
                },
                {
                    key: "6",
                    label: <a href="http://localhost:3000/">Chat</a>,
                },
                {
                    key: "7",
                    label: <a href="http://localhost:3000/">Invoices</a>,
                },
                {
                    key: "8",
                    label: <a href="http://localhost:3000/">Profile Settings</a>,
                },
                {
                    key: "9",
                    label: <a href="http://localhost:3000/">Reviews</a>,
                },
                {
                    key: "10",
                    label: <a href="doctor-signup">Doctor Register</a>,
                },
                {
                    key: "11",
                    label: <a href="http://localhost:3000/">Blog</a>,
                },
            ]}
        />
    );
    const patientsmenu = (
        <Menu
            items={[
                {
                    key: "1",
                    label: <a href="http://localhost:3000/">Doctors</a>,
                    children: [
                        {
                            key: "1-1",
                            label: "Map Grid",
                        },
                        {
                            key: "1-2",
                            label: "Map List",
                        },
                    ],
                },
                {
                    key: "2",
                    label: <a href="http://localhost:3000/">Search Doctor</a>,
                },
                {
                    key: "3",
                    label: <a href="http://localhost:3000/">Doctor Profile</a>,
                },
                {
                    key: "4",
                    label: <a href="http://localhost:3000/">Booking</a>,
                },
                {
                    key: "5",
                    label: <a href="http://localhost:3000/">Checkout</a>,
                },
                {
                    key: "6",
                    label: <a href="http://localhost:3000/">Booking Success</a>,
                },
                {
                    key: "7",
                    label: (
                        <a href="http://localhost:3000/">Patient Dashboard</a>
                    ),
                },
                {
                    key: "8",
                    label: <a href="http://localhost:3000/">Favorites</a>,
                },
                {
                    key: "9",
                    label: <a href="http://localhost:3000/">Chat</a>,
                },
                {
                    key: "10",
                    label: (
                        <a href="http://localhost:3000/">Profile Settings</a>
                    ),
                },
                {
                    key: "11",
                    label: (
                        <a href="http://localhost:3000/">Change Passwords</a>
                    ),
                },
            ]}
        />
    );
    const pharmacymenu = (
        <Menu
            items={[
                {
                    key: "1",
                    label: <a href="http://localhost:3000/">Pharmacy</a>,
                },
                {
                    key: "2",
                    label: <a href="http://localhost:3000/">Pharmacy Details</a>,
                },
                {
                    key: "3",
                    label: <a href="http://localhost:3000/">Pharmacy Search</a>,
                },
                {
                    key: "4",
                    label: <a href="http://localhost:3000/">Product</a>,
                },
                {
                    key: "5",
                    label: <a href="http://localhost:3000/">Product Description</a>,
                },
                {
                    key: "6",
                    label: <a href="http://localhost:3000/">Cart</a>,
                },
                {
                    key: "7",
                    label: <a href="http://localhost:3000/">Product Checkout</a>,
                },
                {
                    key: "8",
                    label: <a href="http://localhost:3000/">Payment Success</a>,
                },
                {
                    key: "9",
                    label: <a href="http://localhost:3000/">Pharmacy Register</a>,
                },
            ]}
        />
    );
    const pagesmenu = (
        <Menu
            items={[
                {
                    key: "1",
                    label: <a href="http://localhost:3000/">Voice Call</a>,
                },
                {
                    key: "2",
                    label: <a href="http://localhost:3000/">Video Call</a>,
                },
                {
                    key: "3",
                    label: <a href="http://localhost:3000/">Search Doctors</a>,
                },
                {
                    key: "4",
                    label: <a href="http://localhost:3000/">Calendar</a>,
                },
                {
                    key: "5",
                    label: <a href="http://localhost:3000/">Components</a>,
                },
                {
                    key: "6",
                    label: <a href="http://localhost:3000/">Invoices</a>,
                    children: [
                        {
                            key: "6-1",
                            label: "Invoices",
                        },
                        {
                            key: "6-2",
                            label: "View Invoice",
                        },
                    ],
                },
                {
                    key: "7",
                    label: <a href="http://localhost:3000/">Starter Page</a>,
                },
                {
                    key: "8",
                    label: <a href="http://localhost:3000/">About Us</a>,
                },
                {
                    key: "9",
                    label: <a href="http://localhost:3000/">Contact Us</a>,
                },
                {
                    key: "10",
                    label: <a href="http://localhost:3000/">Login</a>,
                },
                {
                    key: "11",
                    label: <a href="http://localhost:3000/">Register</a>,
                },
                {
                    key: "12",
                    label: <a href="http://localhost:3000/">Forgot Password</a>,
                },
            ]}
        />
    );
    const blogmenu = (
        <Menu
            items={[
                {
                    key: "1",
                    label: <a href="http://localhost:3000/">Blog List</a>,
                },
                {
                    key: "2",
                    label: <a href="http://localhost:3000/">Blog Grid</a>,
                },
                {
                    key: "3",
                    label: <a href="http://localhost:3000/">Blog Details</a>,
                },
            ]}
        />
    );
    const adminmenu = (
        <Menu
            items={[
                {
                    key: "1",
                    label: <a href="http://localhost:3000/">Admin</a>,
                },
                {
                    key: "2",
                    label: <a href="http://localhost:3000/">Pharmacy Admin</a>,
                },
                
            ]}
        />
    );

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" id="global-navbar">
                <Container>
                    <Navbar.Brand href="#home">LUZIA</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Dropdown overlay={homemenu} className="me-4">
                                <a href="http://localhost:3000/">
                                    <Space>
                                        Home
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                            <Dropdown overlay={doctorsmenu} className="me-4">
                                <a href="http://localhost:3000/">
                                    <Space>
                                        Doctors
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                            <Dropdown overlay={patientsmenu} className="me-4">
                                <a href="http://localhost:3000/">
                                    <Space>
                                        Patients
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                            <Dropdown overlay={pharmacymenu} className="me-4">
                                <a href="http://localhost:3000/">
                                    <Space>
                                        Pharmacy
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                            <Dropdown overlay={pagesmenu} className="me-4">
                                <a href="http://localhost:3000/">
                                    <Space>
                                        Pages
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                            <Dropdown overlay={blogmenu} className="me-4">
                                <a href="http://localhost:3000/">
                                    <Space>
                                        Blog
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                            <Dropdown overlay={adminmenu} className="me-4">
                                <a href="http://localhost:3000/">
                                    <Space>
                                        Admin
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets" className="d-flex">
                                <div className="me-2">
                                    <i class="bi bi-hospital"></i>
                                </div>

                                <div>
                                    <p>Contact</p>
                                    <p>+1 536 565 9043</p>
                                </div>
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button
                                    variant="outline-success"
                                    size="lg"
                                    
                                >
                                    LOGIN / SIGNUP
                                </Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
export default Navigationbar;
