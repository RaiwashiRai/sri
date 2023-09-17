import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Share from "./Share.js";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red, orange, yellow, lightGreen, green } from "@mui/material/colors";
import messages from "../data/messsages.js";

const theme = createTheme({
  palette: {
    info: yellow,
    secondary: lightGreen,
    error: red,
    success: green,
    warning: orange
  }
});

function CircularProgressWithLabel(props) {
  let color = "secondary";

  if (props.value <= 35) {
    color = "error";
  } else if (props.value <= 70) {
    color = "info";
  } else {
    color = "success";
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          variant="determinate"
          color={color}
          size="5rem"
          value={props.value}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <p>{props.value}%</p>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function ScoreCard(props) {
  let score = 0;
  let message = "";

  Object.values(props.answers).forEach((p) => {
    score = score + p.point;
  });

  let sri = ((score * 100) / (props.total * 5)).toFixed(0);

  if (sri <= 35) {
    message = messages[0];
  } else if (sri <= 70) {
    message = messages[1];
  } else {
    message = messages[2];
  }

  return (
    <div className="view-score-card">
      <div className="score-card-element sce1">
        <div>
          <h4>Your Score:</h4>
          <h4>
            {score}/{props.total * 5}
          </h4>
        </div>
      </div>
      <div className="score-card-element sce2">
        <CircularProgressWithLabel value={sri} />
      </div>
      <div className="score-card-element sce3">
        <p style={{ padding: "1rem" }}>{message}</p>
      </div>
      <Share />
    </div>
  );
}
