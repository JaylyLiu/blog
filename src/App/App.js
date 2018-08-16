import React, { Component } from 'react';
import './App.css';
import Dashboard from '../pages/Dashboard';

class App extends Component {
  state = {}
  render() {
    let array1 = [
      {
        name: 'KG',
        age: 23,
        sex: 'male'
      },
      {
        name: 'Jayly',
        age: 18,
        sex: 'female'
      },
      {
        name: 'Gulu',
        age: 1,
        sex: 'male'
      },
      {
        name: 'Zhiyi',
        age: 1,
        sex: 'female'
      },
      {
        name: 'The little little little caty',
        age: 0.1,
        sex: 'male'
      },
    ]
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="body">
          <Dashboard
            // 如果不传递string1 将使用默认值
            // string1='STRING1'
            string2='STRING2'
            array1={array1}
          />
        </div>
      </div>
    );
  }
}

export default App;
