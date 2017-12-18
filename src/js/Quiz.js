import React from 'react';


export default class Quiz extends React.Component {
  constructor(props){
    super(props)
    var VARIANT_COUNT = 4 // this indicates how many possible answers will be generated, should be > 1
    var answers = new Array(VARIANT_COUNT).fill(0)
    var questionAnswer = this.generateQuestion()
    this.state = {question: questionAnswer[0], answer: questionAnswer[1], answers: this.generateChoices(questionAnswer[1], answers.length), correct: 0, total: 0}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(val){
    console.log("clicked", val)
    var questionAnswer = this.generateQuestion()
    var tempAnswers =  this.generateChoices(questionAnswer[1], this.state.answers.length)
    if (val == this.state.answer){
      this.setState((prevState,props) => {
        return {question: questionAnswer[0], answer: questionAnswer[1], answers: tempAnswers, correct: prevState.correct + 1, total: prevState.total + 1}
      })
    } else {
      this.setState((prevState) => {
        return {question: questionAnswer[0], answer: questionAnswer[1], answers: tempAnswers, total: prevState.total + 1}
      })
    }
  }

  restart(){
    var questionAnswer = this.generateQuestion()
    var tempAnswers =  this.generateChoices(questionAnswer[1], this.state.answers.length)
    this.setState({question: questionAnswer[0], answer: questionAnswer[1], answers: tempAnswers, correct: 0, total: 0})
  }

  generateQuestion(){
    var signs = ["+", "-", "*"]
    var signID = this.getRandomInt(0, signs.length-1)
    var sign = signs[signID]
    var a = this.getRandomInt(1, 9)
    var b = this.getRandomInt(1, 9)
    var question = a.toString() + sign + b.toString()
    var answer = 0
    if (sign == "+"){
      answer = a + b
    } else if (sign == "-"){
      answer = a - b
    } else {
      answer = a * b
    }
    return [question, answer]
  }

  generateChoices(answer, len){
    var pos = this.getRandomInt(0, len-1)
    var choices = new Array(len).fill(0)
    choices[pos] = answer
    for (let i = 0; i < pos; i++){
      choices[i] = answer - pos + i
    }
    for (let i = pos+1; i < len; i++){
      choices[i] = answer + i
    }
    return choices
  }

  getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    var rand = Math.floor((Math.random() * (max - min + 1)) + min)
    return rand
  }

  render(){
    return(
      <div>
        <h3>Correct: {this.state.correct}  Incorrect: {this.state.total - this.state.correct}  Total: {this.state.total}</h3>
        <button onClick = {() => this.restart()}>Restart</button>
        <h1>What is {this.state.question}</h1>
        <Answer answers = {this.state.answers} handleClick = {this.handleClick}/>
      </div>
    )
  }
}

function Answer(props){
  var buttons = []
  for (let i = 0; i < props.answers.length; i++){
    buttons.push(<Button val = {props.answers[i]} handleClick = {props.handleClick}/>)
  }
  return (
    <div>
      {buttons}
    </div>
  )
}

function Button(props){
  var style = {
    height: "50px",
    width: "400px"
  }
  return (
    <ul>
      <button style = {style} onClick = {() => props.handleClick(props.val)}>{props.val}</button>
    </ul>
  )
}
