import logo from "./logo.svg";
import styles from "./App.module.css";

import Header from "./components/Header/Header";
import Card from "./components/UI/Card/Card";
import MealSelection from "./components/MealSelection/MealSelection";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles["background-image"]}>
        <Header />
      </div>
      <Card style={styles.intro}>
        <h1>Delicious Food</h1>
        <p>
          Enjoy a meal from our finest selection of vegetables, meat and fresh
          fruit! All our meals are cooked with high-quality ingredients by the
          best cooks in town.
        </p>
      </Card>
      <MealSelection></MealSelection>
    </div>
  );
}

export default App;
