import React from "react";
import ReactDOM from "react-dom";
import QuestionSection from "./components/QuestionSection";
import questionData from "./question-data";

const App = () => {
  const sections = questionData.map((item, i) => {
    return (
      <QuestionSection
        key={i}
        sectionId={item.id}
        title={item.title}
        questions={item.questions}
      />
    );
  });

  return <div>{sections}</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
