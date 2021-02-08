import {
  getProducts as getDummyProducts,
  getSingleProduct as getDummySingleProduct,
} from "./dummyService";

const apiBase = "http://167.172.186.154/api";

const getResource = async (url) => {
  const res = await fetch(`${apiBase}${url}`)
    .then((response) => response.json())
    .then((responseData) => {
      return responseData;
    })
    .catch((err) => console.error(err));
  return res;
};

const getProducts = async () => {
  const res = await getResource("/products/");
  return res;
};

const getSingleProduct = async (id) => {
  const product = await getResource(`/products/${id}`);
  return product;
};

const getAllProducts =
  process.env.NODE_ENV === "development" ? getDummyProducts : getProducts;
const getProduct =
  process.env.NODE_ENV === "development"
    ? getDummySingleProduct
    : getSingleProduct;

export { getAllProducts, getProduct };
