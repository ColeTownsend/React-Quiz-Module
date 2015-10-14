import React, { Component } from 'react';
// import { Router, Route, Link } from 'react-router'
import { Quiz } from './Quiz';
// import { QUIZ1, QUIZ2, QUIZ3 } from './quizData'

var QUIZ1 = [
    {id: 1, pre: 'This is my favorite type of pie:', answer: 'pumpkin', isRight: false},
    {id: 2, pre: 'This is my favorite type of burger (or the place its from):', answer: 'public', isRight: false},
    {id: 3, pre: 'This is my favorite type of sandwich:', answer: 'turkey', isRight: false},
];

export class App extends Component {
  render() {
    console.log('render app')
    return (
      <div>
        <h1>Hello</h1>
        <Quiz questions={QUIZ1}/>
      </div>
    );
  }
}
