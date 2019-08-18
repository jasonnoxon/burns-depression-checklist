import React from "react";
import Question from "./Question";

const QuestionSection = props => {
  const questions = props.questions.map((item, i) => {
    return <Question key={i} sectionId={props.sectionId} question={item} />;
  });

  return (
    <table className="ui celled table">
      <thead>
        <tr>
          <th colSpan="3">
            <h3>{props.title}</h3>
          </th>
          <th className="center aligned">Not at All</th>
          <th className="center aligned">Somewhat</th>
          <th className="center aligned">Moderately</th>
          <th className="center aligned">A lot</th>
          <th className="center aligned">Extremely</th>
        </tr>
      </thead>
      <tbody>{questions}</tbody>
    </table>
  );
};

export default QuestionSection;
