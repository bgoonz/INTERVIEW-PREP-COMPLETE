import React, { Component } from "react";
import PropTypes from "prop-types";
import { Motion, spring } from "react-motion";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import { signInAction, createUserThunk } from "actions";
import { connect } from "react-redux";

class SignExpanded extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flexState: false,
      animIsFinished: false,
      email: "",
      password: "",
    };
    this.onSubmitSignUp = this.onSubmitSignUp.bind(this);
    this.onSubmitSignIn = this.onSubmitSignIn.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ flexState: !this.state.flexState });
  }

  isFinished = () => {
    this.setState({ animIsFinished: true });
  };

  onSubmitSignUp(e) {
    e.preventDefault();
    const { createUser } = this.props;
    const { email, password } = this.state;
    createUser(email, password);
  }

  onSubmitSignIn(e) {
    e.preventDefault();
    const { email, password } = this.state;
    const { signOn } = this.props;
    signOn(email, password);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  render() {
    const { type } = this.props;
    const { flexState } = this.state;
    return (
      <Motion
        style={{
          flexVal: spring(flexState ? 8 : 1),
        }}
        onRest={this.isFinished}
      >
        {({ flexVal }) => (
          <div
            className={type === "signIn" ? "signInExpanded" : "signUpExpanded"}
            style={{
              flexGrow: `${flexVal}`,
            }}
          >
            <Motion
              style={{
                opacity: spring(flexState ? 1 : 0, {
                  stiffness: 300,
                  damping: 17,
                }),
                y: spring(flexState ? 0 : 50, { stiffness: 100, damping: 17 }),
              }}
            >
              {({ opacity, y }) => (
                <form
                  onSubmit={
                    type === "signIn"
                      ? this.onSubmitSignIn
                      : this.onSubmitSignUp
                  }
                  className="logForm"
                  style={{
                    WebkitTransform: `translate3d(0, ${y}px, 0)`,
                    transform: `translate3d(0, ${y}px, 0)`,
                    opacity: `${opacity}`,
                  }}
                >
                  <h2>
                    {this.props.type === "signIn" ? "SIGN IN" : "SIGN UP"}
                  </h2>
                  <Input
                    id="login"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder="LOGIN"
                  />
                  <Input
                    id="password"
                    type="password"
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder="PASSWORD"
                  />
                  <SubmitButton type="submit"></SubmitButton>
                  <a href="url" className="forgotPass">
                    {this.props.type === "signIn" ? "Forgot password?" : ""}
                  </a>
                </form>
              )}
            </Motion>
          </div>
        )}
      </Motion>
    );
  }
}

SignExpanded.PropTypes = {
  type: PropTypes.string,
};

export default connect(null, (dispatch) => ({
  signOn: (email, password) => dispatch(signInAction(email, password)),
  createUser: (email, password) => dispatch(createUserThunk(email, password)),
}))(SignExpanded);
