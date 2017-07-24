import React, { Component } from 'react';
import Footer from '../../components/Footer'
import AddTodo from '../AddTodo'
import VisibleTodoList from '../VisibleTodoList'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>
      </div>
    );
  }
}

export default App;
