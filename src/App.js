import React from 'react';
import global from '../src/assets/styles/global.scss';
import TodoApp from '../src/pages/TodoApp.js';
import TodoPage from '../src/pages/TodoPage.js';
import TodoAdd from '../src/pages/TodoAdd.js';
import TodoEdit from '../src/pages/TodoEdit.js';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import {createBrowserHistory} from 'history';
const history=createBrowserHistory();

class App extends React.Component {

    render() {
        return (
          <div className="main-container">
            <main>
                <Router history={history}>
                    <Switch>
                        <Route component={TodoApp} path="/" exact></Route>
                        <Route component={TodoApp} path="/todos" exact></Route>
                        <Route component={TodoPage} path="/todos/:id" exact></Route>
                        <Route component={TodoAdd} path="/addTodo" exact></Route>
                        <Route component={TodoEdit} path="/todos/:id/edit" exact></Route>
                    </Switch>
                </Router>
            </main>
            </div>
        )
    }
}

export default App;

