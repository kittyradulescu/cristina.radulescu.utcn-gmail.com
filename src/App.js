import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from "./pages/HomePage";
function App() {
    return (
        <Switch>
            <Route>
                <Route exact path="/" component={HomePage}/>
            </Route>
        </Switch>
    );
}

export default App;
