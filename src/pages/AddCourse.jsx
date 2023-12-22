import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const CourseCreationPage = () => {
  const [formData, setFormData] = useState({
    subject: 'Select Subject',
    name: '',
    gradeLevel: '',
    teacherName: '',
    description: '',
    teacherId: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch('http://localhost:3001/addcourse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to create course');
      }

      alert('Course created successfully');
      setFormData({
        subject: 'Select Subject',
        name: '',
        gradeLevel: '',
        teacherName: '',
        description: '',
      });
    } catch (error) {
      console.error('Error creating course:', error);
    }
  };


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const AvailableCoursesPage = () => {
    const [courses, setCourses] = useState([]);
  
    useEffect(() => {
      fetchAvailableCourses();
    }, []);
  
    const fetchAvailableCourses = async () => {
      try {
        const response = await fetch('http://localhost:3001/getallcourses');
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
  
        const data = await response.json();
        setCourses(data.courses);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
  
    return (
      <div>
        <h1>Available Courses</h1>
        <ul>
          {courses.map((course) => (
            <li key={course.id}>
              <strong>{course.name}</strong> - {course.subject}, Grade: {course.gradeLevel}
              <p>{course.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h1>Create a Course</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="subject">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                as="select"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                readOnly
              >
                <option value="">Select Subject</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Business">Business</option>
                <option value="Arts">Arts</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="name">
              <Form.Label>Course Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="gradeLevel"/>
              <Form.Label>Grade Level</Form.Label>
              <Form.Control
                as="select"
                name="gradeLevel"
                value={formData.gradeLevel}
                onChange={handleChange}
                required
              >
                <option value="">Select Grade Level</option>
                <option value="High School">High School</option>
                <option value="Elementary School">Elementary School</option>
                {/* Add more grade levels as needed */}
              </Form.Control>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Create Course
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>

    
  );
};

export default CourseCreationPage;

