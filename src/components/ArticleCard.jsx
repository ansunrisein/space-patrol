import React from "react";
import {content} from "../resources/ru";
import {Button} from "./Button";
import styles from "./ArticleCard.module.scss";

const ArticleCard = ({image, children}) => (
    <article className={styles.article}>
        <header>{children}</header>
        <img className={styles.img} src={image} alt=""/>
        <Button className={styles.button}>{content.read}</Button>
    </article>
);

export {ArticleCard};