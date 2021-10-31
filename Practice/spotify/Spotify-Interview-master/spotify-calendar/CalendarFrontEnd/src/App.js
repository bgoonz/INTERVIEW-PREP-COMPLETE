import React from "react";
import PropTypes from "prop-types";
import { ConnectedRouter } from "connected-react-router";
import Routes from "./routes";

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  );
};

App.propTypes = {
  history: PropTypes.object,
};

export default App;
