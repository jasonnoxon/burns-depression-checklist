import React from "react";

const Answer = props => {
  return (
    <td className="center aligned">
      <input type="radio" name={props.name} />
    </td>
  );
};

export default Answer;
