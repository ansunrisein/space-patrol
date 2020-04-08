import React from "react";
import {useParams} from "react-router-dom";
import {useArticle} from "../services/ArticleService";
import styles from "./ArticlePage.module.scss";
import {Error} from "./Error";
import {Loader} from "../components/Loader";

const ArticlePage = () => {
    const {id} = useParams();

    const {value, pending, error} = useArticle(id);

    if ((!value || error) && !pending)
        return <Error/>;

    return (
        <main className={styles.main}>{
            pending
                ? <Loader/>
                : (
                    <>
                        <header className={styles.header}>{value.title}</header>
                        <div className={styles.article_container}>
                            {value.text}
                        </div>
                    </>
                )
        }</main>
    );
};

export {ArticlePage};