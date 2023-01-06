import styles from "../styles/Home.module.css";
import React from "react";
import Card from "../components/Card/Card";

export default class Home extends React.Component {
  render() {
    return (
      <main className={styles.home}>
        <h1 className={styles.title}>My First Class Component</h1>
        <Card text="Prop Title" />
      </main>
    );
  }
}
