import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import questions from "../data/questions";

import Ques from "./Ques";
import ScoreCard from "./ScoreCard";
import WelcomePage from "./WelcomePage";

export default function App() {
  let [answers, updateAnswers] = useState({ 0: { point: 0, checked: false } });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <WelcomePage />,
      children: []
    },
    {
      path: "quiz",
      element: <Ques updateAnswers={updateAnswers} />
    },
    {
      path: "score",
      element: <ScoreCard total={questions.length} answers={answers} />
    }
  ]);

  return (
    <RouterProvider router={router} />
    // <div className="view">
    //   <Ques updateAnswers={updateAnswers} answers={answers} />
    // </div>
  );
}
