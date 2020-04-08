import React from "react";
import styles from "./ArticleCreation.module.scss"
import {content, placeholder} from "../resources/ru";
import {Button} from "../components/Button";
import {ImageUpload} from "../components/ImageUpload";

const ArticleCreation = () => (
    <form>
        <header className={styles.header}>
            <ImageUpload/>
            <input name="name" placeholder={placeholder.title} className={styles.text}/>
            <Button type="submit" className={styles.button}>{content.save}</Button>
        </header>
        <textarea placeholder={placeholder.text} className={styles.article_input}/>
    </form>
);

export {ArticleCreation};