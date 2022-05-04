import React, { Fragment } from "react";
import styles from "./MealElement.module.css";

const MealElement = (props) => {
  const stats = props.stats;

  return (
    <div className={styles["list-element"]}>
      <h3>{stats.name}</h3>
      <div>{stats.description}</div>
      <div>{stats.price}</div>
    </div>
  );
};

export default MealElement;
