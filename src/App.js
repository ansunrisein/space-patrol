import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import "normalize.css";
import "./index.css";
import {HomePage} from "./pages/HomePage";
import {ArticlePage} from "./pages/ArticlePage"
import {ArticleCreation} from "./pages/ArticleCreation";


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/create" component={ArticleCreation}/>
                <Route path="/article/:id" component={ArticlePage}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
