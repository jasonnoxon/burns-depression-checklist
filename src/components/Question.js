import React from "react";
import Answer from "./Answer";

const Question = props => {
  return (
    <tr>
      <td className="left aligned" colSpan="3">
        {props.question.text}
      </td>
      <Answer name={props.sectionId + "-" + props.question.id} />
      <Answer name={props.sectionId + "-" + props.question.id} />
      <Answer name={props.sectionId + "-" + props.question.id} />
      <Answer name={props.sectionId + "-" + props.question.id} />
      <Answer name={props.sectionId + "-" + props.question.id} />
    </tr>
  );
};

export default Question;
