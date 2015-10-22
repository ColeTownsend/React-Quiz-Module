import React, { Component } from 'react';
// import { Router, Route, Link } from 'react-router'
import { Quiz } from './Quiz';
import { QUIZ1, QUIZ2, QUIZ3 } from './quizData';

export class App extends Component {
  render() {
    console.log('render app');
    return (
      <div>
        <Quiz questions={QUIZ1}/>
      </div>
    );
  }
}
