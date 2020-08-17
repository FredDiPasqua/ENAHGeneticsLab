import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import "./assets/styles/App.scss";
import Main from './components/Main';


const App = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL} >
            <Switch>
                <Route exact path="/" component={Main} />

            </Switch>  
    </BrowserRouter>
);


ReactDOM.render(<App/>, document.getElementById("root"));



