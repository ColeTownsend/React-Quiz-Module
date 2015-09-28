import React, { Component } from 'react';

var Question = React.createClass({
    render: function() {
        if (this.props.question.isRight) {
          return (<span>{this.props.question.pre} {this.props.question.answer} </span>)
        } else {
          return (<span>{this.props.question.pre} <input onChange={this.handleChange}></input> </span>);
        }
    },
    // handle changes in the input
    handleChange: function(event) {
      this.props.onAnswer();
      if (event.target.value === this.props.question.answer) {
        this.props.onAnswer(this.props.question.id);
        this.props.question.isRight = true;
        console.log("question " + this.props.question.id + " is " + this.props.question.isRight);
      }
    }
});

var QuestionSet = React.createClass({
    render: function() {
        var allQs = []
        this.props.questions.forEach((question) => {
          if (!question.isRight) {
            allQs.push(<Question question={question} key={question.id} onAnswer={this.onAnswer} />);
          }
        });

        return (
            <section>
              <p>Hello</p>
              <p>{allQs}</p>
            </section>
        );
    },
    onAnswer: function() {
    }
});


var QUESTIONS = [
  {id: 1, pre: 'This is my favorite type of pie:', answer: 'pumpkin pie', isRight: false},
  {id: 2, pre: 'This is my favorite type of burger:', answer: 'public burger', isRight: false},
  {id: 3, pre: 'This is my favorite type of sandwich:', answer: 'turkey', isRight: true},
];

React.render(<QuestionSet questions={QUESTIONS} />, document.body);


