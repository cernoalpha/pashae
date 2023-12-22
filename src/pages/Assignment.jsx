import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  ListGroup,
  Row,
  Col,
} from "react-bootstrap";
import { FileEarmarkArrowUp } from "react-bootstrap-icons";

const assignments = [
  {
    subject: "Math",
    assignments: [
      {
        id: 1,
        title: "Assignment 1",
        description: "This is the first assignment.",
        dueDate: "2023-03-08",
        completed: false,
      },
      {
        id: 12,
        title: "Assignment 13",
        description: "This is the thirteenth assignment.",
        dueDate: "2023-03-08",
        completed: false,
      },
      {
        id: 12,
        title: "Assignment 15",
        description: "This is the thirteenth assignment.",
        dueDate: "2023-03-08",
        completed: false,
      },
    ],
  },
  {
    subject: "Science",
    assignments: [
      {
        id: 2,
        title: "Assignment 2",
        description: "This is the second assignment.",
        dueDate: "2023-03-15",
        completed: true,
      },
    ],
  },
  {
    subject: "English",
    assignments: [
      {
        id: 3,
        title: "Assignment 3",
        description: "This is the third assignment.",
        dueDate: "2023-03-22",
        completed: false,
      },
    ],
  },
  {
    subject: "History",
    assignments: [
      {
        id: 4,
        title: "Assignment 4",
        description: "This is the fourth assignment.",
        dueDate: "2023-03-29",
        completed: true,
      },
    ],
  },
  {
    subject: "Social Studies",
    assignments: [
      {
        id: 5,
        title: "Assignment 5",
        description: "This is the fifth assignment.",
        dueDate: "2023-04-05",
        completed: false,
      },
    ],
  },
];

const subjects = [...new Set(assignments.map((assignment) => assignment.subject))];

const AssignmentPage = () => {
  const [currentSubject, setCurrentSubject] = useState("All Subjects");
  const [filteredAssignments, setFilteredAssignments] = useState(assignments);

  const handleSubjectChange = (event) => {
    setCurrentSubject(event.target.value);
    if (event.target.value === "All Subjects") {
      setFilteredAssignments(assignments);
    } else {
      const filtered = assignments.filter(
        (assignment) => assignment.subject === event.target.value
      );
      setFilteredAssignments(filtered);
    }
  };

  const handleUpload = (e) => {
    // Handle the file upload logic here.
  };

  const handleComplete = (assignmentId) => {
    // Handle the logic for marking an assignment as complete.
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <h4>Assignments</h4>
        </Col>
        <Col xs={12}>
          <Form>
            <Form.Group controlId="subjectSelect">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                as="select"
                value={currentSubject}
                onChange={handleSubjectChange}
              >
                <option value="All Subjects">All Subjects</option>
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      {filteredAssignments.map((subject) => (
        <Row key={subject.subject}>
          <Col xs={12}>
            <h5>{subject.subject}</h5>
            <ListGroup>
              {subject.assignments.map((assignment) => (
                <ListGroup.Item key={assignment.id}>
                  <Row>
                    <Col>
                      <div>
                        <strong>{assignment.title}</strong>
                        <p>{assignment.description}</p>
                      </div>
                    </Col>
                    <Col className="text-right">
                      <p>{assignment.dueDate}</p>
                      <Form.Check
                        type="checkbox"
                        checked={assignment.completed}
                        onChange={() => handleComplete(assignment.id)}
                      />
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={handleUpload}
                      >
                        <FileEarmarkArrowUp /> Upload
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default AssignmentPage;
