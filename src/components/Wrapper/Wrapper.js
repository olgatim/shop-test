import React from "react";
import Header from "../Header";

import styles from "./Wrapper.module.scss";

const Wrapper = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default Wrapper;
