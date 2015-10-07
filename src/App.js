import React, { Component } from 'react';

var defStyle = {
    color: 'black',
    fontFamily: '"SF UI Text",-apple-system, monospace',
    lineHeight: '40px'
};

var formStyle = {
    height: '20',
    border: 'none',
    borderBottom: '2px solid #04B7FF',
    outline: 'none',
    boxShadow: 'none',
    margin: '0',
    padding: '0',
    width: '20%',
    overflow: 'hidden'
}

var Question = React.createClass({
    getInitialState: function() {
       return { isRight: this.props.question.isRight }
    },
    // handle changes in the input
    handleChange: function(event) {
        this.props.onAnswer();
        if (event.target.value.toLowerCase() === this.props.question.answer.toLowerCase()) {
            this.props.onAnswer(this.props.question.id);
            this.state.isRight = true;
            console.log("question " + this.props.question.id + " is " + this.props.question.isRight);
        }
    },
    render: function() {
        if (this.state.isRight) {
            return (<span>{this.props.question.pre} <span className="flash animated aqua">{this.props.question.answer}</span>.</span>)
        } else {
            return (<span>{this.props.question.pre} <input style={formStyle} onChange={this.handleChange}></input></span>);
        }
    }
});

        // var allQs = []
        // this.props.questions.forEach((question) => {
        //   allQs.push(<Question question={question} key={question.id} onAnswer={this.onAnswer} />);
        // });

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
    onAnswer: function() {
        this.setState
    }
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

React.render(<Quiz questions={QUIZ1} />, document.getElementById('quiz1'));
React.render(<Quiz questions={QUIZ2} />, document.getElementById('quiz2'));



