import React from "react";
import {Link} from "react-router-dom";
import styles from "./HomeHeader.module.scss";
import {content} from "../resources/ru"
import {Button} from "./Button";

const HomeHeader = ({className = ""}) => (
    <header className={styles.content}>
        <Link to={`/create`}>
            <Button className={styles.button + ' ' + className}>{content.create}</Button>
        </Link>
    </header>
);

export {HomeHeader};