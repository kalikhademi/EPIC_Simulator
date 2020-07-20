import React, { Component } from "react";
// import quizQuestions from "./api/quizQuestions";
import quizQuestions from "./api/questions";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import logo from "./svg/logo.svg";
import "./App.css";
import { Button } from "@material-ui/core";
// import { CSSTransitionGroup } from "react-transition-group";

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
  // onResetClick(e) {
  //   this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  //   this.setState(this.initialState);
  // }

  componentDidMount() {
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
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1,
      },
      answer: answer,
    }));
  }
  computeCategoryResult(category) {
    switch (category) {
      case "criminal":
        console.log(category);
        this.setState({ criminalHistory: this.state.criminalHistory + 1 });
        break;
      case "education/employment":
        console.log(category);
        this.setState({
          educantionEmployment: this.state.educantionEmployment + 1,
        });
        break;
      case "financial":
        console.log(category);
        this.setState({ financial: this.state.financial + 1 });
        break;
      case "family/marital":
        console.log(category);
        this.setState({ family: this.state.family + 1 });
        break;
      case "accommodation":
        console.log(category);
        this.setState({ accomodation: this.state.accomodation + 1 });
        break;
      case "leisure/recreation":
        console.log(category);
        this.setState({ leisure: this.state.leisure + 1 });
        break;
      case "companions":
        console.log(category);
        this.setState({ companions: this.state.companions + 1 });
        break;
      case "alcohol/drug problems":
        console.log(category);
        this.setState({ alcoholDrug: this.state.alcoholDrug + 1 });
        break;
      case "emotional/personal":
        console.log(category);
        this.setState({ emotionalPersonal: this.state.emotionalPersonal + 1 });
        break;
      case "attitude/orientation":
        console.log(category);
        this.setState({ attitude: this.state.attitude + 1 });
        break;
      default:
        console.log("there is no category");
    }
  }
  setNextQuestion() {
    //defining variables
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    let tmpProtective = 0;
    const answersCount = this.state.answersCount;
    const category = this.state.questionCategory;
    console.log("the question type is:", this.state.questionType);
    console.log("the question category is:", this.state.questionCategory);

    const answersCountKeys = Object.keys(answersCount);
    console.log("the answer keys are :", answersCountKeys);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    console.log("the answer values are:", answersCountValues);
    //computing the protective result for each question
    if (this.state.questionType === "raterBox") {
      console.log("I am herererere");
      tmpProtective = this.state.protectiveResult + Number(answersCountValues);
      console.log("the protective result is:", tmpProtective);
      this.setState({ protectiveResult: tmpProtective });
    }
    //computing the categories result
    this.computeCategoryResult(category);

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      questionType: quizQuestions[counter].questionType,
      answerOptions: quizQuestions[counter].answers,
      answer: "",
      questionCategory: quizQuestions[counter].category,
    });
  }

  resetQuiz() {
    this.setState(this.initialstate);
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const result = answersCount.negative;
    console.log("result is:", result);
    return result;
  }

  setResults(result) {
    this.setState({
      result: result,
    });
  }

  renderQuiz() {
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

  /* <span>Photo by <a href="https://unsplash.com/@fakurian?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Milad B. Fakurian</a> on <a href="https://unsplash.com/s/photos/idaho-prison?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span> */
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Idaho Pretrial Risk Assessmnet Simulator</h2>
        </div>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
        <Button
          variant="contained"
          size="large"
          color="secondary"
          onClick={this.resetQuiz.bind(this)}
        >
          Reset
        </Button>
      </div>
    );
  }
}

export default App;
