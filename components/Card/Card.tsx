import React from "react";

import styles from "./index.module.scss";

export default class Card extends React.Component<
  { text: string },
  { title: string }
> {
  constructor(props: any) {
    super(props);
    this.state = { title: "Main Title" };
  }

  setFirstTitle() {
    this.setState({ title: "First Title" });
  }

  setSecondTitle() {
    this.setState({ title: "Second Title" });
  }

  componentDidMount(): void {
    fetch(
      "http://ddragon.leagueoflegends.com/cdn/12.22.1/data/en_US/champion.json"
    )
      .then((res) => res.json())
      .then((data) => console.log(Object.values(data.data)));
  }

  render() {
    return (
      <div className={styles.main_card}>
        <p>This is a card</p>
        <p>{this.props.text}</p>
        <p>{this.state.title}</p>
        <div className={styles.button_container}>
          <button onClick={() => this.setFirstTitle()}>First Title</button>
          <button onClick={() => this.setSecondTitle()}>Second Title</button>
        </div>
      </div>
    );
  }
}
