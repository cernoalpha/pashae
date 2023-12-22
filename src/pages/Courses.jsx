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
  // Temporary data for courses, now with descriptions
  const tempCourses = [
    {
      id: 1,
      name: "Introduction to React",
      subject: "Computer Science",
      gradeLevel: "High School",
      teacherName: "Mr. Smith",
      description: "Learn the basics of React, a popular JavaScript library for building user interfaces.",
    },
    {
      id: 2,
      name: "Algebra II",
      subject: "Mathematics",
      gradeLevel: "High School",
      teacherName: "Mrs. Jones",
      description: "Study advanced algebraic concepts such as polynomials, conic sections, and logarithms.",
    },
    {
      id: 3,
      name: "English Literature",
      subject: "English",
      gradeLevel: "High School",
      teacherName: "Mr. Brown",
      description: "Explore classic and contemporary literature, developing critical thinking and analytical skills.",
    },
    {
      id: 4,
      name: "Biology",
      subject: "Science",
      gradeLevel: "High School",
      teacherName: "Ms. Green",
      description: "Investigate the fundamental principles of life, including cells, genetics, and evolution.",
    },
    {
      id: 5,
      name: "World History",
      subject: "Social Studies",
      gradeLevel: "High School",
      teacherName: "Mr. White",
      description: "Journey through major historical events and civilizations, examining their impact on the present.",
    },
        {
        id: 12,
        name: "Introduction to Vue",
        subject: "Computer Science",
        gradeLevel: "High School",
        teacherName: "Mr. JoeShmo",
        description: "Learn the basics of Vue, a popular JavaScript framework for building user interfaces.",
      },
  ];

  // State to store the list of courses
  const [courses, setCourses] = useState([]);

  // State for search query, filter criteria, and active section
  const [searchQuery, setSearchQuery] = useState("");
  const [filterGradeLevel, setFilterGradeLevel] = useState("");
  const [activeSection, setActiveSection] = useState("");

  // Fetch course data from the server (replace with actual API call)
  useEffect(() => {
    setCourses(tempCourses);
  }, []);

  // Group courses by subject
  const groupedCourses = courses.reduce((acc, course) => {
    const subject = course.subject;
    if (!acc[subject]) {
      acc[subject] = [];
    }
    acc[subject].push(course);
    return acc;
  }, {});

  // Function to handle course enrollment (placeholder)
  const handleEnroll = (course) => {
    alert(`Enrolling in ${course.name}...`);
  };

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
        {Object.keys(groupedCourses).map((subject) => (
          <Grid item xs={12} key={subject}>
            <Typography variant="h5">{subject}</Typography>
            <Grid container spacing={2}>
              {groupedCourses[subject]
                .filter((course) => {
                  return (course.name.toLowerCase().includes(searchQuery.toLowerCase()) || course.id == searchQuery) &&
                    (!filterGradeLevel || course.gradeLevel === filterGradeLevel);
                })
                .length > 0 ? (
                groupedCourses[subject]
                  .filter((course) => {
                    return (course.name.toLowerCase().includes(searchQuery.toLowerCase()) || course.id == searchQuery) &&
                    (!filterGradeLevel || course.gradeLevel === filterGradeLevel);
                  })
                  .map((course) => (
                    <Grid item xs={4} key={course.id}>
                      <CourseListing onMouseEnter={() => setActiveSection(course.id)} onMouseLeave={() => setActiveSection("")}>
                        <Typography variant="h6">{course.name}</Typography>
                        <Typography variant="subtitle1">{course.gradeLevel}</Typography>
                        <Typography variant="subtitle1">{course.teacherName}</Typography>
                        <Grow in={activeSection === course.id} timeout={400}>
                          <Typography variant="body2" sx={{
                            fontStyle: activeSection === course.id ? 'inherit' : 'italic',
                            transition: 'all 0.3s ease-in-out',
                            marginTop: '8px',
                          }} >
                            {course.description}
                          </Typography>
                        </Grow>
                        <Button variant="contained" color="primary" onClick={() => handleEnroll(course)}>
                          Enroll
                        </Button>
                      </CourseListing>
                    </Grid>
                  ))
              ) : (
                <Grid item xs={12}>
            <Typography variant="body1" >
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
