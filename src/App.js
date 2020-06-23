import React from 'react';
import logo from './logo.svg';
import './App.css';


import {createStore} from "redux";
import todoApp from "./redux/reducer/reducer";

import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
} from "./redux/actions/actions";


const store = createStore(todoApp);

function App() {

    const unsubscribe = store.subscribe(() => console.log(store.getState()));

    store.dispatch(addTodo('Learn about actions'))
    store.dispatch(addTodo('Learn about reducers'))
    store.dispatch(addTodo('Learn about store'))
    store.dispatch(toggleTodo(0))
    store.dispatch(toggleTodo(1))
    store.dispatch(toggleTodo(1))
    store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

    unsubscribe()

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
