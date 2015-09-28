import React, { Component } from 'react';

var Question = React.createClass({
    render: function() {
        if (this.props.question.isRight) {
          return (<span>{this.props.question.pre} <span className="flash animated">{this.props.question.answer}</span>. </span>)
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
    },
    // getInitialState: function() {
    //     return {
    //       isRight: "false"
    //     }
    // }
});

var QuestionSet = React.createClass({
    render: function() {
        var allQs = []
        this.props.questions.forEach((question) => {
          allQs.push(<Question question={question} key={question.id} onAnswer={this.onAnswer} />);
        });

        return (
            <section className="container px2 mh4 flex flex-center">
              <div className="p2">
              <p className="serif h3 h3-responsive bold fuschia">{allQs}</p>
              </div>
            </section>
        );
    },
    onAnswer: function() {
      this.forceUpdate(); // going to take this out.
    }
});


var QUESTIONS = [
  {id: 1, pre: 'This is my favorite type of pie:', answer: 'pumpkin', isRight: false},
  {id: 2, pre: 'This is my favorite type of burger:', answer: 'public', isRight: false},
  {id: 3, pre: 'This is my favorite type of sandwich:', answer: 'turkey', isRight: true},
];

React.render(<QuestionSet questions={QUESTIONS} />, document.body);


