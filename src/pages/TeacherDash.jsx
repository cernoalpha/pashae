import React, { useState } from "react";
import "../styles/TeachDash.css";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
  ListGroup,
  Card,
  FormControl,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TeacherDashboard = () => {

    const handleCloseSchedule = () => {
        setShowCalendar(false);
      };


  const backendData = [
    {
      courseName: "React Programming",
      students: [
        { id: 1, name: "Student 1" },
        { id: 2, name: "Student 2" },
        { id: 3, name: "Student 3" },
        { id: 3, name: "Student 9" },
      ],
    },
    {
      courseName: "JavaScript Fundamentals",
      students: [
        { id: 4, name: "Student 4" },
        { id: 5, name: "Student 5" },
        { id: 6, name: "Student 6" },
      ],
    },
    // Add more courses as needed
  ];

  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [newClass, setNewClass] = useState({
    date: "",
    time: "",
    subject: "",
    description: "",
    meetLink: "",
  });
  const [createdClasses, setCreatedClasses] = useState([]);

  const handleCreateClass = () => {
    setShowCalendar(true);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewClass({ ...newClass, [name]: value });
  };

  const handleSaveClass = () => {
    // Check if any required field is empty
    if (
      !selectedDate ||
      !newClass.time ||
      !newClass.subject ||
      !newClass.description ||
      !newClass.meetLink
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    const createdClass = {
      date: selectedDate.toDateString(),
      time: newClass.time,
      subject: newClass.subject,
      description: newClass.description,
      meetLink: newClass.meetLink,
    };

    // Save the new class data
    setCreatedClasses([...createdClasses, createdClass]);

    // Log the information of the saved class to the console
    console.log("Class Information:", createdClass);

    // Close the calendar after saving
    setShowCalendar(false);

    // Reset the form fields
    setNewClass({
      date: "",
      time: "",
      subject: "",
      description: "",
      meetLink: "",
    });
  };

  const handleClassClick = (index) => {
    // Log the information of a particular class to the console
    console.log("Class Information:", createdClasses[index]);
  };

  const [openProfileModal, setOpenProfileModal] = useState(false);

  const handleOpenProfileModal = () => {
    setOpenProfileModal(true);
  };

  const handleCloseProfileModal = () => {
    setOpenProfileModal(false);
  };

  return (
    <>
    <div className="baap">
      {/* Profile Button (Top Right Corner) */}
      <nav className="navbar bg-body-tertiary sticky-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="/tec">
            AppName
          </a>
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

      {/* Teacher's Profile Modal */}
      <Modal show={openProfileModal} onHide={handleCloseProfileModal}>
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

      {/* <Button variant="primary" className="mb-3" onClick={handleCreateClass}>
          Create New Class
        </Button> */}

      <div className="hero">
        <h1>Hello John Doe</h1>
      </div>

      <br />
      <Container className="mt-3">
        <center>
          <h2>COURSES</h2>
          <i class="fa-solid fa-chevron-down"></i>
        </center>
        
        <br />
        <br />
        <br />
        <br />

        <Container className="mt-3">
          {/* Iterate over courses and students */}
          {backendData.map((course, index) => (
            <div key={index} className="course-box">
              <h3>{course.courseName}</h3>
              <ul className="list-group course">
                {course.students.map((student) => (
                  <li
                    key={student.id}
                    className="list-group-item my-1 list-item"
                  >
                    {student.id}
                    {student.name}
                    <div className="button-container">
                      <Button className="btn mx-2 btn-primary"  onClick={handleCreateClass}>Schedule Class</Button>
                      <Button className="btn btn-primary">Assignment</Button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* ... (your existing code) */}
        </Container>

        <div className="schedule">
        {showCalendar && (
          <Card className="mb-3">
            <Card.Header>
                
              <div className="d-flex justify-content-between">
                <h3>Schedule</h3>
                <button className="btn btn-primary" onClick={handleCloseSchedule}>close</button>
              </div>
            </Card.Header>
            <Card.Body>
              
              <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <br />
              <DatePicker
                selected={selectedDate}
                onChange={handleDateSelect}
                className="form-control mb-3"
              />
              </Form.Group>

              {/* New Class Form */}
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Time:</Form.Label>
                  <FormControl
                    type="time"
                    style={{ width: "200px" }}
                    name="time"
                    value={newClass.time}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Subject:</Form.Label>
                  <FormControl
                    type="text"
                    name="subject"
                    value={newClass.subject}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Description:</Form.Label>
                  <FormControl
                    as="textarea"
                    name="description"
                    value={newClass.description}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Google Meet Link:</Form.Label>
                  <FormControl
                    type="text"
                    name="meetLink"
                    value={newClass.meetLink}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Button
                  type="button"
                  onClick={handleSaveClass}
                  variant="success"
                >
                  Save Class
                </Button>
              </Form>
            </Card.Body>
          </Card>
        )}
        </div>

        {/* Display created classes */}
        <div className="created-classes">
        <Row>
          {createdClasses.map((cls, index) => (
            <Col key={index} md={4} className="mb-3">
              <Card
                onClick={() => handleClassClick(index)}
                style={{ cursor: "pointer" }}
              >
                <Card.Body>
                  <Card.Title>{cls.subject}</Card.Title>
                  <Card.Text>{cls.description}</Card.Text>
                  <Card.Text>
                    {cls.date} - {cls.time}
                  </Card.Text>
                  <a
                    href={cls.meetLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Join Class
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        </div>
      </Container>

      </div>
    </>
  );
};

export default TeacherDashboard;
