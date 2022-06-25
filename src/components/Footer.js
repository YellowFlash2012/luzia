
import { RiDribbbleFill, RiFacebookFill, RiInstagramFill, RiInstagramLine, RiLinkedinFill, RiTwitterFill } from "react-icons/ri";
import { MdDoubleArrow } from "react-icons/md"
import { MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill, BsEnvelopeFill } from "react-icons/bs";
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="container zone-one d-flex py-5">
                <div className="branding me-5">
                    <h5>Luzia</h5>
                    <p>
                        orem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>

                    <div className="social-icons">
                        <RiFacebookFill className="react-icons" />
                        <RiTwitterFill className="react-icons" />
                        <RiLinkedinFill className="react-icons" />
                        <RiInstagramLine className="react-icons" />
                        <RiDribbbleFill className="react-icons" />
                    </div>
                </div>

                <div className="footer-menu d-flex justify-content-between">
                    <div className="menu-one">
                        <h5>For Patients</h5>
                        <ul>
                            <li>
                                <a href="#">
                                    <MdDoubleArrow className="arrow-icon" />
                                    <span>Search Doctors</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <MdDoubleArrow className="arrow-icon" />
                                    <span>Login</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <MdDoubleArrow className="arrow-icon" />
                                    <span>Register</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <MdDoubleArrow className="arrow-icon" />
                                    <span>Booking</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <MdDoubleArrow className="arrow-icon" />
                                    <span>Patient Dashboard</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="menu-two">
                        <h5>For Doctors</h5>
                        <ul>
                            <li>
                                <a href="#">
                                    <MdDoubleArrow className="arrow-icon" />
                                    <span>Appointments</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <MdDoubleArrow className="arrow-icon" />
                                    <span>Chat</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <MdDoubleArrow className="arrow-icon" />
                                    <span>Login</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <MdDoubleArrow className="arrow-icon" />
                                    <span>Register</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <MdDoubleArrow className="arrow-icon" />
                                    <span>Doctor Dashboard</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="menu-three">
                        <h5>For Patients</h5>

                        <p>
                            <MdLocationOn className="icon" />
                            3556 Beech Street, San <br /> Francisco, <br />{" "}
                            California, CA 94108
                        </p>

                        <p>
                            <BsFillTelephoneFill
                                className="icon"
                                color="#fff"
                            />
                            +1 315 369 5943
                        </p>

                        <p>
                            <BsEnvelopeFill
                                color="#fff"
                                className="icon"
                            />
                            doccure@example.com
                        </p>
                    </div>
                </div>
            </div>

            <div className="container zone-two d-flex justify-content-between align-items-center">
                <p>&copy; Copyright 2022 Luzia - All rights reserved</p>
                <div className="d-flex">
                    <a className="me-2" href="#">
                        Terms and Conditions
                    </a>{" "}
                    |
                    <a className="ms-2" href="#">
                        Policy
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Footer;
