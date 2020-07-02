import React from "react";
import PropTypes from "prop-types";

function QuestionCount(props) {
  return (
    <div className="questionCount">
      Question <span>{props.counter}</span> of <span>{props.total}</span>
    </div>
  );
}
// add proptypes to check the type of attributes
QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default QuestionCount;
