import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  InputAdornment,
  MenuItem,
  Button,
  Grow,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const CourseListing = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  margin: theme.spacing(2),
  display: "flex",
  alignItems: "center",
}));

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

  // Handle course enrollment (placeholder)
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

  // Fetch course data from the server (replace with actual API call)
  useEffect(() => {
    setCourses(tempCourses);
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">Courses</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Search courses or ID"
            variant="outlined"
            InputProps={{
              startAdornment: <InputAdornment position="start">🔍</InputAdornment>,
            }}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            select
            label="Filter by Grade Level"
            variant="outlined"
            value={filterGradeLevel}
            onChange={(e) => setFilterGradeLevel(e.target.value)}
          >
            <MenuItem value="">All Grade Levels</MenuItem>
            <MenuItem value="Elementary School">Elementary School</MenuItem>
            <MenuItem value="Middle School">Middle School</MenuItem>
            <MenuItem value="High School">High School</MenuItem>
          </TextField>
        </Grid>
        {Object.keys(filteredCourses).map((subject) => (
          <Grid item xs={12} key={subject}>
            <Typography variant="h5">{subject}</Typography>
            <Grid container spacing={2}>
              {filteredCourses[subject].length > 0 ? (
                filteredCourses[subject].map((course) => (
                  <Grid item xs={4} key={course.id}>
                    <CourseListing onMouseEnter={() => setActiveSection(course.id)} onMouseLeave={() => setActiveSection("")}>
                      <Typography variant="h6">{course.name}</Typography>
                      <Typography variant="subtitle1">{course.gradeLevel}</Typography>
                      <Typography variant="subtitle1">{course.teacherName}</Typography>
                      <Grow in={activeSection === course.id} timeout={400}>
                        <Typography variant="body2"  sx={{
                            fontStyle: activeSection === course.id ? 'inherit' : 'italic',
                            transition: 'all 0.3s ease-in-out',
                            marginTop: '8px',
                          }}>
                          {course.description}
                        </Typography>
                      </Grow>
                      {enrolledCourses.includes(course.id) ? (
                        <Button variant="contained" disabled>
                          Enrolled
                        </Button>
                      ) : (
                        <Button variant="contained" color="primary" onClick={() => handleEnroll(course)}>
                          Enroll
                        </Button>
                      )}
                    </CourseListing>
                  </Grid>
                ))
              ) : (
                <Grid item xs={12}>
          <Typography variant="body1">
                    No results found
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CoursesPage;
