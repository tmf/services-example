import React, { Component } from 'react';

import Footer from '../Footer';
import AddTodo from '../../containers/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList';

class App extends Component {
    render() {
        return (
            <section>
                <header>
                    <h1>todos</h1>
                    <AddTodo />
                </header>
                <section>
                    <VisibleTodoList />
                </section>
                <footer>
                    <Footer />
                </footer>
            </section>
        );
    }
}

export default App;
