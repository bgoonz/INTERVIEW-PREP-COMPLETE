import React from "react";
import PropTypes from "prop-types";
import CircularProgress from "material-ui/CircularProgress";
import "./LoadingSpinner.css";

const LoadingSpinner = ({ size }) => (
  <div className={"container"}>
    <div className={"progress"}>
      <CircularProgress mode="indeterminate" size={size || 80} />
    </div>
  </div>
);
export default LoadingSpinner;

LoadingSpinner.propTypes = {
  size: PropTypes.number,
};
