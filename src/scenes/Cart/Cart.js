import React, { useContext } from "react";
import Wrapper from "../../components/Wrapper";
import { RootStoreContext } from "../../store/rootStore";

import styles from "./Cart.module.scss";

const Cart = () => {
  const store = useContext(RootStoreContext);

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(store.cart),
  };

  const handlePurchaseClick = () => {
    fetch("​http://167.172.186.154/api/purchase", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <Wrapper>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Cart</h1>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.row}>
              <div className={styles.image}></div>
              <div>Name</div>
              <div>Price</div>
            </div>
          </div>

          {store.cart.map(({ id, name, img_url, price }) => (
            <div className={styles.row} key={id}>
              <div className={styles.image}>
                <img src={img_url} alt={name} />
              </div>
              <div className={styles.value}>{name}</div>
              <div className={styles.value}>{price}</div>
            </div>
          ))}
        </div>
        <button
          type="button"
          className={styles.button}
          onClick={handlePurchaseClick}
        >
          Purchase
        </button>
      </div>
    </Wrapper>
  );
};

export default Cart;
