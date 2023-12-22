import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  FormControl,
  InputGroup,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CourseListing = ({ course, onMouseEnter, onMouseLeave, isActive, handleEnroll, enrolledCourses }) => (
  <Card
    style={{ margin: "10px", padding: "10px" }}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <Card.Title>{course.name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{course.gradeLevel}</Card.Subtitle>
    <Card.Subtitle className="mb-2 text-muted">{course.teacherName}</Card.Subtitle>
    <Card.Text style={{ marginTop: "8px", fontStyle: isActive ? "inherit" : "italic", transition: "all 0.3s ease-in-out" }}>
      {course.description}
    </Card.Text>
    {enrolledCourses.includes(course.id) ? (
      <Button variant="contained" disabled>
        Enrolled
      </Button>
    ) : (
      <Button variant="contained" color="primary" onClick={() => handleEnroll(course)}>
        Enroll
      </Button>
    )}
  </Card>
);

const CoursesPage = () => {
  // Temporary data structures for courses and enrolled courses (replace with actual API calls)
  const tempCourses = {
    "Computer Science": [
      {
        id: 1,
        name: "Introduction to React",
        gradeLevel: "High School",
        teacherName: "Mr. Smith",
        description: "Learn the basics of React, a popular JavaScript library for building user interfaces.",
      },
      {
        id: 12,
        name: "Introduction to Vue",
        gradeLevel: "High School",
        teacherName: "Mr. JoeShmo",
        description: "Learn the basics of Vue, a popular JavaScript framework for building user interfaces.",
      },
      {
        id: 14,
        name: "Introduction to Next",
        gradeLevel: "High School",
        teacherName: "Mr. JoeShmo",
        description: "Learn the basics of Vue, a popular JavaScript framework for building user interfaces.",
      },
    ],
    "Mathematics": [
      {
        id: 2,
        name: "Algebra II",
        gradeLevel: "High School",
        teacherName: "Mrs. Jones",
        description: "Study advanced algebraic concepts such as polynomials, conic sections, and logarithms.",
      },
    ],
    "English": [
      {
        id: 3,
        name: "English Literature",
        gradeLevel: "High School",
        teacherName: "Mr. Brown",
        description: "Explore classic and contemporary literature, developing critical thinking and analytical skills.",
      },
    ],
    "Science": [
      {
        id: 4,
        name: "Biology",
        gradeLevel: "High School",
        teacherName: "Ms. Green",
        description: "Investigate the fundamental principles of life, including cells, genetics, and evolution.",
      },
    ],
    "Social Studies": [
      {
        id: 5,
        name: "World History",
        gradeLevel: "High School",
        teacherName: "Mr. White",
        description: "Journey through major historical events and civilizations, examining their impact on the present.",
      },
    ],
  };

  const tempEnrolledCourses = [1, 3];

  // State variables
  const [courses, setCourses] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [filterGradeLevel, setFilterGradeLevel] = useState("");
  const [activeSection, setActiveSection] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState(tempEnrolledCourses);

  // Group courses by subject
  const groupedCourses = Object.keys(courses).reduce((acc, subject) => {
    acc[subject] = courses[subject].map((course) => course);
    return acc;
  }, {});

  // Filter courses
  const filteredCourses = Object.keys(groupedCourses).reduce((acc, subject) => {
    acc[subject] = groupedCourses[subject]
    .filter((course) => {
      return (course.name.toLowerCase().includes(searchQuery.toLowerCase()) || course.id == searchQuery) &&
      (!filterGradeLevel || course.gradeLevel === filterGradeLevel);
    });
    return acc;
  }, {});

  // Handle course enrollment
  const handleEnroll = (course) => {
    // Check if the course is already enrolled
    if (enrolledCourses.includes(course.id)) {
      alert(`You are already enrolled in ${course.name}.`);
      return;
    }
    alert(`Enrolling in ${course.name}...`);

    // Add the course ID to the enrolledCourses state
    setEnrolledCourses([...enrolledCourses, course.id]);
  };

  useEffect(() => {
    setCourses(tempCourses);
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h4>Courses</h4>
        </Col>
        <Col xs={12}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search courses or ID"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <InputGroup.Text id="basic-addon1">🔍</InputGroup.Text>
          </InputGroup>
        </Col>
        <Col xs={12}>
          <Form.Select
            aria-label="Filter by Grade Level"
            onChange={(e) => setFilterGradeLevel(e.target.value)}
          >
            <option value="">All Grade Levels</option>
            <option value="Elementary School">Elementary School</option>
            <option value="Middle School">Middle School</option>
            <option value="High School">High School</option>
          </Form.Select>
        </Col>
        {Object.keys(filteredCourses).map((subject) => (
          <Col xs={12} key={subject}>
            <h5>{subject}</h5>
            <Row xs={4}>
              {filteredCourses[subject].length > 0 ? (
                filteredCourses[subject].map((course) => (
                  <Col key={course.id}>
                    <CourseListing
                      course={course}
                      onMouseEnter={() => setActiveSection(course.id)}
                      onMouseLeave={() => setActiveSection("")}
                      isActive={activeSection === course.id}
                      handleEnroll={handleEnroll}
                      enrolledCourses={enrolledCourses}
                    />
                  </Col>
                ))
              ) : (
                <Col xs={12}>
                  <p>No results found</p>
                </Col>
              )}
            </Row>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CoursesPage;
