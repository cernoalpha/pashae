import React, { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
  Button,
  Avatar,
  TextField,
  IconButton,
  Menu,
  MenuItem,
  Checkbox,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";

const assignments = [
  {
    id: 1,
    subject: "Math",
    title: "Assignment 1",
    description: "This is the first assignment.",
    dueDate: "2023-03-08",
    completed: false,
  },
  {
    id: 2,
    subject: "Science",
    title: "Assignment 2",
    description: "This is the second assignment.",
    dueDate: "2023-03-15",
    completed: true,
  },
  {
    id: 3,
    subject: "English",
    title: "Assignment 3",
    description: "This is the third assignment.",
    dueDate: "2023-03-22",
    completed: false,
  },
  {
    id: 4,
    subject: "History",
    title: "Assignment 4",
    description: "This is the fourth assignment.",
    dueDate: "2023-03-29",
    completed: true,
  },
  {
    id: 5,
    subject: "Social Studies",
    title: "Assignment 5",
    description: "This is the fifth assignment.",
    dueDate: "2023-04-05",
    completed: false,
  },
//   {
//     id: 12,
//     subject: "Math",
//     title: "Assignment 13",
//     description: "This is the thirteenth assignment.",
//     dueDate: "2023-03-08",
//     completed: false,
//   },
];

const AssignmentPage = () => {
  const [currentSubject, setCurrentSubject] = useState("All Subjects");
  const subjects = [...new Set(assignments.map((assignment) => assignment.subject))];
  const [filteredAssignments, setFilteredAssignments] = useState(assignments);

  const handleSubjectChange = (event) => {
    setCurrentSubject(event.target.value);
    if (event.target.value === "All Subjects") {
      setFilteredAssignments(assignments);
    } else {
      const filtered = assignments.filter((assignment) => assignment.subject === event.target.value);
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
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">Assignments</Typography>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={3}>
          <FormControl fullWidth>
            <InputLabel id="subject-select-label">Subject</InputLabel>
            <Select labelId="subject-select-label" value={currentSubject} onChange={handleSubjectChange}>
              <MenuItem value="All Subjects">All Subjects</MenuItem>
              {subjects.map((subject) => (
                <MenuItem key={subject} value={subject}>
                  {subject}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Divider />
        </Paper>
      </Grid>
      {filteredAssignments.map((subject) => (
        <Grid item xs={12} key={subject.subject}>
          <Typography variant="h5">{subject.subject}</Typography>
          <Paper elevation={3}>
            <List>
              {assignments
                .filter((assignment) => assignment.subject === subject.subject)
                .map((assignment) => (
                  <ListItem key={assignment.id}>
                    <ListItemText
                      primary={assignment.title}
                      secondary={assignment.description}
                    />
                    <ListItemText align="right">{assignment.dueDate}</ListItemText>
                    <Checkbox checked={assignment.completed} onChange={() => handleComplete(assignment.id)} />
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      startIcon={<FileUploadIcon />}
                      onClick={handleUpload}
                    >
                      Upload
                    </Button>
                  </ListItem>
                ))}
            </List>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default AssignmentPage;

