import React, { useState, useContext } from "react";
import { observer } from "mobx-react";
import { ReactSVG } from "react-svg";
import icon from "./images/cart-icon.svg";
import CartDropdown from "./components/CartDropdown";
import { RootStoreContext } from "../../store/rootStore";

import styles from "./Header.module.scss";

const Header = observer(() => {
  const store = useContext(RootStoreContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen((isOpen) => !isOpen);
  };

  return (
    <header className={styles.wrapper}>
      <div className={styles.cart}>
        <div className={styles.iconWrap} onClick={handleCartClick}>
          <ReactSVG className={styles.icon} src={icon} />
          <span className={styles.counter}>{store.cart.length}</span>
        </div>
        {isCartOpen && (
          <div className={styles.dropdown}>
            <CartDropdown />
          </div>
        )}
      </div>
    </header>
  );
});

export default Header;
