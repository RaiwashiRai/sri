import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Confirm(props) {
  return (
    <div className="view-confirm" style={{ display: props.view[0] }}>
      <div className="confirm-box">
        <div>
          <p>Are you sure?</p>
        </div>
        <div style={{ display: "flex", justifyContent: "right" }}>
          <Button
            size="small"
            variant="contained"
            color="inherit"
            onClick={() => {
              props.view[1]("none");
            }}
          >
            No
          </Button>
          <Link to={"/score"}>
            <Button
              size="small"
              variant="contained"
              color="error"
              sx={{ marginLeft: "0.5rem" }}
            >
              Yes
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
