import React from "react";
import { Route, Switch } from "react-router";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { createMuiTheme } from "@material-ui/core/styles";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import NavigationPanel from "components/Navigation";
import NotificationContainer from "components/Notifications";

import Sign from "scenes/Sign";
import Home from "scenes/Home";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const routes = ({ notifications }) => (
  <div>
    <Switch>
      <MuiThemeProvider theme={theme}>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          <NotificationContainer />
          <div className="App_test">
            <NavigationPanel />
            <Route exact path="/" component={Home} />
            <Route exact path="/sign" component={Sign} />
          </div>
        </ReactCSSTransitionGroup>
      </MuiThemeProvider>
    </Switch>
  </div>
);

export default routes;
