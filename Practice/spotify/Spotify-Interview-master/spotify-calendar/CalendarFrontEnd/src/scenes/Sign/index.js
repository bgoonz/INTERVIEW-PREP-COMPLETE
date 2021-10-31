import React, { Component } from "react";
import PropTypes from "prop-types";
import Sign from "./components/Sign";
import SignExpanded from "./components/SignExpanded";
import SignCollapsed from "./components/SignCollapsed";
import { connect } from "react-redux";
import LoadingSpinner from "components/LoadingSpinner";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wasClickedLeft: false,
      wasClickedRight: false,
    };
  }

  onReset = () => {
    this.setState({
      wasClickedLeft: false,
      wasClickedRight: false,
    });
  };

  onClickLeft = () => {
    this.setState({ wasClickedLeft: !this.state.wasClickedLeft }, function () {
      if (this.state.wasClickedRight && this.state.wasClickedLeft) {
        this.setState({ wasClickedRight: false });
      }
    });
  };

  onClickRight = () => {
    this.setState(
      { wasClickedRight: !this.state.wasClickedRight },
      function () {
        if (this.state.wasClickedRight && this.state.wasClickedLeft) {
          this.setState({ wasClickedLeft: false });
        }
      }
    );
  };

  render() {
    const { loading } = this.props;
    let modalContent = null;

    if (!this.state.wasClickedLeft && !this.state.wasClickedRight) {
      modalContent = (
        <div className="Modal">
          <Sign type="signIn" onChange={this.onClickLeft}></Sign>
          <Sign type="signUp" onChange={this.onClickRight}></Sign>
        </div>
      );
    } else if (!this.state.wasClickedLeft && this.state.wasClickedRight) {
      modalContent = (
        <div className="Modal">
          <SignCollapsed
            type="signIn"
            onChange={this.onClickLeft}
          ></SignCollapsed>
          <SignExpanded type="signUp"></SignExpanded>
        </div>
      );
    } else if (this.state.wasClickedLeft && !this.state.wasClickedRight) {
      modalContent = (
        <div className="Modal">
          <SignExpanded type="signIn"></SignExpanded>
          <SignCollapsed
            type="signUp"
            onChange={this.onClickRight}
          ></SignCollapsed>
        </div>
      );
    }

    return (
      <div className="Modal">
        {!loading ? (
          <div> {modalContent} </div>
        ) : (
          <div
            style={{
              margin: "auto",
              width: "50%",
              padding: "10px",
            }}
          >
            <LoadingSpinner size={300} />
          </div>
        )}
      </div>
    );
  }
}

Modal.propTypes = {
  onSubmit: PropTypes.func,
};

export default connect(
  (state) => ({ loading: state.userReducer.loading }),
  null
)(Modal);
