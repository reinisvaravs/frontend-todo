import React, { useState } from "react";
import styles from "./InputMenu.module.css";
import Cards from "./cards/Cards";
import BottomMenu from "./bottomMenu/BottomMenu";

import react from "../assets/react.svg"
import vite from "../assets/vite.png"
import node from "../assets/node-js.svg"
import express from "../assets/express.png"
import firebase from "../assets/firebaseLogo.png"

function InputMenu() {
  const [content, setContent] = useState([]);
  const [name, setName] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);

  const setSortedContent = (newContent) => {
    setContent((prevContent) => {
      const sortedContent = [...newContent].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      return JSON.stringify(prevContent) === JSON.stringify(sortedContent) // Prevent unnecessary re-renders
        ? prevContent
        : sortedContent;
    });
  };

  return (
    <>
      <p className={styles.p1}>TO-DO APP</p>
      <div className={styles.iconsDiv}>
        <img src={react} className={styles.iconReact} />
        <img src={vite} className={styles.iconVite} />
        <img src={node} className={styles.iconNode} />
        <img src={express} className={styles.iconEx} />
        <img src={firebase} className={styles.iconFirebase} />
      </div>

      <Cards
        content={content}
        setContent={setSortedContent}
        setName={setName}
        setSelectedCard={setSelectedCard}
      />
      <BottomMenu
        setContent={setSortedContent}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
      />
    </>
  );
}

export default InputMenu;
