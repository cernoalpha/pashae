import React, { useState } from "react";
import { Grid, Paper, Typography, List, ListItem, ListItemText, ListItemButton, Divider, Button, Avatar, TextField, IconButton, Menu, MenuItem } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import SupportIcon from "@mui/icons-material/Support";
import LogoutIcon from "@mui/icons-material/Logout";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const welcomeMessage = "Welcome back, John!";
  const upcomingClasses = [
    { date: "March 8, 2023", time: "10:00 AM - 11:00 AM", tutor: "Jane Doe" },
    { date: "March 10, 2023", time: "2:00 PM - 3:00 PM", tutor: "John Smith" },
  ];
  const attendanceRecords = [
    { date: "February 22, 2023", status: "Present" },
    { date: "February 24, 2023", status: "Absent" },
    { date: "February 28, 2023", status: "Present" },
  ];
  const documents = [
    { title: "Math Notes", date: "March 2, 2023" },
    { title: "Science Assignment", date: "March 5, 2023" },
  ];
  const notifications = [
    { title: "New assignment uploaded", date: "March 7, 2023" },
    { title: "Upcoming class reminder", date: "March 8, 2023" },
  ];

  
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ padding: "20px", display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5">{welcomeMessage}</Typography>
          <IconButton onClick={handleClick}>
            <NotificationsIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            {notifications.map((notification) => (
              <MenuItem key={notification.title}>
                <ListItemText primary={notification.title} secondary={notification.date} />
              </MenuItem>
            ))}
          </Menu>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Paper sx={{ padding: "20px" }}>
          <Typography variant="h6">Upcoming Classes</Typography>
          <Divider />
          <List>
            {upcomingClasses.map((upcomingClass) => (
              <ListItem key={upcomingClass.date}>
                <ListItemButton onClick={() => navigate("/class")}>
                  <ListItemText
                    primary={upcomingClass.date}
                    secondary={`${upcomingClass.time} - ${upcomingClass.tutor}`}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Paper sx={{ padding: "20px" }}>
          <Typography variant="h6">Class Schedule</Typography>
          <h3>hello</h3>
          <Button variant="contained">Contained</Button>
          <CalendarTodayIcon sx={{ fontSize: "3rem", color: "#808080" }} />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Paper sx={{ padding: "20px" }}>
          <Typography variant="h6">Attendance Records</Typography>
          <Divider />
          <List>
            {attendanceRecords.map((attendanceRecord) => (
              <ListItem key={attendanceRecord.date}>
                <ListItemText primary={attendanceRecord.date} secondary={attendanceRecord.status} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Paper sx={{ padding: "20px", height: "100%" }}>
          <Typography variant="h6">Documents</Typography>
          <List>
            {documents.map((document) => (
              <ListItem key={document.title}>
                <ListItemButton onClick={() => navigate("/document")}>
                  <ListItemText primary={document.title} secondary={document.date} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Paper sx={{ padding: "20px", height: "100%" }}>
          <Typography variant="h6">Progress Tracker</Typography>
          <BarChartIcon sx={{ fontSize: "3rem", color: "#808080" }} />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Paper sx={{ padding: "20px", height: "100%" }}>
          <Avatar sx={{ width: 60, height: 60, marginRight: "20px" }}>J</Avatar>
          <Typography variant="h6">John Doe</Typography>
          <Button variant="outlined" endIcon={<SettingsIcon />}>
            Settings
          </Button>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Paper sx={{ padding: "20px", height: "100%" }}>
          <Typography variant="h6">Chat</Typography>
          <Divider />
          <TextField
            multiline
            rows={4}
            placeholder="Type your message here..."
            sx={{ width: "100%", marginBottom: "10px" }}
          />
          <Button variant="contained">Send</Button>
        </Paper>
      </Grid>
      <Grid item xs={12} sx={{ padding: "20px", display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body2" color="textSecondary">
          © 2023 All rights reserved.
        </Typography>
        <Button variant="outlined" endIcon={<LogoutIcon />}>
          Logout
        </Button>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
