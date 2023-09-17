import React, { useState } from "react";
import QuesFooter from "./QuesFooter";
import QuesHeader from "./QuesHeader";
import Points from "./Points";
import questions from "../data/questions";
import NavQues from "./NavQues";
import { Button } from "@mui/material";
import Instructions from "./Instructions";
import Confirm from "./Confirm";

export default function Ques(props) {
  let [qno, updateQno] = useState(0);
  let [quesData, updateQuesData] = useState(questions[qno].ques);
  let [ans, updateAns] = useState({ point: 0, checked: false });
  let [answers, updateAnswers] = useState({ 0: { point: 0, checked: false } });
  let [progress, updateProgress] = useState(0);
  let [navAns, updateNavAns] = useState(
    new Array(questions.length).fill("not-marked")
  );
  let [viewConfirm, setViewConfirm] = useState("none");

  function changeQno(x) {
    if (x >= 0 && x < questions.length) {
      updateQuesData(questions[x].ques);
      if ([x] in answers) {
        updateAns(answers[x]);
      } else {
        updateAns({ point: 0, checked: false });
      }

      updateQno(x);
    }
  }

  function handleClick(x, id) {
    let checked = true;

    if (x === 0) {
      updateNavAns(
        navAns
          .slice(0, id)
          .concat(["not-marked"])
          .concat(navAns.slice(id + 1, -1))
      );
      checked = false;

      if (answers[id].point !== 0) {
        updateProgress(progress - 1);
      }
    } else {
      updateNavAns(
        navAns
          .slice(0, id)
          .concat(["marked"])
          .concat(navAns.slice(id + 1, -1))
      );
    }

    updateAns({ point: x, checked: checked });

    if (progress < questions.length && x !== 0) {
      if (!ans.checked) {
        updateProgress(progress + 1);
      }
    }

    let a = answers;
    updateAnswers({ ...a, [id]: { point: x, checked: checked } });
  }

  return (
    <>
      <Confirm view={[viewConfirm, setViewConfirm]} />
      <div className="view">
        <div className="ques-container">
          <QuesHeader total={questions.length} progress={progress} />
          <NavQues
            cq={qno}
            ans={navAns}
            questions={questions}
            answers={answers}
            changeQn={changeQno}
          />
          <div className="ques">
            <p className="question-line">
              {qno + 1}. {quesData}
            </p>
            <Points id={qno} ans={ans} handleClick={handleClick} />
          </div>
        </div>

        <div>
          <QuesFooter id={qno} changeQn={changeQno} />
          <div style={{ width: "100%", marginTop: "0.5rem", padding: "0rem" }}>
            <Button
              onClick={() => {
                props.updateAnswers(answers);
                setViewConfirm("flex");
              }}
              size="small"
              variant="contained"
              sx={{
                width: "100%",
                backgroundColor: "#0EB29A",
                "&:hover": {
                  backgroundColor: "#57D131"
                }
              }}
            >
              calculate
            </Button>
          </div>
        </div>
      </div>
      <Instructions />
    </>
  );
}
