import React from "react";
import PropTypes from "prop-types";
import addCssTransition from "../utils/css-transition";
// import { CSSTransitionGroup } from "react-transition-group";
import { withStyles, MuiThemeProvider } from "@material-ui/core/styles";
import theme from "../styles/theme";
import successSvg from "../svg/success.svg";
import failureSvg from "../svg/failure.svg";
import resultstyles from "../styles/result-style";
import App from "../App";

function Result(props) {
  //change this based on ben's response about
  const Button = resultstyles.resetButton;
  var risk = false;
  if (props.quizResult > 70) {
    risk = true;
  }
  return (
    <MuiThemeProvider theme={theme}>
      {addCssTransition(
        <div className="">
          <img
            src={risk ? failureSvg : successSvg}
            className={props.resultSVG}
            alt="logo"
          />
          The participant has <b>{risk ? "high" : "low"}</b> risk score.
          <Button
            className={props.resetButton}
            onClick={App.resetQuiz}
            color="secondary"
          >
            Try Again
          </Button>
        </div>
      )}
    </MuiThemeProvider>
  );
}
// <CSSTransitionGroup
//   className="container result"
//   component="div"
//   transitionName="fade"
//   transitionEnterTimeout={800}
//   transitionLeaveTimeout={500}
//   transitionAppear
//   transitionAppearTimeout={500}
// >

/* <div>
        <h1>Results</h1>
        <p className=".result.single">The total risk is {props.quizResult}</p>
        <p className=".result.protective">
          The protective risk score is {props.protectiveResult}
        </p>
      </div> */

// <div className="score-board">
//   <div className="score">
//     {" "}
//     <p>Your risk score is {props.quizResult}</p>{" "}
//     <p>and the protective result is {props.protectiveResult}</p>
//   </div>
//   <button className="playBtn" onClick={App.resetQuiz}>
//     {" "}
//     Start Again{" "}
//   </button>
// </div>
// </CSSTransitionGroup>

Result.propTypes = {
  quizResult: PropTypes.number.isRequired,
  protectiveResult: PropTypes.number.isRequired,
};

export default Result;
