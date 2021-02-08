import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import { RootStoreContext } from "../../store/rootStore";
import { getProduct } from "../../services";

import styles from "./Product.module.scss";

const Product = ({ match }) => {
  const store = useContext(RootStoreContext);
  const {
    params: { id },
  } = match;

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    getProduct(id).then((response) => {
      setData(response);
      setIsLoading(false);
    });
  }, [id]);

  const handleAddToCartClick = () => {
    store.addToCart(data);
  };

  return (
    <Wrapper>
      <div className={styles.header}>
        <Link to="/">Back to homepage</Link>
      </div>
      {!isLoading && (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.preview}>
              <img src={data.img_url} alt={data.name} />
            </div>
          </div>
          <div className={styles.sidebar}>
            <div className={styles.category}>{data.category}</div>
            <h1 className={styles.name}>{data.name}</h1>
            <div className={styles.price}>
              Price: <span>{data.price}</span>
            </div>

            <button
              type="button"
              className={styles.button}
              onClick={handleAddToCartClick}
            >
              Add to cart
            </button>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default Product;
