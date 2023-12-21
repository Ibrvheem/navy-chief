import React from "react";
import styles from "./card.module.css";

function Card({ image, text, handleClick }) {
  return (
    <div className={`${styles.card} align-center justify-center`} onClick={handleClick}>
      <img src={`/images/${image}`} alt="" />
      <h3>{text}</h3>
    </div>
  );
}

export default Card;
