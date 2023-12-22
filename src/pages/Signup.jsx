import React, { useState } from "react";
import styled from "styled-components";
import * as Components from "../components/Components";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function App() {
  const [teacherData, setTeacherData] = useState({
    email: "",
    name: "",
    password: "",
  });

  const [studentData, setStudentData] = useState({
    email: "",
    parentEmail: "",
    phone: "",
    password: "",
  });

  const handleTeacherChange = (e) => {
    const { name, value } = e.target;
    setTeacherData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleStudentChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [signIn, toggle] = React.useState(true);
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-start">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/cc">
              My courses
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <center>
        <Components.Container>
          <Components.SignUpContainer signinIn={signIn}>
            <Components.Form>
              <Components.Title>Teacher</Components.Title>
              <Components.Input
                required
                type="email"
                placeholder="email"
                onChange={handleTeacherChange}
                value={teacherData.email}
              />
              <Components.Input
                required
                type="text"
                placeholder="Name"
                onChange={handleTeacherChange}
                value={teacherData.name}
              />
              <Components.Input
                type="password"
                placeholder="Password"
                onChange={handleTeacherChange}
                value={teacherData.password}
              />

              <br />

              <Components.Button style={{ cursor: "pointer" }}>
                Sign Up
              </Components.Button>
            </Components.Form>
          </Components.SignUpContainer>

          <Components.SignInContainer signinIn={signIn}>
            <Components.Form>
              <Components.Title>Student</Components.Title>
              <Components.Input
                type="email"
                placeholder="email"
                value={studentData.email}
                onChange={handleStudentChange}
              />
              <Components.Input
                type="email"
                placeholder="Parent's Email"
                value={studentData.parentEmail}
                onChange={handleStudentChange}
              />
              <Components.Input
                type="tel"
                pattern="[0-9]{10}"
                placeholder="Phone"
                value={studentData.phone}
                onChange={handleStudentChange}
                maxLength="10"
              />
              <Components.Input
                type="password"
                placeholder="Password"
                value={studentData.password}
                onChange={handleStudentChange}
              />
              <br />
              <a href="/">
                <Components.Button style={{ cursor: "pointer" }}>
                  Sigin Up
                </Components.Button>
              </a>
            </Components.Form>
          </Components.SignInContainer>

          <Components.OverlayContainer signinIn={signIn}>
            <Components.Overlay signinIn={signIn}>
              <Components.LeftOverlayPanel signinIn={signIn}>
                <Components.Title>For Students</Components.Title>
                <Components.Paragraph>
                  Students Sign Up here
                </Components.Paragraph>
                <Components.GhostButton
                  onClick={() => toggle(true)}
                  style={{ cursor: "pointer" }}
                >
                  Sign Up
                </Components.GhostButton>
              </Components.LeftOverlayPanel>

              <Components.RightOverlayPanel signinIn={signIn}>
                <Components.Title>For Teachers</Components.Title>
                <Components.Paragraph>
                  Teachers Sign up here
                </Components.Paragraph>
                <Components.GhostButton
                  onClick={() => toggle(false)}
                  style={{ cursor: "pointer" }}
                >
                  Sign Up
                </Components.GhostButton>
              </Components.RightOverlayPanel>
            </Components.Overlay>
          </Components.OverlayContainer>
        </Components.Container>
      </center>
    </>
  );
}

export default App;
