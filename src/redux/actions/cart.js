export const addPizzaToCart = (obj) => ({
  type: "ADD_PIZZA_CART",
  payload: obj,
});

export const plusItem = (obj) => ({
  type: "PLUS_CART_ITEM",
  payload: obj,
});

export const minusItem = (obj) => ({
  type: "MINUS_CART_ITEM",
  payload: obj,
});

export const clearCart = () => ({
  type: "CLEAR_CART",
});

export const removeCartItem = (obj) => ({
  type: "REMOVE_CART_ITEM",
  payload: obj,
});
