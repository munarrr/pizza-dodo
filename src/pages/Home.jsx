import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import { Categories, SortPopup, PizzaBlock, PizzaLoading } from "../components";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";

function Home() {
  const dispatch = useDispatch();
  const { items, isLoaded, category, sortBy, cartItems } = useSelector(
    ({ pizzas: { items, isLoaded }, filters: { category, sortBy }, cart }) => ({
      items,
      isLoaded,
      category,
      sortBy,
      cartItems: cart.items,
    })
  );

  useEffect(() => dispatch(fetchPizzas(category, sortBy)), [
    category,
    sortBy,
    dispatch,
  ]);

  const onSelectCategory = React.useCallback(
    (index) => dispatch(setCategory(index)),
    [dispatch]
  );

  const onSelectSortBy = React.useCallback((obj) => dispatch(setSortBy(obj)), [
    dispatch,
  ]);

  const handleAddPizzaToCart = React.useCallback(
    (obj) => dispatch(addPizzaToCart(obj)),
    [dispatch]
  );
 
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
        />
        <SortPopup
          activePopupItem={sortBy.type}
          onClickPopup={onSelectSortBy}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((props) => (
              <PizzaBlock
                {...props}
                onClickAddPizza={handleAddPizzaToCart}
                countPizzas={
                  cartItems[props.id] && cartItems[props.id].totalCount
                }
                key={props.id}
              />
            ))
          : [...Array(12)].map((_, index) => <PizzaLoading key={index} />)}
      </div>
    </div>
  );
}

Home.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default Home;
