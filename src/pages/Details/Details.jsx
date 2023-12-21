import React from "react";
import styles from "./details.module.css";

function Details() {
  return (
    <div className={styles.details}>
      <div className={`${styles.container} justify-space-btw`} style={{ position: "relative" }}>
        <div className={`${styles.topContent} justify-space-btw align-end`} style={{ width: "90", backgroundColor: "red" }}>
          <img src="./images/logo.svg" alt="" />
        </div>
        <div className={styles.left}>
          <h4>BIODATA OF THE CHEIF OF NAVAL STAFF</h4>
          <p>
            ear Admiral Emmanuel Ikechukwu Ogalla was born on 20 December 1968 in Enugu Ezike Igbo Eze north LGA Enugu State, Nigeria. He obtained the WASC from the NMS Zaria in June 1987 where he
            graduated as the best boy in Sciences. He had A1 in all subjects except English language. He is a member of the 39 Regular Course Nigerian Defence Academy Kaduna graduated with a BSc in
            Maths and was awarded sword of honour as the best naval cadet in his course.{" "}
          </p>
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
}

export default Details;
