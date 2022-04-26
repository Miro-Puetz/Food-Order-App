import React from "react";
import Card from "../UI/Card/Card";
import styles from "./MealSelection.module.css";

const MealSelection = (props) => {
  return (
    <Card style={styles.card}>
      <ul>
        <li>Sushi</li>
        <li>Schnitzel</li>
      </ul>
    </Card>
  );
};

export default MealSelection;
