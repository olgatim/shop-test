import React from "react";
import classnames from "classnames";

import styles from "./Filter.module.scss";

const Filter = ({ data, onClick, currentFilter }) => {
  const filterClasses = classnames(styles.row, {
    [styles.active]: currentFilter === "all",
  });

  const getFIlterClasses = (item) => {
    return classnames(styles.row, {
      [styles.active]: currentFilter === item,
    });
  };
  return (
    <>
      <div className={filterClasses} data-filter="all" onClick={onClick}>
        <div className={styles.value}>All</div>
      </div>
      {data.map((item) => (
        <div
          className={getFIlterClasses(item)}
          key={item}
          data-filter={item}
          onClick={onClick}
        >
          <div className={styles.value}>{item}</div>
        </div>
      ))}
    </>
  );
};

export default Filter;
