import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browerHistory, Link} from 'react-router';
import App from './components/Main';
import ConversationPane from './components/ConversationPane'

// Render the main component into the dom



ReactDOM.render(

    <Router history = {browerHistory}>
        <Route path="/" component={App}>
            <Route path="/conversation/:human" component={ConversationPane}> 
            </Route>
        </Route>
    </Router>   
, document.getElementById('main'));
