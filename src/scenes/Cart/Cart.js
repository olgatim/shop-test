import React, { useContext } from "react";
import { Link } from "react-router-dom";
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
    fetch("http://167.172.186.154/api/purchase", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const getTotal = () => {
    var total = store.cart
      .map((item) => item.price)
      .reduce(function (a, b) {
        return (+a + +b).toFixed(2);
      }, 0);

    return total;
  };

  return (
    <Wrapper>
      <div className={styles.wrapper}>
        <Link to="/">Back to homepage</Link>
        <h1 className={styles.title}>Cart</h1>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.row}>
              <div className={styles.image}></div>
              <div>Name</div>
              <div>Price</div>
            </div>
          </div>

          {store.cart.map(({ id, name, img_url, price }, index) => (
            <div className={styles.row} key={name + index}>
              <div className={styles.image}>
                <Link to={`/product/${id}`} className={styles.link}>
                  <img src={img_url} alt={name} />
                </Link>
              </div>
              <div className={styles.value}>{name}</div>
              <div className={styles.value}>{price}</div>
            </div>
          ))}
        </div>
        <div className={styles.total}>Total: {getTotal()}</div>
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
