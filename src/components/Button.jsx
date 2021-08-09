import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({ onClick, className, outline, children }) => {
  return (
    <button
      onClick={onClick}
      className={classNames("button", className, {
        "button--outline": outline,
      })}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  outline: PropTypes.bool,
  children: PropTypes.node,
};

Button.defaultProps = {
  onClick: () => {},
  className: "",
  outline: false,
  children: "Кнопка",
};

export default Button;
