import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as routes from "constants/routes";
import logo from "./logo.svg";
import Paper from "@material-ui/core/Paper";
import { Card, CardText } from "material-ui/Card";
import Button from "@material-ui/core/Button";
import { signOutThunk } from "actions";
import { connect } from "react-redux";

class NavigationPanel extends Component {
  onClickSignOut = () => {
    this.props.signOutAction();
  };

  render() {
    const { user } = this.props;
    return (
      <Paper>
        <Card>
          <header className="App-header">
            <div className="dots">
              <Link to={routes.LANDING}>
                <img src={logo} className="App-logo" alt="logo" />
              </Link>

              <Link to={routes.LANDING}>
                {" "}
                <CardText>
                  {" "}
                  <h2> Home </h2>{" "}
                </CardText>{" "}
              </Link>
              {user == null ? (
                <Link to={routes.SIGN}>
                  {" "}
                  <CardText>
                    {" "}
                    <h2> Sign Up Sign In </h2>{" "}
                  </CardText>{" "}
                </Link>
              ) : (
                <Button size="medium" onClick={this.onClickSignOut}>
                  <h2> Sign Out </h2>
                </Button>
              )}
            </div>
            <div style={{ flex: 2 }}></div>
          </header>
        </Card>
      </Paper>
    );
  }
}

export default connect(
  (state) => ({ user: state.userReducer.user }),
  (dispatch) => ({ signOutAction: () => dispatch(signOutThunk()) })
)(NavigationPanel);
