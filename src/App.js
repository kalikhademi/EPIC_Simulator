import React, { Component } from "react";
// import quizQuestions from "./api/quizQuestions";
import quizQuestions from "./api/questions";
import Quiz from "./components/simulation";
import Result from "./components/Result";
import logo from "./svg/logonew.svg";
import "./App.css";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
// import { CSSTransitionGroup } from "react-transition-group";

const classes = makeStyles(theme => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.primary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  button: {
    margin: theme.spacing(1),
  },
}));
class App extends Component {
  constructor(props) {
    super(props);

    this.initialstate = {
      counter: 0,
      questionId: 1,
      question: "",
      questionType: "",
      answerOptions: [],
      answer: "",
      answersCount: {},
      result: 0,
      protectiveResult: 0,
      questionCategory: "",
      criminalHistory: 0,
      educantionEmployment: 0,
      financial: 0,
      family: 0,
      accomodation: 0,
      leisure: 0,
      companions: 0,
      alcoholDrug: 0,
      emotionalPersonal: 0,
      attitude: 0,
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.state = this.initialstate;
  }

  componentDidMount() {
    console.log("componentDidMount");
    const shuffledAnswerOptions = quizQuestions.map(question =>
      this.shuffleArray(question.answers)
    );
    this.setState({
      question: quizQuestions[0].question,
      questionType: quizQuestions[0].type,
      questionCategory: quizQuestions[0].category,
      answerOptions: shuffledAnswerOptions[0],
    });
  }

  shuffleArray(array) {
    console.log("shuffleArray");
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleAnswerSelected(event) {
    console.log("handleAnswerSelected");
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    console.log("setUserAnswer");
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1,
      },
      answer: answer,
    }));
  }
  computeCategoryResult(category, answer) {
    switch (category) {
      case "criminal":
        console.log(category);
        if (answer === "negative") {
          this.setState({ criminalHistory: this.state.criminalHistory + 1 });
        } else {
          this.setState({ criminalHistory: this.state.criminalHistory });
        }
        break;
      case "education/employment":
        console.log(category);
        if (answer === "negative") {
          this.setState({
            educantionEmployment: this.state.educantionEmployment + 1,
          });
        } else {
          this.setState({
            educantionEmployment: this.state.educantionEmployment,
          });
        }
        break;
      case "financial":
        console.log(category);
        if (answer === "negative") {
          this.setState({ financial: this.state.financial + 1 });
        } else {
          this.setState({ financial: this.state.financial });
        }
        break;
      case "family/marital":
        console.log(category);
        if (answer === "negative") {
          this.setState({ family: this.state.family + 1 });
        } else {
          this.setState({ criminalHistory: this.state.criminalHistory });
        }
        break;
      case "accommodation":
        console.log(category);
        if (answer === "negative") {
          this.setState({ accomodation: this.state.accomodation + 1 });
        } else {
          this.setState({ accomodation: this.state.accomodation });
        }
        break;
      case "leisure/recreation":
        console.log(category);
        if (answer === "negative") {
          this.setState({ leisure: this.state.leisure + 1 });
        } else {
          this.setState({ leisure: this.state.leisure });
        }
        break;
      case "companions":
        console.log(category);
        if (answer === "negative") {
          this.setState({ companions: this.state.companions + 1 });
        } else {
          this.setState({ companions: this.state.companions });
        }
        break;
      case "alcohol/drug problems":
        console.log(category);
        if (answer === "negative") {
          this.setState({ alcoholDrug: this.state.alcoholDrug + 1 });
        } else {
          this.setState({ alcoholDrug: this.state.alcoholDrug });
        }
        break;
      case "emotional/personal":
        console.log(category);
        if (answer === "negative") {
          this.setState({
            emotionalPersonal: this.state.emotionalPersonal + 1,
          });
        } else {
          this.setState({ emotionalPersonal: this.state.emotionalPersonal });
        }
        break;
      case "attitude/orientation":
        console.log(category);
        if (answer === "negative") {
          this.setState({ attitude: this.state.attitude + 1 });
        } else {
          this.setState({ attitude: this.state.attitude });
        }
        break;
      default:
        console.log("there is no category");
    }
  }
  setNextQuestion() {
    //defining const variables
    console.log("setNextQuestion");
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    const answersCount = this.state.answersCount;
    const category = this.state.questionCategory;
    const type = this.state.questionType;
    const answer = this.state.answer;

    console.log("answer count", answer);

    //define variables
    let tmpProtective = 0;
    console.log("the question type is:", type);
    console.log("the question category is:", category);

    const answersCountKeys = Object.keys(answersCount);
    console.log("the answer keys are :", answersCountKeys);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    console.log("the answer values are:", answersCountValues);
    //computing the protective result for each question
    if (type === "raterBox") {
      console.log("I am herererere");
      console.log(
        "the protective result before adding is:",
        this.state.protectiveResult
      );
      console.log();
      tmpProtective = this.state.protectiveResult + Number(answer);
      console.log("the protective result is:", tmpProtective);
      this.setState({
        protectiveResult: tmpProtective,
      });
    }
    //computing the categories result
    this.computeCategoryResult(category, answer);

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      questionType: quizQuestions[counter].type,
      answerOptions: quizQuestions[counter].answers,
      answer: "",
      questionCategory: quizQuestions[counter].category,
    });
  }

  resetQuiz() {
    this.setState(this.initialstate);
    this.componentDidMount();
  }

  getResults() {
    console.log("getResults");
    const answersCount = this.state.answersCount;
    const result = answersCount.negative;
    console.log("result is:", result);
    return result;
  }

  setResults(result) {
    console.log("setResults");
    this.setState({
      result: result,
    });
  }

  renderQuiz() {
    console.log("renderQuiz");
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionType={this.state.questionType}
        questionCategory={this.state.questionCategory}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    console.log("renderResult");
    return (
      <Result
        quizResult={this.state.result}
        protectiveResult={this.state.protectiveResult}
        criminalHistory={this.state.criminalHistory}
        educantionEmployment={this.state.educantionEmployment}
        financial={this.state.financial}
        family={this.state.family}
        accomodation={this.state.accomodation}
        leisure={this.state.leisure}
        companions={this.state.companions}
        alcoholDrug={this.state.alcoholDrug}
        emotionalPersonal={this.state.emotionalPersonal}
        attitude={this.state.attitude}
      />
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Idaho Pretrial Risk Assessmnet Simulator</h2>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              Criminal History (0-10): {this.state.criminalHistory}
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              Educantion and Employment (0-10):{" "}
              {this.state.educantionEmployment}
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              Financial (0-2):{this.state.financial}
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              Family and Marital Status (0-4):{this.state.family}
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              Accomodation (0-3): {this.state.accomodation}
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              Leisure and Recreation (0-2):{this.state.leisure}
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              Companions (0-5):{this.state.companions}
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              Alcohol and drug problems (0-9):{this.state.alcoholDrug}
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              Emotional and personal (0-5):{this.state.emotionalPersonal}
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              Attitude and Orientation (0-4):{this.state.attitude}
            </Paper>
          </Grid>
        </Grid>
        {this.state.result ? this.renderResult() : this.renderQuiz()}

        <Button
          variant="contained"
          size="medium"
          color="primary"
          onClick={this.resetQuiz.bind(this)}
        >
          Reset
        </Button>
      </div>
    );
  }
}

export default App;
