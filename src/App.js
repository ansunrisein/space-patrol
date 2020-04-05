import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import "normalize.css";
import "./index.css";
import {HomePage} from "./pages/HomePage";
import {ArticlePage} from "./pages/ArticlePage"


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/article/:id" component={ArticlePage}/>
                <Route exact path="/" component={HomePage}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
