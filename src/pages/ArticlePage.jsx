import React from "react";
import styles from "./ArticlePage.module.scss";
import articles from "../resources/articles";
import {useParams} from "react-router-dom";

const ArticlePage = () => {
    const {id} = useParams();

    const {name, text} = articles.find(e => e.id === +id);

    return (
        <main className={styles.main}>
            <header className={styles.header}>{name}</header>
            <div className={styles.article_container}>
                {text}
            </div>
        </main>
    );
};

export {ArticlePage};