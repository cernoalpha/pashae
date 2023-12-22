import React, { useState } from "react";
import { Grid, Paper, Typography, List, ListItem, ListItemText, ListItemButton, Divider, Button, Avatar, TextField, IconButton, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const navigate = useNavigate();

  const quizzes = [
    { title: "Math Quiz", timeLimit: "30 minutes", questions: 10 },
    { title: "Science Quiz", timeLimit: "45 minutes", questions: 15 },
  ];

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ padding: "20px", display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5">Quizzes</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ padding: "20px" }}>
          <List>
            {quizzes.map((quiz) => (
              <ListItem key={quiz.title}>
                <ListItemButton onClick={() => navigate("/quiz")}>
                  <ListItemText primary={quiz.title} secondary={`${quiz.timeLimit} - ${quiz.questions} questions`} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Quiz;
