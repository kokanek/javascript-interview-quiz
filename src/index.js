import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import { Card, Avatar, Input, Typography } from 'antd';
import 'antd/dist/antd.css';
import './index.css'
require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/neat.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');

const { Text, Title } = Typography;

export default class App extends Component {

  state ={
    userName: '',
    isLoggedIn: false,
    messages: []
  }

  render() {
    let code = 
    `
let a = 10;
let b = 15;
    `;

    return (
      <div className="main">
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
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));