import React from "react";
import PropTypes from "prop-types";
import addCssTransition from "../utils/css-transition";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "../styles/theme";
import successSvg from "../svg/success.svg";
import failureSvg from "../svg/failure.svg";
import styles from "../styles/result-style";
// import App from "../App";

function Result(props) {
  //change this based on ben's response about
  // const Button = styles.resetButton;
  const rStyle = styles(theme);
  var risk = false;
  if (props.quizResult > 70) {
    risk = true;
  }
  return (
    <MuiThemeProvider theme={theme}>
      {addCssTransition(
        <div className={rStyle.svgContainer}>
          {/* <img
            src={risk ? failureSvg : successSvg}
            className={rStyle.resultSVG}
            alt="logo"
          /> */}
          <p className={rStyle.resultParagraph}>
            The total risk score is {props.quizResult}
          </p>

          {/* <Button
            className={props.resetButton}
            onClick={App.resetQuiz}
            color="secondary"
          >
            Try Again
          </Button> */}
        </div>
      )}
    </MuiThemeProvider>
  );
}
Result.propTypes = {
  quizResult: PropTypes.number.isRequired,
  protectiveResult: PropTypes.number.isRequired,
  chresult: PropTypes.number.isRequired,
};

export default Result;
