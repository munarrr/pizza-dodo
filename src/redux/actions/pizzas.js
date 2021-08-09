import axios from "axios";

export const setLoading = (status) => ({
  type: "SET_LOADED",
  payload: status,
});

export const fetchPizzas = (category, { type, order }) => (dispatch) => {
  dispatch(setLoading(false));
  axios
    .get(
      `https://hk-database-react-pizza.herokuapp.com/pizzas?${
        category !== null ? `category=${category}&` : ""
      }_sort=${type}&_order=${order}`
    )
    .then(({ data }) => dispatch(setPizzas(data)));
};

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});
