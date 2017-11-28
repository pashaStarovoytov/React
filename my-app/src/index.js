import React from 'react';
import ReactDOM from 'react-dom';
import UserForm from '../src/App'
import Card from '../src/Card'
import Table from '../src/Table'
import { HashRouter, Route } from 'react-router-dom';


ReactDOM.render(
    <HashRouter>
        <div className="route">
            <Route exact path="/" component={UserForm} />
            <Route path="/card" component={Card} />
            <Route path="/table" component={Table} />
        </div>
    </HashRouter >,
    document.getElementsByClassName("container")[0]
);

