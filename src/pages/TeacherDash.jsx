import React, { useState } from "react";
import {
    Grid,
    Paper,
    Typography,
    Avatar,
    List,
    ListItem,
    ListItemText,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
  } from '@mui/material';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TeacherDashboard = () => {
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
    <Grid container spacing={2}>
      {/* Profile Button (Top Right Corner) */}
      <Grid item xs={12} sx={{ textAlign: 'right', marginTop: 2, marginRight: 2 }}>
        <Button variant="outlined" onClick={handleOpenProfileModal}>
          View Profile
        </Button>
      </Grid>

      {/* Teacher's Profile Modal */}
      <Dialog open={openProfileModal} onClose={handleCloseProfileModal}>
        <DialogTitle>Teacher's Profile</DialogTitle>
        <DialogContent sx={{ textAlign: 'center' }}>
          <Avatar src="teacher-profile-picture.jpg" alt="Teacher" sx={{ width: 100, height: 100, margin: 'auto' }} />
          <Typography variant="h5" sx={{ fontWeight: 'bold', marginTop: 2 }}>
            John Doe
          </Typography>
          <Typography variant="body1">Email ID: john.doe@example.com</Typography>
          <Typography variant="body2">Courses Taken:</Typography>
          <List>
            <ListItem>
              <ListItemText primary="Course 1" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Course 2" />
            </ListItem>
            {/* Add more courses as needed */}
          </List>
          <Typography variant="body2" sx={{ marginTop: 2 }}>
            <Button color="primary">Change Password</Button>
            <Button color="primary" sx={{ marginLeft: 2 }}>
              Sign Out
            </Button>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseProfileModal}>Close</Button>
        </DialogActions>
      </Dialog>
    </Grid>
    <div className="container mt-3">
      <button className="btn btn-primary mb-3" onClick={handleCreateClass}>
        Create New Class
      </button>

      {showCalendar && (
        <div className="card mb-3">
          <div className="card-body">
            <h2 className="card-title">Select a Date</h2>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateSelect}
              className="form-control mb-3"
            />

            {/* New Class Form */}
            <form>
              <div className="mb-3">
                <label className="form-label">Time:</label>
                <input
                  type="time"
                  style={{ width: "200px" }}
                  name="time"
                  value={newClass.time}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Subject:</label>
                <input
                  type="text"
                  name="subject"
                  value={newClass.subject}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Description:</label>
                <textarea
                  name="description"
                  value={newClass.description}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Google Meet Link:</label>
                <input
                  type="text"
                  name="meetLink"
                  value={newClass.meetLink}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>

              <button
                type="button"
                onClick={handleSaveClass}
                className="btn btn-success"
              >
                Save Class
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Display created classes */}
      <div className="row">
        {createdClasses.map((cls, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div
              className="card"
              onClick={() => handleClassClick(index)}
              style={{ cursor: "pointer" }}
            >
              <div className="card-body">
                <h5 className="card-title">{cls.subject}</h5>
                <p className="card-text">{cls.description}</p>
                <p className="card-text">
                  {cls.date} - {cls.time}
                </p>
                <a
                  href={cls.meetLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Join Class
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default TeacherDashboard;
