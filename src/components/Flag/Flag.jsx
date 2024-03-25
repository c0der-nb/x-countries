import React from "react";
import styles from "./Flag.module.css";

export default function Flag({image, name, alt}) {
    return (
        <div className={styles.card}>
            <div>
                <img className={styles.flagImage} src={image} alt={alt} />
            </div>
            <p>{name}</p>
        </div>
    )
}