import React from "react";
import styles from "./Button.module.scss";

const Button = ({className = "", children}) => (
    <button className={styles.button + ' ' + className}>{children}</button>
);

export {Button};