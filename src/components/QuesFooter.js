import React from "react";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    success: { main: green.A400 }
  }
});

export default function QuesFooter(props) {
  return (
    <ThemeProvider theme={theme}>
      <div className="ques-footer">
        <Button
          size="small"
          color="success"
          onClick={() => {
            props.changeQn(props.id - 1);
          }}
        >
          <ArrowBackIcon />
        </Button>
        <Button
          size="small"
          color="success"
          onClick={() => {
            props.changeQn(props.id + 1);
          }}
        >
          <ArrowForwardIcon />
        </Button>
      </div>
    </ThemeProvider>
  );
}
