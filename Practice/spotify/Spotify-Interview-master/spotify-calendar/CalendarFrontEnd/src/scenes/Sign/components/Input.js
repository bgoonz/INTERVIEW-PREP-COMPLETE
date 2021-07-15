import React from "react";
import PropTypes from "prop-types";
import { MdVisibility } from "react-icons/lib/md";

const Input = (props) => {
  let iconVisibility = null;

  if (props.type === "password") {
    iconVisibility = <MdVisibility className="iconVisibility" />;
  }

  return (
    <div className="Input">
      <input
        onChange={props.onChange}
        id={props.type}
        autoComplete="false"
        required
        type={props.type}
        placeholder={props.placeholder}
      />
      {iconVisibility}
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  placeholer: PropTypes.string,
};

export default Input;
