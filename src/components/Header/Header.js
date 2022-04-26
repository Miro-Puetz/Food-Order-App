import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Miros Meals</h1>
      <div>Your Cart</div>
    </header>
  );
};

export default Header;
