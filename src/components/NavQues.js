import React from "react";

function NavQues(props) {
  return (
    <div className="nav-ques">
      {props.questions.map((ques) => {
        let qn = ques.id + 1;

        return (
          <button
            className={props.ans[ques.id]}
            id={"btn" + qn.toString()}
            onClick={() => {
              props.changeQn(qn - 1);
            }}
            key={ques.id}
          >
            {qn}
          </button>
        );
      })}
    </div>
  );
}

export default NavQues;
