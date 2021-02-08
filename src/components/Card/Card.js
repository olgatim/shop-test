import React, { useContext } from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { RootStoreContext } from "../../store/rootStore";

import styles from "./Card.module.scss";

const Card = observer(({ data }) => {
  const store = useContext(RootStoreContext);

  const handleAddToCartClick = () => {
    store.addToCart(data);
  };

  const { id, name, price, img_url } = data;

  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <img src={img_url} alt={name} />
      </div>
      <div className={styles.body}>
        <div className={styles.title}>{name}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div className={styles.footer}>
        <Link to={`/product/${id}`} className={styles.link}>
          View
        </Link>
        <button
          type="button"
          onClick={handleAddToCartClick}
          className={styles.button}
        >
          Add
        </button>
      </div>
    </div>
  );
});

export default Card;
