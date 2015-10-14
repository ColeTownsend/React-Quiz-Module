import React, { Component } from 'react';
import { Question } from './Question.js';


export class Quiz extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.questions[0]['answer']);
    return {QuizQuestions: this.props.questions};
  }

  onAnswer() {
    console.log('hello');
  }

  render() {
    console.log('rendering');
    var allQs = []
    this.props.questions.forEach((question) => {
      allQs.push(<Question question={question} key={question.id} onAnswer={this.onAnswer} isRight={this.state.isRight} />);
    });
    return (
      <p className='h4 h4-responsive'>{allQs}</p>
    );
  }
}
