import React from 'react';
import "normalize.css";
import "./index.css";
import styles from "./App.module.scss";
import {Header} from "./components/Header";
import {ArticleCard} from "./components/ArticleCard";

function App() {
    return (
        <div className={styles.container}>
            <Header/>
            <main className={styles.articles}>
                <ArticleCard image={"https://sun9-44.userapi.com/c543100/v543100492/498d9/MwdWr_kObQQ.jpg"} children={"Космическое пространство"}/>
                <ArticleCard image={"https://sun1-86.userapi.com/4zf5lpY3mR-xkxnNQoR65-DxJOo6t4-Jz-hcVQ/fWQWTOeOWy8.jpg"} children={"Космическое пространство"}/>
                <ArticleCard image={"https://sun9-44.userapi.com/c543100/v543100492/498d9/MwdWr_kObQQ.jpg"} children={"Космическое пространство"}/>
                <ArticleCard image={"https://sun1-86.userapi.com/4zf5lpY3mR-xkxnNQoR65-DxJOo6t4-Jz-hcVQ/fWQWTOeOWy8.jpg"} children={"Космическое пространство"}/>
                <ArticleCard image={"https://sun9-44.userapi.com/c543100/v543100492/498d9/MwdWr_kObQQ.jpg"} children={"Космическое пространство"}/>
                <ArticleCard image={"https://sun1-86.userapi.com/4zf5lpY3mR-xkxnNQoR65-DxJOo6t4-Jz-hcVQ/fWQWTOeOWy8.jpg"} children={"Космическое пространство"}/>
                <ArticleCard image={"https://sun9-44.userapi.com/c543100/v543100492/498d9/MwdWr_kObQQ.jpg"} children={"Космическое пространство"}/>
                <ArticleCard image={"https://sun9-44.userapi.com/c543100/v543100492/498d9/MwdWr_kObQQ.jpg"} children={"Космическое пространство"}/>
                <ArticleCard image={"https://sun1-86.userapi.com/4zf5lpY3mR-xkxnNQoR65-DxJOo6t4-Jz-hcVQ/fWQWTOeOWy8.jpg"} children={"Космическое пространство"}/>
            </main>
        </div>
    );
}

export default App;
