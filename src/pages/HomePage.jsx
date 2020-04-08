import React from 'react';
import {useAllArticles} from "../services/ArticleService";
import styles from "./HomePage.module.scss";
import {Error} from "./Error";
import {HomeHeader} from "../components/HomeHeader";
import {ArticleCard} from "../components/ArticleCard";
import {Loader} from "../components/Loader";

const HomePage = () => {
    const {value, pending, error} = useAllArticles();

    if ((!value || error) && !pending)
        return <Error/>;

    return (
        <div className={styles.container}>
            <HomeHeader/>{
            pending
                ? <Loader/>
                : (
                    <main className={styles.articles}> {
                        value.map(({_id, ...props}) => <ArticleCard key={_id} id={_id} {...props}/>)
                    } </main>
                )
            }
        </div>
    )
};

export {HomePage};