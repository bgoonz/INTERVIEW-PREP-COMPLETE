import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, Switch } from 'react-router-dom';
import * as actionCreators from './common/actions';
import PageSlideEffect from './components/pageSlideEffect';

class RouterWrapper extends Component {
  componentWillMount() {
    this.props.actions.setLanguage('is');
    if (!window.location || window.location.pathname !== '/') {
      this.props.actions.removePageLoading();
    } else {
      document.body.classList.remove('loading');
    }
  }

  render() {
    return (
      <div>
        <Switch>{this.props.children}</Switch>
        <PageSlideEffect
          type={this.props.common.pageRevealerType}
          visible={this.props.common.pageRevealer}
        />
      </div>
    );
  }
}

/**
 * Maps state to components props
 *
 * @param {Object} state - Application state
 * @returns {Object}
 * @author Snær Seljan Þóroddsson
 */
function mapStateToProps(state) {
  return { common: state.common };
}

/**
 * Maps dispatch to components props
 *
 * @param {Object} dispatch - Redux dispatch medhod
 * @returns {Object}
 * @author Snær Seljan Þóroddsson
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(RouterWrapper)
);
