import React from "react";
import Card from "../UI/Card/Card";
import styles from "./MealSelection.module.css";
import MealElement from "./MealElement/MealElement";

const MealSelection = (props) => {
  const meals = [
    {
      name: "Döner Kebab (Chicken)",
      description: "Classic Berlin Döner with salad & sauce",
      price: "4.50",
    },
    {
      name: "Sushi plate",
      description: "Finest fish and veggies",
      price: "15",
    },
    {
      name: "Kumpir",
      description: "Baked potato with cheese, salad and sour cream",
      price: "6.10",
    },
  ];

  const mealItems = meals.map((meal, idx) => (
    <MealElement key={idx} stats={meal} />
  ));
  return (
    <Card style={styles.card}>
      <ul>{mealItems}</ul>
    </Card>
  );
};

export default MealSelection;
