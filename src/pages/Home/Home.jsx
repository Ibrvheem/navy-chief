import React, { useState } from "react";
import styles from "./home.module.css";
import Card from "../../components/card/Card";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/details");
  }, 3000);
  return (
    <motion.div
      className={styles.home}
      style={{ height: "100vh" }}
      intial={{ height: "100vh" }}
      animate={{ height: "95vh", margin: "2rem", backgroundPositionX: "30rem" }}
      transition={{ ease: "easeOut", delay: 0.5, duration: 2 }}
    >
      <motion.div className="container">
        <motion.div className={`${styles.topContent} justify-space-btw align-start`}>
          <motion.div className={styles.writing} animate={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            <motion.h1 className={styles.h1}>
              THE CHIEF <br /> OF NAVAL STAFF
            </motion.h1>
            <motion.p>
              “A highly motivated professional naval force capable of shaping the security outcomes within Nigeria’s maritime domain and the littorals including land-based engagements in fulfilment of
              Nigeria’s national interest.”{" "}
            </motion.p>
          </motion.div>
          <img src="./images/logo.svg" alt="" />
        </motion.div>
        <motion.div className={`${styles.middleContent} align-end`} style={{ flexDirection: "column", width: "100%" }} animate={{ opacity: 0 }} transition={{ duration: 0.4 }}>
          <motion.p>AM GSS pcs fdc(+) BSc MSc</motion.p>
          <motion.h1>VICE ADMIRAL Ei OGALLA</motion.h1>
        </motion.div>
        <motion.div className={`${styles.bottomContent} justify-space-btw `} style={{ marginLeft: "auto", width: "60%" }} animate={{ opacity: 0 }}>
          <Card
            image={"target.svg"}
            text={"Educational History"}
            handleClick={() => {
              console.log("hello");
            }}
          />
          <Card image={"target.svg"} text={"Educational History"} />
          <Card image={"target.svg"} text={"Educational History"} />
          <Card image={"target.svg"} text={"Educational History"} />
          <Card image={"target.svg"} text={"Educational History"} />
        </motion.div>
      </motion.div>
      <motion.div
        style={{ backgroundColor: "white", height: "100vh", width: "39%", x: -1000, position: "absolute", top: 0 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeInOut", delay: 0.5, duration: 2 }}
      ></motion.div>
    </motion.div>
  );
}

export default Home;
