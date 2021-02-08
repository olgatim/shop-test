import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import { RootStoreContext } from "../../../../store/rootStore";

import styles from "./CartDropdown.module.scss";

const CartDropdown = observer(() => {
  const store = useContext(RootStoreContext);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {store.cart.length ? (
          <>
            <div className={styles.products}>
              {store.cart.map(({ name, id, price, img_url }, index) => (
                <div className={styles.item} key={name + index}>
                  <div className={styles.image}>
                    <img src={img_url} alt={name} />
                  </div>
                  <div className={styles.body}>
                    <div className={styles.name}> {name}</div>
                    <div className={styles.price}> {price}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link to={`/cart`} className={styles.link}>
              Make an order
            </Link>
          </>
        ) : (
          "Your cart is empty"
        )}
      </div>
    </div>
  );
});

export default CartDropdown;
