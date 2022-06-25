import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import GlobalLayout from "../components/GlobalLayout";

import { Link } from "react-router-dom";

const Register = () => {
    return (
        <GlobalLayout>
            <div className="d-flex justify-content-center align-items-center doctor-signup-container">
                <Image
                    src="https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
                    fluid
                    rounded
                    className="w-25 me-5"
                    loading="lazy"
                />

                <Form className="doctor-signup-form">
                    <div className="d-flex justify-content-between">
                        <h5>Doctor Register</h5>

                        <Link to="patient-signup">Not a Doctor?</Link>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control
                            type="text"
                            placeholder="Enter your full name"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="text-end">
                        <Form.Text>
                            <Link to="doctor-login">
                                Already have an account?
                            </Link>
                        </Form.Text>
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button
                            className="block signup-btn"
                            
                            type="submit"
                        >
                            Signup
                        </Button>
                    </div>

                    <div className="d-flex my-4 choice">
                        <span className="horizontal-line" /> <span>or</span>{" "}
                        <span className="horizontal-line" />
                    </div>

                    <div className="social-auth d-flex justify-content-between">
                        <div className="facebook-auth d-flex align-items-center justify-content-center py-2">
                            <Image
                                src="facebook.png"
                                alt="facebook-login"
                                fluid
                                rounded
                                className="me-2"
                                loading="lazy"
                            />

                            <span>Login</span>
                        </div>
                        <div className="google-auth d-flex align-items-center justify-content-center py-2">
                            <Image
                                src="google.png"
                                alt="google-login"
                                fluid
                                rounded
                                className="me-2"
                                loading="lazy"
                            />

                            <span>Login</span>
                        </div>
                    </div>
                </Form>
            </div>
        </GlobalLayout>
    );
};
export default Register;
