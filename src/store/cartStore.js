import { makeObservable, observable, computed, action } from "mobx";

const cartStore = () => {
  return makeObservable(
    {
      cart: [],
      get cartList() {
        return this.cart;
      },

      addToCart: function (item) {
        this.cart.push(item);
      },

      removeItem: function (id) {
        this.cart = this.cart.filter((item) => {
          return item.id !== id;
        });
      },
    },
    {
      cart: observable,
      cartList: computed,
      addToCart: action.bound,
      removeItem: action.bound,
    }
  );
};

export { cartStore };
