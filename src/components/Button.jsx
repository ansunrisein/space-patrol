import React from "react";
import styles from "./Button.module.scss";

const Button = ({className = "", children, ...props}) => (
    <button className={styles.button + ' ' + className} {...props}>{children}</button>
);

export {Button};