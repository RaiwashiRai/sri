import React from "react";

export default function Instructions() {
  const currentYear = new Date();

  return (
    <div className="view-instructions">
      <p>Note:</p>
      <ul>
        <li>
          <p style={{ color: "green" }}>
            5/5 - if you are already practicing the recommendation.
          </p>
        </li>
        <li>
          <p style={{ color: "orange" }}>
            3/5 - you are not practicing right now but strongly commit to do so
            in {currentYear.getFullYear()}.
          </p>
        </li>
        <li>
          <p style={{ color: "red" }}>
            2/5 - if you cannot do due to valid reasons but will make efforts to
            influence someone else to do so.
          </p>
        </li>
      </ul>
    </div>
  );
}
