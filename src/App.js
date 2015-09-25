import React, { Component } from 'react';

var Question = React.createClass({
    render: function() {
        if (this.props.question.isRight) {
          return (<p>{this.props.question.pre} {this.props.question.answer}</p>)
        } else {
          return (<p>{this.props.question.pre}<input onChange={this.handleChange}></input></p>);
        }
    },
    // handle changes in the input
    handleChange: function(event) {
      console.log(event.target.value);
      this.props.onAnswer();
      if (event.target.value === this.props.question.answer) {
        this.props.onAnswer(this.props.questions.id);
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
      console.log("onAnswer ran");
    }
});


var QUESTIONS = [
  {id: 1, pre: 'This is my favorite type of pie:', answer: 'apple pie', isRight:false},
  {id: 2, pre: 'This is my favorite type of burger:', answer: 'public burger', isRight: false},
  {id: 3, pre: 'This is my favorite type of sandwich:', answer: 'turkey', isRight: true},
];

React.render(<QuestionSet questions={QUESTIONS} />, document.body);


