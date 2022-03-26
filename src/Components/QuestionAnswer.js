import React from "react";

const QuestionAnswer = () => {
  return (
    <div className='spacing'>
      <h3>Q1- How React Works</h3>
      <p>
        <strong>Answer : </strong> React is a JavaScript library for creating
        user interfaces that is declarative, fast, and customizable. It allows
        us to build complicated user interfaces out of components. Which are
        tiny, independent bits of code. React, at its heart, essentially
        maintains a tree for us. On the nodes, this tree can do efficient for
        computations on the nodes.
      </p>
      <h3>Q2- props vs state?</h3>
      <p>
        <strong>Answer : </strong> State is like a local state of a component.
        That cannot be accessed and modified outside of the component. It's like
        a local variables in a function. <br />
        On the other hand props, makes components reusable by giving components
        the ability to receive data from their parent component in the form of
        props. But It is diffecult to sent data to the parent component here.
      </p>
    </div>
  );
};

export default QuestionAnswer;
