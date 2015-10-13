import React, { Component } from 'react';
import { Question } from './Question.js';


var Quiz = React.createClass({
    getInitialState: function() {
        return {QuizQuestions: this.props.questions}
    },
    render: function() {
        var allQs = []
        this.props.questions.forEach((question) => {
          allQs.push(<Question question={question} key={question.id} onAnswer={this.onAnswer} isRight={this.state.isRight} />);
        });
        return (
          <p className="h4 h4-responsive" style={defStyle}>{allQs}</p>
        );
    },
    onAnswer: function() {}
});


var QUIZ1 = [
    {id: 1, pre: 'This is my favorite type of pie:', answer: 'pumpkin', isRight: false},
    {id: 2, pre: 'This is my favorite type of burger (or the place its from):', answer: 'public', isRight: false},
    {id: 3, pre: 'This is my favorite type of sandwich:', answer: 'turkey', isRight: false},
];

var QUIZ2 = [
    {id: 1, pre: 'This is my favorite type of pizza:', answer: 'three cheese', isRight: false},
    {id: 2, pre: 'This is my favorite place:', answer: 'buffalo', isRight: false},
    {id: 3, pre: 'This is where I went to school:', answer: 'Williams', isRight: false},
];

var QUIZ3 = [
    {id: 1, pre: 'Do I wear socks when I run:', answer: 'no', isRight: false},
    {id: 2, pre: 'What is my middle name:', answer: 'Nathaniel', isRight: false},
    {id: 3, pre: 'What was my major in college:', answer: 'art hitory', isRight: false},
];



