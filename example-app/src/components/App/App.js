import React, { Component } from 'react';

import Footer from '../Footer';
import AddTodo from '../../containers/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList';

import './App.css';

class App extends Component {
    render() {
        return (
            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <AddTodo />
                </header>
                <section className="main">
                    <VisibleTodoList />
                </section>
                <footer className="footer">
                    <Footer />
                </footer>
            </section>
        );
    }
}

export default App;
