import React from "react";
import styles from "./Header.module.scss";
import {content} from "../resources/ru"
import {Button} from "./Button";

const Header = ({className = ""}) => (
    <header className={styles.content}>
        <Button className={styles.button + ' ' + className}>{content.create}</Button>
    </header>
);

export {Header};