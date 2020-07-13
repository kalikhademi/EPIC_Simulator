import React from "react";
import PropTypes from "prop-types";
import addCssTransition from "../utils/css-transition";
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import theme from "../styles/theme";
import successSvg from "../svg/success.svg";
import failureSvg from "../svg/failure.svg";
import styles from "../styles/result-style";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function createData(name, score) {
  return { name, score };
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
  const classes = useStyles();
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
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Category</TableCell>
                  <TableCell align="right">Score</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.score}</TableCell>
                  </TableRow>
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
