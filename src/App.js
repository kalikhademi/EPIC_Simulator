import React, { Component } from "react";
// import quizQuestions from "./api/quizQuestions";
import quizQuestions from "./api/questions";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import logo from "./svg/logo.svg";
import "./App.css";
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
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.state = this.initialstate;
  }

  componentDidMount() {
    const shuffledAnswerOptions = quizQuestions.map(question =>
      this.shuffleArray(question.answers)
    );
    this.setState({
      question: quizQuestions[0].question,
      questionType: quizQuestions[0].type,
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

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    let tmpProtective = 0;
    const answersCount = this.state.answersCount;
    console.log("the question type is:", this.state.questionType);
    const answersCountKeys = Object.keys(answersCount);
    console.log("the answer keys are :", answersCountKeys);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    console.log("the answer values are:", answersCountValues);

    if (this.state.questionType === "raterBox") {
      console.log("I am herererere");
      tmpProtective = this.state.protectiveResult + Number(answersCountValues);
      console.log("the protective result is:", tmpProtective);
      this.setState({ protectiveResult: tmpProtective });
    }
    console.log("the answer is :", this.state.answersCount);
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      questionType: quizQuestions[counter].questionType,
      answerOptions: quizQuestions[counter].answers,
      answer: "",
    });
  }
  resetQuiz() {
    return this.setState(this.initialstate);
  }

  getResults() {
    const answersCount = this.state.answersCount;
    // const answersCountKeys = Object.keys(answersCount);
    // const answersCountValues = answersCountKeys.map(key => answersCount[key]);
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
      </div>
    );
  }
}

export default App;
