import React from "react";
import PropTypes from "prop-types";
import addCssTransition from "../utils/css-transition";
import {
  withStyles,
  makeStyles,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import theme from "../styles/theme";
import styles from "../styles/result-style";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

var bgColor = "";
function computeRiskScore(name, score) {
  var risk = "";
  switch (name) {
    case "Criminal History":
      if (score >= 8) risk = "high";
      else if (score >= 6 && score < 8) risk = "medium/high";
      else if (score >= 3 && score < 6) risk = "Moderate";
      else if (score >= 1 && score < 3) risk = "low/mod";
      else risk = "low";
      break;
    case "Education/Employment History":
      if (score >= 8) risk = "high";
      else if (score >= 5 && score < 8) risk = "medium/high";
      else if (score >= 3 && score < 5) risk = "Moderate";
      else if (score === 2) risk = "low/mod";
      else risk = "low";
      break;
    case "Financial":
      if (score === 2) risk = "high";
      else if (score === 1) risk = "Moderate";
      else if (score === 0) risk = "low";
      break;
    case "Family History":
      if (score === 4) risk = "high";
      else if (score === 3) risk = "medium/high";
      else if (score === 2) risk = "Moderate";
      else if (score === 1) risk = "low/mod";
      else risk = "low";
      break;
    case "Accommodation History":
      if (score === 3) risk = "high";
      else if (score === 2) risk = "medium/high";
      else if (score === 1) risk = "Moderate";
      else risk = "low";
      break;
    case "Leisure History":
      if (score === 2) risk = "high";
      else if (score === 1) risk = "Moderate";
      else if (score === 0) risk = "low";
      break;
    case "Companions History":
      if (score >= 4) risk = "high";
      else if (score === 3) risk = "medium/high";
      else if (score === 2) risk = "Moderate";
      else if (score === 1) risk = "low/mod";
      else risk = "low";
      break;
    case "Alcohol/Drug Problem History":
      if (score >= 7) risk = "high";
      else if (score >= 5 && score < 7) risk = "medium/high";
      else if (score >= 3 && score < 5) risk = "Moderate";
      else if (score >= 1 && score < 3) risk = "low/mod";
      else risk = "low";
      break;
    case "Emotional/Personal History":
      if (score >= 4) risk = "high";
      else if (score === 3) risk = "medium/high";
      else if (score === 2) risk = "Moderate";
      else if (score === 1) risk = "low/mod";
      else risk = "low";
      break;
    case "Attitude/Orientation History":
      if (score >= 4) risk = "high";
      else if (score === 3) risk = "medium/high";
      else if (score === 2) risk = "Moderate";
      else if (score === 1) risk = "low/mod";
      else risk = "low";
      break;
    default:
      break;
  }

  return risk;
}
function createData(name, score) {
  var risk = "";
  if (name === "Total Risk" || name === "Protective Risk") {
    bgColor = "Gray";
  } else {
    risk = computeRiskScore(name, score);
    if (risk === "high") {
      bgColor = "lightcoral";
    } else if (risk === "medium/high") {
      bgColor = "lightsalmon";
    } else if (risk === "Moderate") {
      bgColor = "palegoldenrod";
    } else if (risk === "low/mod") {
      bgColor = "palegreen";
    } else {
      bgColor = "lightgreen";
    }
  }
  return { name, score, bgColor };
}

function Result(props) {
  const rows = [
    createData("Criminal History", props.criminalHistory),
    createData("Education/Employment History", props.educantionEmployment),
    createData("Financial", props.financial),
    createData("Family History", props.family),
    createData("Accommodation History", props.accomodation),
    createData("Leisure History", props.leisure),
    createData("Companions History", props.companions),
    createData("Alcohol/Drug Problem History", props.alcoholDrug),
    createData("Emotional/Personal History", props.emotionalPersonal),
    createData("Attitude/Orientation History", props.attitude),
    createData("Total Risk", props.quizResult),
    createData("Protective Risk", props.protectiveResult),
  ];
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles(theme => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  const classes = useStyles();
  const rStyle = styles(theme);
  return (
    <MuiThemeProvider theme={theme}>
      {addCssTransition(
        <div className={rStyle.svgContainer}>
          {/* <img
            src={risk ? failureSvg : successSvg}
            className={rStyle.resultSVG}
            alt="logo"
          /> */}
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Category</StyledTableCell>
                  <StyledTableCell align="right">Score</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <StyledTableRow
                    key={row.name}
                    style={{ backgroundColor: row.bgColor }}
                  >
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.score}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </MuiThemeProvider>
  );
}
Result.propTypes = {
  quizResult: PropTypes.number.isRequired,
  protectiveResult: PropTypes.number.isRequired,
  criminalHistory: PropTypes.number.isRequired,
  educantionEmployment: PropTypes.number.isRequired,
  financial: PropTypes.number.isRequired,
  family: PropTypes.number.isRequired,
  accomodation: PropTypes.number.isRequired,
  leisure: PropTypes.number.isRequired,
  companions: PropTypes.number.isRequired,
  alcoholDrug: PropTypes.number.isRequired,
  emotionalPersonal: PropTypes.number.isRequired,
  attitude: PropTypes.number.isRequired,
};

export default Result;
