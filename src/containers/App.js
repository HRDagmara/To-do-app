import React from 'react';
import style from './App.css';
import Title from './components/Title.js';
import TodoList from './components/TodoList.js';
import uuid from 'uuid';
import {hot} from 'react-hot-loader';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4()
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render() {
        return (
            <div className={style.TodoApp}>
                <h1 className={Title}></h1>
                <p>
                    <ul className={TodoList}></ul>
                </p>
            </div>
        );
    }
}

export default hot(module)(App);