import React from 'react';
import styles from "./HomePage.module.scss";
import {Header} from "../components/Header";
import {ArticleCard} from "../components/ArticleCard";
import articles from "../resources/articles";

const HomePage = () => (
    <div className={styles.container}>
        <Header/>
        <main className={styles.articles}> {
            articles.map(({id, ...props}) => <ArticleCard key={id} id={id} {...props}/>)
        }</main>
    </div>
);

export {HomePage};