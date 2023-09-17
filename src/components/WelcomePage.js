import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function WelcomePage() {
  return (
    <div className="welcome-page">
      <div style={{ height: "10rem" }}>
        <TypeAnimation
          sequence={[
            "Welcome!!\n",
            1000,
            "Welcome!!!\nLet's get you score for...\nSustainability Living\n🌟",
            1000
          ]}
          wrapper="span"
          speed={60}
          style={{
            whiteSpace: "pre-line",
            fontSize: "1.8rem",
            display: "block"
          }}
          repeat={0}
        />
      </div>
      <div>
        <Link to={"/quiz"}>
          <Button variant="contained" color="secondary">
            Let's Go!
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default WelcomePage;
