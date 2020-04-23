import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import { Card, Avatar, Input, Typography } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import questions from './questions';
require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/neat.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');

const { Text, Title } = Typography;

export default class App extends Component {

  state ={
    showAnswer: false,
    correctAnswer: false,
  }

  processAnswer = (answer) => {
    if (answer) {
      this.setState({ correctAnswer: true, showAnswer: true})
    } else {
      this.setState({ correctAnswer: false, showAnswer: true})
    }
  }

  render() {
    let {code, options, explain } = questions[0];

    return (
      <div className="main">
        <div className="question">
          <Title level={2} style={{ color: '#efefef' }}>1] Scopes and closures</Title>
          <Title level={4} style={{ color: '#efefef88' }}>What is the output of the following code snippet?</Title>
          <div className="topbar">
            <span className="icon" style={{ backgroundColor: '#FF5E56'}}></span>
            <span className="icon" style={{ backgroundColor: '#FFBD2D' }}></span>
            <span className="icon" style={{ backgroundColor: '#27C93F' }}></span>
          </div>
          <CodeMirror
            value={code}
            options={{
              mode: 'javascript',
              theme: 'material',
              lineNumbers: true,
              readOnly: true
            }}
          />

          {options.map((option, index) =>
            (<div className="optionRow"><h1>[1]</h1><div className="options"><code>{option.value}</code></div>
              <button onClick={this.state.showAnswer ? () => { } : () => this.processAnswer(option.correct)} 
                  className={this.state.showAnswer ? (option.correct ? 'correct' : 'wrong') : ''}><strong>CHOOSE</strong></button>
              </div>)
          )}
        </div>
        {this.state.showAnswer && 
        <>
          <div className="separator"></div>
          <div className="answer">
            {this.state.correctAnswer && <div>
              <Title level={2} style={{ color: '#efefef' }}>Congratulations!</Title>
              <Title level={4} style={{ color: '#efefefdd' }}>You chose the <span style={{ color: '#09ff99'}}>right</span> answer.</Title>
            </div>}
            {!this.state.correctAnswer && <div>
              <Title level={2} style={{ color: '#efefef' }}>Oops!</Title>
              <Title level={4} style={{ color: '#efefefdd' }}>You chose the <span style={{ color: '#ff0999' }}>wrong</span> answer.</Title>
            </div>}
            <Title level={4} style={{ color: '#efefef88' }}>{explain}</Title>
            <div class="o-video">
              <iframe src="https://www.youtube.com/embed/2RkmCbisaWA" allowfullscreen></iframe>
            </div>
          </div>
        </>}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));