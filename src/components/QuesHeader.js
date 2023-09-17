import React from "react";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800]
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8"
  }
}));

export default function QuesHeader(props) {
  return (
    <div className="ques-header">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ color: "#406661", fontWeight: "600" }}> SRI </p>
        <p style={{ color: "#F5F5F5", fontWeight: "600" }}>
          {props.progress} / {props.total}
        </p>
      </div>
      <BorderLinearProgress
        variant="determinate"
        value={(props.progress / props.total) * 100}
        sx={{ color: "rgba(7, 251, 101, 1)", marginBottom: "0.5rem" }}
        size="2rem"
      />
    </div>
  );
}
