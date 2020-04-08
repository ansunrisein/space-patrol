import React from "react";
import styles from "./ImageUpload.module.scss";
import {Icon} from "./Icon";

const ImageUpload = () => {
    return (
        <div className={styles.image}>
            <Icon/>
        </div>
    );
};

export {ImageUpload};