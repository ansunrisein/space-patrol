import React from "react";
import styles from "./ArticleCreation.module.scss"
import {content} from "../resources/ru";
import {Button} from "../components/Button";

const ArticleCreation = () => (
    <>
        <header className={styles.header}>
            <div className={styles.image}> </div>
            <input name="name" placeholder="Заголовок" className={styles.text}/>
            <Button className={styles.button}>{content.save}</Button>
        </header>
        <article className={styles.container}>
            <textarea placeholder="Ваш текст" className={styles.article}/>
        </article>
    </>
);

export {ArticleCreation};