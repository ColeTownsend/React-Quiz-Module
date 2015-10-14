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
    overflow: 'hidden',
    paddingLeft: '10px',
    paddingRight: '10px',
};

export class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {isRight: this.props.question.isRight};
  }

  handleChance(event) {
    this.props.onAnswer();
    if (event.target.value.toLowerCase() === this.props.question.answer.toLowerCase()) {
        this.props.onAnswer(this.props.question.id);
        this.setState({isRight: true});
        console.log('question ' + this.props.question.id + ' is ' + this.props.question.isRight);
    }
  }

  render() {
    if (this.state.isRight) {
        return (<span>{this.props.question.pre} <span className='flash animated aqua'>{this.props.question.answer}</span>.</span>)
    } else {
        return (<span>{this.props.question.pre} <input style={formStyle} onChange={this.handleChange}></input></span>);
    }
  }
}
