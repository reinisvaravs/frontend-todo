import React, { useState } from "react";
import styles from "./InputMenu.module.css";
import Cards from "./cards/Cards";
import BottomMenu from "./bottomMenu/BottomMenu";

function InputMenu() {
  const [content, setContent] = useState([]);
  const [name, setName] = useState("");

  return (
    <>
      <p className={styles.p1}>PADLET.COM CLONE</p>
      <Cards content={content} setContent={setContent} setName={setName} />
      <BottomMenu setContent={setContent} />
    </>
  );
}

export default InputMenu;
