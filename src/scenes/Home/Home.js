import React, { useEffect, useState } from "react";
import classnames from "classnames";
import Wrapper from "../../components/Wrapper";
import { getAllProducts } from "../../services";
import Filter from "./components/Filter";
import Card from "../../components/Card";
import useResize from "hooks/useResize";

import styles from "./Home.module.scss";

const DESKTOP_WIDTH = 992;

const getUniqueValues = (array, value) => {
  const result = [...new Set(array.map((item) => item[value]))];

  return result;
};

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState();
  const [filter, setFilter] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState();

  const width = useResize();

  const filterClasses = classnames(styles.filerWrap, {
    [styles.filterOpen]: width < DESKTOP_WIDTH && isFilterOpen,
  });

  useEffect(() => {
    getAllProducts().then((response) => {
      setProducts(response);
      setFilteredProducts(response);
      setIsLoading(false);
    });
  }, []);

  const handleFilterClick = (e) => {
    const value = e.currentTarget.getAttribute("data-filter");
    setFilter(value);

    if (value === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((item) => item.category === value));
    }
    setIsFilterOpen(false);
  };

  const handleFilterLabelClick = () => {
    setIsFilterOpen((isOpen) => !isOpen);
  };

  return (
    <Wrapper>
      <div className={styles.wrapper}>
        <div className={styles.aside}>
          <div className={StyleSheet.filters}>
            <div
              className={styles.filterLabel}
              onClick={width < DESKTOP_WIDTH ? handleFilterLabelClick : null}
            >
              Category <span className={styles.arrow}></span>
            </div>
            <div className={filterClasses}>
              {!isLoading && (
                <Filter
                  data={getUniqueValues(products, "category")}
                  onClick={handleFilterClick}
                  currentFilter={filter}
                />
              )}
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.products}>
            {!isLoading &&
              filteredProducts.map((item) => (
                <div className={styles.card} key={item.name}>
                  <Card data={item} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
