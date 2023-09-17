import React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import RefreshIcon from "@mui/icons-material/Refresh";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red, orange, yellow, lightGreen, green } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    info: yellow,
    secondary: lightGreen,
    error: red,
    success: green,
    warning: orange
  }
});

export default function Points(props) {
  let clicked = props.ans.checked;
  let btnClicked = props.ans.point;

  function handleClick(x) {
    props.handleClick(x, props.id);
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{ "& > :not(style)": { m: 0.4 } }} className="points">
          <Fab
            size="small"
            aria-label="reset"
            onClick={() => {
              handleClick(0);
            }}
          >
            <RefreshIcon />
          </Fab>
          <Fab
            size="small"
            aria-label="1"
            color="error"
            disabled={clicked && 1 !== btnClicked}
            onClick={() => {
              handleClick(1);
            }}
            sx={{ color: "black" }}
          >
            1
          </Fab>
          <Fab
            size="small"
            aria-label="2"
            color="warning"
            disabled={clicked && 2 !== btnClicked}
            onClick={() => {
              handleClick(2);
            }}
          >
            2
          </Fab>
          <Fab
            size="small"
            aria-label="3"
            color="info"
            disabled={clicked && 3 !== btnClicked}
            onClick={() => {
              handleClick(3);
            }}
          >
            3
          </Fab>
          <Fab
            size="small"
            aria-label="4"
            color="secondary"
            disabled={clicked && 4 !== btnClicked}
            onClick={() => {
              handleClick(4);
            }}
          >
            4
          </Fab>
          <Fab
            size="small"
            aria-label="5"
            color="success"
            disabled={clicked && 5 !== btnClicked}
            onClick={() => {
              handleClick(5);
            }}
          >
            5
          </Fab>
        </Box>
      </ThemeProvider>
    </div>
  );
}
