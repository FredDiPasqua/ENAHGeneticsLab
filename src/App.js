import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import "./assets/styles/App.scss";
import Home from './components/Home';
import About from './components/About'
import Layout from './components/Layout';


const App = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL} >
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />

            </Switch>  
        </Layout>
    </BrowserRouter>
);


ReactDOM.render(<App/>, document.getElementById("root"));



