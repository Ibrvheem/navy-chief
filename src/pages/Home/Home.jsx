import React, { useState, useTransition } from "react";
import styles from "./home.module.css";
import Card from "../../components/card/Card";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const navigate = useNavigate();
  const transition = {
    ease: "easeIn",
    duration: 0.6,
  };
  return (
    <div className={styles.home} style={{ height: "100vh" }}>
      <div className="container">
        <div className={`${styles.topContent} justify-space-btw align-start`}>
          <motion.div className={styles.writing} exit={{ opacity: 0 }} transition={transition}>
            <h1 className={styles.h1}>
              THE CHIEF <br /> OF NAVAL STAFF
            </h1>
            <p>
              “A highly motivated professional naval force capable of shaping the security outcomes within Nigeria’s maritime domain and the littorals including land-based engagements in fulfilment of
              Nigeria’s national interest.”{" "}
            </p>
          </motion.div>
          <img src="./images/logo.svg" alt="" />
        </div>
        <div className={`${styles.middleContent} align-end`} style={{ flexDirection: "column", width: "100%" }}>
          <p>AM GSS pcs fdc(+) BSc MSc</p>
          <h1>VICE ADMIRAL Ei OGALLA</h1>
        </div>
        <div className={`${styles.bottomContent} justify-space-btw `} style={{ marginLeft: "auto", width: "65%", gap: "0.1rem" }}>
          <Card
            image={"target.svg"}
            text={"Educational History"}
            handleClick={() => {
              navigate("/details");
            }}
          />
          <Card image={"target.svg"} text={"Educational History"} />
          <Card image={"target.svg"} text={"Educational History"} />
          <Card image={"target.svg"} text={"Educational History"} />
          <Card image={"target.svg"} text={"Educational History"} />
        </div>
      </div>
      <motion.div
        style={{ backgroundColor: "white", height: "100vh", width: "35%", x: -1000, position: "absolute", top: 0 }}
        exit={{ x: 0 }}
        transition={{ ease: "easeInOut", delay: 0.5, duration: 2 }}
      ></motion.div>
    </div>
  );
}

export default Home;
