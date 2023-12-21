import React from "react";
import styles from "./card.module.css";
import { useLocation } from "react-router-dom";

function Card({ image, text, handleClick, link, path }) {
  console.log(location.pathname);
  return (
    <div className={`${styles.card} align-center justify-center`} onClick={handleClick} style={{ backgroundColor: path == link ? "#d1c62a" : null }}>
      <img src={`/images/${image}`} alt="" />
      <h3>{text}</h3>
    </div>
  );
}

export default Card;
