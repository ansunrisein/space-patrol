import React from "react";
import {content} from "../resources/ru";
import {Button} from "./Button";
import styles from "./ArticleCard.module.scss";
import {Link} from "react-router-dom";

const ArticleCard = ({id, image, title}) => (
    <article className={styles.article}>
        <header>{title}</header>
        <img className={styles.img} src={image} alt=""/>
        <Link to={`/article/${id}`}>
            <Button className={styles.button}>{content.read}</Button>
        </Link>
    </article>
);

export {ArticleCard};