import React from "react";
import styles from "../Home/home.module.css";
import Card from "../../components/card/Card";
import { motion } from "framer-motion";

function Details() {
  return (
    <motion.div className={styles.home} style={{ margin: "2rem", backgroundPositionX: "30rem" }} transition={{ ease: "easeOut", delay: 0.5, duration: 2 }}>
      <div className="container">
        <div className={`${styles.topContent} justify-space-btw align-start`} style={{ marginBottom: 0 }}>
          <motion.div className={styles.writing} style={{ opacity: 0, display: "flex", alignItems: "center" }} transition={{ duration: 0.4 }}>
            {/* <h1 className={styles.h1}>
              THE CHIEF <br /> OF NAVAL STAFF
            </h1>
            <p>
              “A highly motivated professional naval force capable of shaping the security outcomes within Nigeria’s maritime domain and the littorals including land-based engagements in fulfilment of
              Nigeria’s national interest.”{" "}
            </p> */}
          </motion.div>
          <img src="./images/logo.svg" alt="" />
        </div>
        <div> </div>
        <div className={`${styles.middleContent} align-center`} style={{ flexDirection: "column", opacity: 1 }} transition={{ duration: 0.4 }}>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            style={{ fontSize: "6rem", fontFamily: "Perpetua Light", color: "white", fontWeight: 100, padding: "0rem 2rem" }}
          >
            VICE <br /> ADMIRAL <br /> EL OGALIA
          </motion.h2>
        </div>
        {/* <div className={`${styles.bottomContent} justify-space-btw`} animate={{ opacity: 0 }}>
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
        </div> */}
      </div>
      <motion.div
        className={`${styles.details} justify-space-btw`}
        style={{ backgroundColor: "white", height: "100vh", width: "39%", x: 0, position: "absolute", top: 0 }}
        transition={{ ease: "easeInOut", delay: 0.5, duration: 2 }}
      >
        <div>
          <motion.h4 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, type: "spring" }}>
            BIODATA OF THE CHEIF OF NAVAL STAFF
          </motion.h4>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 2, type: "spring" }}>
            Admiral Emmanuel Ikechukwu Ogalla was born on 20 December 1968 in Enugu Ezike Igbo Eze north LGA Enugu State, Nigeria. He obtained the WASC from the NMS Zaria in June 1987 where he
            graduated as the best boy in Sciences. He had A1 in all subjects excemotion.pt English language. He is a member of the 39 Regular Course Nigerian Defence Academy Kaduna graduated with a
            BSc in Maths and was awarded sword of honour as the best naval cadet in his course.
          </motion.p>
        </div>
        <div className="align-end">
          <p>Go to Homepage</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Details;
