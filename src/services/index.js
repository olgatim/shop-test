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

const getAllProducts = async () => {
  const res = await getResource("/products/");
  return res;
};

const getProduct = async (id) => {
  const product = await getResource(`/products/${id}`);
  return product;
};

export { getAllProducts, getProduct };
