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
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import FileUploadIcon from "@mui/icons-material/FileUpload";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    gap: "2rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "2rem",
    width: "100%",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
  },
  description: {
    fontSize: "1.5rem",
  },
  dueDate: {
    fontSize: "1.5rem",
  },
  studentsList: {
    width: "100%",
    maxWidth: "600px",
  },
  studentItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem",
    gap: "1rem",
  },
  studentInfo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "1rem",
  },
  studentName: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  studentSubmittedFile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "1rem",
  },
  submitButton: {
    width: "100%",
    maxWidth: "600px",
  },
};

const AssignmentSettings = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [students, setStudents] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleAddStudent = () => {
    setAnchorEl(null);
    setSelectedStudents([...selectedStudents, students[0]]);
  };

  const handleRemoveStudent = (student) => {
    setSelectedStudents(selectedStudents.filter((s) => s !== student));
  };

  const handleSendAssignment = () => {
    // Send the assignment to the selected students
    const assignment = {
      id: 1,
      title,
      description,
      dueDate,
      completed: false,
    };

    // Create an assignment object for each selected student
    const studentAssignments = selectedStudents.map((student) => ({
      assignmentId: assignment.id,
      studentId: student.id,
      submittedFile: null,
      completed: false,
    }));

    // Send the assignment and student assignments to the server
  };

  return (
    <Grid container spacing={2} sx={styles.container}>
      <Grid item xs={12}>
        <Paper elevation={3} sx={styles.form}>
          <Typography sx={styles.title}>Create Assignment</Typography>
          <TextField
            label="Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="Description"
            variant="outlined"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            label="Due Date"
            variant="outlined"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={(e) => setAnchorEl(e.currentTarget)}
          >
            Add Student
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(null)}
          >
            {students.map((student) => (
              <MenuItem key={student} onClick={handleAddStudent}>
                {student}
              </MenuItem>
            ))}
          </Menu>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={3} sx={styles.studentsList}>
          <Typography sx={styles.title}>Students</Typography>
          {selectedStudents.map((student) => (
            <ListItem key={student} sx={styles.studentItem}>
              <ListItemButton>
                <Avatar sx={styles.avatar}>
                  <PersonIcon />
                </Avatar>
                <ListItemText primary={student} sx={styles.studentName} />
              </ListItemButton>
              <div sx={styles.studentSubmittedFile}>
                <FileUploadIcon />
                <Typography>Submitted File</Typography>
              </div>
              <Checkbox />
            </ListItem>
          ))}
          <Divider />
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            sx={styles.submitButton}
            onClick={handleSendAssignment}
          >
            Send Assignment
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AssignmentSettings;
