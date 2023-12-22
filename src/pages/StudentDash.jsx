import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Modal,
  Card,
  Image,
} from "react-bootstrap";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

import { blue } from "@mui/material/colors";



const Dashboard = () => {
  const navigate = useNavigate();

  // const [notifications, setNotifications] = useState([
  //   { title: "New assignment uploaded", date: "March 7, 2023" },
  //   { title: "Upcoming class reminder", date: "March 8, 2023" },
  // ]);
  const [upcomingClasses, setupcomingClasses]= useState([{date: "No data yet", time: "", tutor: ""}])

  const [attendanceRecords, setattendanceRecords] = useState([{ date: "No record Yet", status: "-" }])


  const documents = [
    { title: "Math Notes", date: "March 2, 2023" },
    { title: "Science Assignment", date: "March 5, 2023" },
  ];

  const handleLogout = () => {
    // Add your logout logic here
  };

  useEffect(() => {

    fetchSchedule();
    fetchStudentData();

  }, [])

  const fetchStudentData = async () =>{
    try {
      const response = await fetch('http://localhost:3001/studentData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({ uid }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data.Assignments)
      setattendanceRecords(data.Attendance)
    } catch (error) {
      console.error('Error fetching schedule:', error);
    }
  }

  const fetchSchedule = async () => {
    try {
      const response = await fetch('http://localhost:3001/studentSchedule', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({ uid }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setupcomingClasses(data)
    } catch (error) {
      console.error('Error fetching schedule:', error);
    }
  };
  const [openProfileModal, setOpenProfileModal] = useState(false);

  const handleOpenProfileModal = () => {
    setOpenProfileModal(true);
  };

  const handleCloseProfileModal = () => {
    setOpenProfileModal(false);
  };

  return (
    <Container fluid>
      
        <nav class="navbar navbar-light bg-light justify-content-between" style={{padding: "20px"}}>
        <div className="container">
          <a class="navbar-brand" style={{ fontSize:"20px"}}>App Name</a>
         
           <form className="d-flex ml-auto" style={{fontSize:"15px"}} >
            <a className="nav-link" href="http://localhost:5173/" >Home<span class="sr-only">(current)</span></a>&nbsp;&nbsp;&nbsp;
            <a className="nav-link" href="http://localhost:5173/cor">Course</a>&nbsp;&nbsp;&nbsp;
            <a className="nav-link" href="http://localhost:5173/assignment">Assignment</a>&nbsp;&nbsp;&nbsp;
           </form>
         </div>
    
    
          <div class="con">
            <form class="d-flex" role="search">
              <div className="d-flex">
                <img
                   src="/Assets/erwin.jpg" // Replace with the actual path to the teacher's image
                  alt="Teacher"
                  className="img-fluid rounded-circle"
                   style={{ width: "40px", height: "40px", cursor: "pointer" }}
                  onClick={handleOpenProfileModal}
                />
             </div>
           </form>
          </div>
  
        </nav>
       <Modal show={openProfileModal} onHide={handleCloseProfileModal} >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="text-center">
        
          <img
            src="/Assets/erwin.jpg"
            alt="Teacher"
            className="img-fluid rounded-circle"
            style={{ width: "100px", height: "100px", margin: "auto" }}
          />
          <h5 className="font-weight-bold mt-2">John Doe</h5>
          <p>john.doe@example.com</p>

          <div className="mt-2">
            <Button variant="primary" className="mr-2 mx-2">
              Reset Password
            </Button>
            <Button variant="danger-outline" className="btn btn-outline-danger">
              Sign Out
            </Button>
          </div>
          </Modal.Body>
       </Modal>

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
        
      <Row style={{paddingLeft: "20px",paddingRight:"20px"}}>
        <Col xs={12} md={6} lg={8}>
          <Card style={{ marginTop: "30px" }}>
            <Card.Body>
              <h4 style={{color: blue}}>Upcoming Classes</h4>
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
        {/* <Col xs={12} md={6} lg={3}>
          <Card style={{ marginTop: "20px" }}>
            <Card.Body>
              <h6>Class Schedule</h6>
              <h3>hello</h3>
              <Button variant="contained">Contained</Button>
              <CalendarTodayIcon style={{ fontSize: "3rem", color: "#808080" }} />
            </Card.Body>
          </Card>
        </Col> */}
        <Col xs={12} md={6} lg={4}>
          <Card style={{ marginTop: "30px" }}>
            <Card.Body>
              <h4>Attendance Records</h4>
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
      </Row>
      <Row style={{ marginTop: "30px", padding:"20px"} }><h4>Selected Courses</h4></Row>
      <div class="card-deck row" style={{padding:"20px"}}>
  <div class="card col-lg-3 mx-5 text-center">
    <img class="card-img-top" src="..." alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
    </div>
   
  </div>
  <div class="card col-lg-3 mx-5 text-center">
    <img class="card-img-top" src="..." alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
    </div>
    
  </div>
  <div class="card col-lg-3 mx-5 text-center">
    <img class="card-img-top" src="..." alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
    
  </div>
</div></div>

      <Row style={{minHeight: "75vh", display: "flex", flexDirection: "column" }}>
        <Col
          xs={12}
          style={{ padding: "20px", display: "flex", justifyContent: "space-between" ,marginTop: "auto"}}
        >
          <p>© 2023 All rights reserved.</p>
        </Col>
      </Row>
      
    </Container>
    
  );

    
};



export default Dashboard;
