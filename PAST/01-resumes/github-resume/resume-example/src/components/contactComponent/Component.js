import React, { Component } from 'react';
import { TimelineLite, Power2, Elastic } from 'gsap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, Link } from 'react-router-dom';
import classnames from 'classnames';
import Button from '../button';
import * as actionCreators from '../../common/actions';
import './contactComponent.css';

class ContactComponent extends Component {
  constructor(props) {
    super(props);
    this.back = this.back.bind(this);

    this.state = {
      tl: new TimelineLite()
    };
  }

  componentDidMount() {
    const { back, title, text, button } = this.refs;
    const { tl } = this.state;
    this.animateTitle(title, tl);
    tl.to(back, 1, { x: '0%', opacity: 1, ease: Power2.easeOut }, 0.2).pause();
    tl
      .to(text, 1, { y: '0%', opacity: 1, ease: Power2.easeOut }, '-=0.8')
      .to(button, 0.4, { scale: 1, opacity: 1, ease: Power2.easeOut }, '-=0.6')
      .play();

    const links = text.children[0].children;
    for (let i = 0; i < links.length; i++) {
      setTimeout(() => {
        links[i].classList.add('reveal-text');
      }, (i + 1) * 800);
    }
  }

  /**
   * Animates section title
   */
  animateTitle(title, tl) {
    return tl.set(title, { rotationX: -45 }).to(
      title,
      1.5,
      {
        y: '0%',
        opacity: 1,
        transformOrigin: '0 50%',
        rotationX: 0,
        ease: Power2.easeOut
      },
      0.5
    );
  }

  back(ev) {
    ev.preventDefault();
    this.state.tl.timeScale(4).reverse();
    this.props.actions.revealAnimationBackward();
    setTimeout(this.props.history.push, 1500, '/');
  }

  emailHandler(email) {
    const tl = new TimelineLite();
    const { svg } = this.refs;
    tl
      .to(svg, 1, {
        x: '-15px',
        y: '-15px',
        ease: Elastic.easeIn
      })
      .to(svg, 1, {
        x: '1000px',
        y: '-1000px',
        ease: Power2.easeOut
      })
      .set(svg, {
        x: 0,
        y: 0
      });

    setTimeout(() => {
      window.location.href = 'mailto:' + email;
    }, 2000);
    return false;
  }

  render() {
    const { translations } = this.props;
    const { email, back, contact: { text, buttonText, title } } = translations;

    return (
      <div>
        <Link to="/" onClick={ev => this.back(ev)}>
          <div
            className={classnames(
              'job-application--button-container',
              'button-left',
              'button-left--offset'
            )}
            ref="back"
          >
            <Button text={back} />
          </div>
        </Link>
        <div className="resume-container" ref="container">
          <div className="resume-section">
            <div>
              <h1 className="name visible relative text-center no-padding">
                <span ref="title">{title}</span>
              </h1>
              <div className="resume-section--row max-768">
                <div className="resume-row hidden-element" ref="text">
                  <p
                    className="text-section text-center"
                    dangerouslySetInnerHTML={{ __html: text }}
                  />
                </div>
                <div
                  className="resume-row flex-center email-button-wrapper"
                  ref="button"
                >
                  <Button
                    text={buttonText}
                    onClick={() => this.emailHandler(email)}
                    className="max-width-300 pr-60"
                  >
                    <span className="plane-container" ref="svg">
                      <svg className="icon-paperplane">
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="#icon-paperplane"
                        />
                      </svg>
                    </span>
                  </Button>

                </div>
              </div>
            </div>
          </div>
        </div>
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
  return { common: state.common, translations: state.common.translations };
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
  connect(mapStateToProps, mapDispatchToProps)(ContactComponent)
);
