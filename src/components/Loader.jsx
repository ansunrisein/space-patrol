import React from "react";
import styles from "./Loader.module.scss";
import {FireworkSpinner} from "react-spinners-kit";

const Loader = () => (
    <div className={styles.loader}><FireworkSpinner size={200}/></div>
);

export {Loader};