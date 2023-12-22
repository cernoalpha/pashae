import React, { useState } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  ListGroup,
  Card,
  Form,
  Image,
} from "react-bootstrap";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([
    { title: "New assignment uploaded", date: "March 7, 2023" },
    { title: "Upcoming class reminder", date: "March 8, 2023" },
  ]);

  const upcomingClasses = [
    { date: "March 8, 2023", time: "10:00 AM - 11:00 AM", tutor: "Jane Doe" },
    { date: "March 10, 2023", time: "2:00 PM - 3:00 PM", tutor: "John Smith" },
  ];

  const attendanceRecords = [
    { date: "February 22, 2023", status: "Present" },
    { date: "February 24, 2023", status: "Absent" },
    { date: "February 28, 2023", status: "Present" },
  ];

  const documents = [
    { title: "Math Notes", date: "March 2, 2023" },
    { title: "Science Assignment", date: "March 5, 2023" },
  ];

  const handleLogout = () => {
    // Add your logout logic here
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
           <a class="navbar-brand" href="#">Logo</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item dropdown">
                 <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 Dropdown
                 </a>
                 <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
              </ul>
            </div>
         </nav>
          {/* <Navbar bg="light" expand="lg">
            <Navbar.Brand>Welcome back, John!</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link onClick={() => navigate("/notifications")}>
                  <NotificationsIcon />
                </Nav.Link>
                <NavDropdown title={<MoreVertIcon />} id="basic-nav-dropdown">
                  {notifications.map((notification, index) => (
                    <NavDropdown.Item key={index}>
                      {notification.title} - {notification.date}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar> */}
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} lg={3}>
          <Card style={{ marginTop: "20px" }}>
            <Card.Body>
              <h6>Upcoming Classes</h6>
              {upcomingClasses.map((upcomingClass, index) => (
                <p
                  key={index}
                  onClick={() => navigate("/class")}
                  style={{ cursor: "pointer" }}
                >
                  {upcomingClass.date} - {upcomingClass.tutor}
                </p>
              ))}
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <Card style={{ marginTop: "20px" }}>
            <Card.Body>
              <h6>Class Schedule</h6>
              <h3>hello</h3>
              <Button variant="contained">Contained</Button>
              <CalendarTodayIcon style={{ fontSize: "3rem", color: "#808080" }} />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <Card style={{ marginTop: "20px" }}>
            <Card.Body>
              <h6>Attendance Records</h6>
              {attendanceRecords.map((attendanceRecord, index) => (
                <p key={index}>
                  {attendanceRecord.date} - {attendanceRecord.status}
                </p>
              ))}
            </Card.Body>
          </Card>
        </Col>
        {/* <Col xs={12} md={6} lg={3}>
          <Card style={{ marginTop: "20px" }}>
            <Card.Body>
              <h6>Documents</h6>
              {documents.map((document, index) => (
                <p
                  key={index}
                  onClick={() => navigate("/document")}
                  style={{ cursor: "pointer" }}
                >
                  {document.title} - {document.date}
                </p>
              ))}
            </Card.Body>
          </Card>
        </Col> */}
        {/* settings */}
        <Col xs={12} md={6} lg={3}>
          <Card style={{ marginTop: "20px" }}>
            <Card.Body>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Image
                  src="https://via.placeholder.com/60"
                  roundedCircle
                  style={{ width: 60, height: 60, marginRight: "20px" }}
                />
                <h6>John Doe</h6>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <Col xs={12} md={6} lg={3}>
          <Card style={{ marginTop: "20px" }}>
            <Card.Body>
              <h6>Chat</h6>
              <Form.Group>
                <TextField
                  multiline
                  rows={4}
                  placeholder="Type your message here..."
                  style={{ width: "100%", marginBottom: "10px" }}
                />
              </Form.Group>
              <Button variant="contained">Send</Button>
            </Card.Body>
          </Card>
        </Col> */}
      </Row>
      <Row>
        <Col
          xs={12}
          style={{ padding: "20px", display: "flex", justifyContent: "space-between" }}
        >
          <p>© 2023 All rights reserved.</p>
          <Button variant="outline-dark" onClick={handleLogout}>
            Logout
            <LogoutIcon />
          </Button>
        </Col>
      </Row>
    </Container>
    
  );
};


export default Dashboard;
