import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Details from './components/Details/Details';
import Main from './Main/Main'
import { history } from './helpers/history'
import EditContact from './EditContact/EditContact';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
const Routes = () => {
    return (
        <div>
            <BrowserRouter history={history}>
                <Switch>
                    <Route exact path="/details" component={Details} />
                    <Route exact path="/" component={Main} />
                    <Route exact path="/add" component={AddTodo} />
                    <Route exact path="/list" component={TodoList} />
                    <Route exact path="/edit" component={EditContact} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default Routes;