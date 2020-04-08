import React from "react";
import {content} from "../resources/ru";
import styles from "./Error.module.scss";

const Error = () => (
    <div className={styles.error}>
        <div className={styles.text}>{content.error}</div>
    </div>
);

export {Error};