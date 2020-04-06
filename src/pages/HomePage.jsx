import React from 'react';
import styles from "./HomePage.module.scss";
import {HomeHeader} from "../components/HomeHeader";
import {ArticleCard} from "../components/ArticleCard";
import articles from "../resources/articles";

const HomePage = () => (
    <div className={styles.container}>
        <HomeHeader/>
        <main className={styles.articles}> {
            articles.map(({id, ...props}) => <ArticleCard key={id} id={id} {...props}/>)
        }</main>
    </div>
);

export {HomePage};