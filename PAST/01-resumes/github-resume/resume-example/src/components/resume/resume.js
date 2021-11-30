import React, { Component } from 'react';
import { TimelineLite, Power2 } from 'gsap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, Link } from 'react-router-dom';
import classnames from 'classnames';
import ProcessBarsList from '../processBarsList';
import Projects from '../projects';
import Button from '../button';
import Evenodd from '../evenodd';
import Nav from '../nav';
import WaveSvg from '../waveSvg';
import * as actionCreators from '../../common/actions';
import { withinViewport } from '../../common/utils';
import './resume.css';

class Resume extends Component {
  constructor(props) {
    super(props);
    const { processbars, nav } = this.props.translations;
    this.back = this.back.bind(this);
    this.removeHiddenClass = this.removeHiddenClass.bind(this);

    this.state = {
      tl: new TimelineLite(),
      processbarVisible: processbars.map(() => false),
      sectionsVisible: [false, false, false],
      projectsVisible: false,
      imagesVisible: [false, false, false],
      linksState: nav.map((link, i) => {
        return link.active;
      })
    };
  }

  componentDidMount() {
    this.initElementInViewportChecker();
    const { back, title } = this.refs;
    const { tl } = this.state;
    let text = title.parentNode.nextSibling;
    this.animateTitle(title, tl);
    tl.to(back, 1, { x: '0%', opacity: 1, ease: Power2.easeOut }, 0.2).pause();
    tl.to(
      text,
      1,
      { y: '0%', opacity: 1, ease: Power2.easeOut },
      '-=0.4'
    ).play();
  }

  componentWillUnmount() {
    withinViewport(true);
  }

  initElementInViewportChecker() {
    const self = this;
    let cnt = 0;
    const maxCount = document.querySelectorAll('.onscroll-reveal').length - 4;
    let currentSection = 0;
    let allSectionsAnimated = false;

    withinViewport(null, 'onscroll-reveal', 'inViewport', (isVisible, el) => {
      if (isVisible) {
        if (el.classList.contains('resume-section')) {
          const id = parseInt(el.attributes['data-navid'].value, 10);

          if (currentSection !== id) {
            currentSection = id;
            this.setActiveNavLink(id);
          }
        }
      }

      if (isVisible && !el.isAnimated && !allSectionsAnimated) {
        const { imagesVisible, processbarVisible } = this.state;

        if (el.classList.contains('processbars')) {
          this.changeStateVisibility(
            el,
            processbarVisible,
            'processbarVisible',
            'processbar'
          );

          el.isAnimated = true;
          cnt++;
        }

        if (el.classList.contains('images-container')) {
          this.changeStateVisibility(
            el,
            imagesVisible,
            'imagesVisible',
            'images-container'
          );

          el.isAnimated = true;
          cnt++;
        }

        if (el.classList.contains('projects-wrapper')) {
          this.setState((prevState, props) => {
            return { projectsVisible: true };
          });

          el.isAnimated = true;
          cnt++;
        }

        if (el.classList.contains('resume-section')) {
          const id = el.attributes['data-navid'].value;
          const row = self.refs['rows' + id];
          if (row) {
            self.animateSections(row.children, 3);
            el.isAnimated = true;
          }
        }

        if (cnt === maxCount) {
          allSectionsAnimated = true;
        }
      }
    });
  }

  setActiveNavLink(id) {
    let links = this.state.linksState.map(() => false);
    links[id] = true;

    this.setState((prevState, props) => {
      return { linksState: links };
    });
  }

  changeStateVisibility(el, statePropVal, statePropName, className) {
    let newArr = [...statePropVal];
    let newStateProp = {};

    for (let i = 0, len = statePropVal.length; i < len; i++) {
      if (el.classList.contains(className + i) && !newArr[i]) {
        newArr[i] = true;
      }
    }

    newStateProp[statePropName] = newArr;
    this.setState(() => newStateProp);
  }

  /**
   * Animates section content
   */
  animateSections(rows, indexMax, tl) {
    if (rows.length > 0) {
      tl = tl ? tl : new TimelineLite();
      let extraDelay = 0;
      const title =
        rows[0].parentNode && rows[0].parentNode.previousSibling
          ? rows[0].parentNode.previousSibling
          : null;

      if (title) {
        this.animateTitle(title.children[0], tl);
        if (!indexMax) {
          extraDelay = 0.8;
        }
      }

      const len = indexMax || rows.length;

      for (let i = 0; i < len; i++) {
        const cols = rows[i].children;
        for (let j = 0, len = cols.length; j < len; j++) {
          const delayBetween = 0.4 + (i + 1) / 10 + (j + i + 1) / 10;
          tl.to(
            cols[j],
            1,
            { y: '0%', opacity: 1, ease: Power2.easeOut },
            delayBetween + extraDelay
          );
        }
      }

      tl.play();
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
    this.refs['images-container0'].classList.add('fadeOut');
    this.state.tl.timeScale(4).reverse();
    this.props.actions.revealAnimationBackward();
    setTimeout(this.props.history.push, 1500, '/');
  }

  renderSection(section, index, last) {
    const { more } = this.props.translations;
    const rows = section.rows ? this.renderRows(section.rows, index) : null;
    const colImages = this.renderColImages(section.images, index);

    return (
      <div
        className={classnames('resume-section onscroll-reveal')}
        data-navid={index}
        key={index}
        ref={'section' + index}
      >
        <div>
          <h1 className="name visible relative">
            <span ref={index === 0 ? 'title' : ''}>{section.title}</span>
          </h1>
          {rows ? (
            <div className="resume-section--row" ref={'rows' + index}>
              {rows}
              {rows.length > 3 ? (
                <div className="text-center">
                  <button
                    ref={'morebutton' + index}
                    className="more"
                    onClick={e => this.removeHiddenClass(e, index, rows)}
                  >
                    {more}
                  </button>
                </div>
              ) : null}
            </div>
          ) : null}
          {section.text ? (
            <div
              className={classnames(
                'resume-section--row',
                index === 0 ? 'first' : ''
              )}
            >
              <div className="resume-row">
                <p className="max-1000 text-section">{section.text}</p>
              </div>
            </div>
          ) : null}
          {colImages ? colImages : null}
        </div>
        <WaveSvg />
      </div>
    );
  }

  renderColImages(images, index) {
    const { imagesVisible } = this.state;
    let left = [];
    let right = [];

    for (let i = 0, len = images.length; i < len; i++) {
      if (i % 2 === 0) {
        left.push(images[i]);
      } else {
        right.push(images[i]);
      }
    }

    return (
      <div
        className={classnames(
          'onscroll-reveal',
          'images-container',
          'images-container' + index
        )}
        ref={'images-container' + index}
      >
        <Evenodd
          left={left}
          right={right}
          type={index % 2 !== 0 ? 'odd' : 'even'}
          visible={imagesVisible[index]}
        />
      </div>
    );
  }

  renderRows(rows, index) {
    return rows.map((row, i) => {
      const hidden =
        !this.state.sectionsVisible[index] && i > 2 ? 'hidden' : '';

      return (
        <div className={classnames('resume-row', hidden)} key={'row-' + i}>
          <div className="resume-left">
            <h2>{row.title}</h2>
            <h2>{row.secondTitle}</h2>
          </div>
          <div className="resume-right">
            <p>{row.content}</p>
          </div>
        </div>
      );
    });
  }

  /**
   * Removes hidden class from row and starts animation on section texts
   */
  removeHiddenClass(e, index, rows) {
    e.preventDefault();
    const newArr = [...this.state.sectionsVisible];
    newArr[index] = true;
    let newRows = [];
    rows = this.refs['rows' + index].children;

    for (let i = 3; i < rows.length; i++) {
      const row = rows[i];

      if (row.className.indexOf('hidden') > 1) {
        newRows.push(rows[i]);
      }
    }

    const button = this.refs['morebutton' + index];
    button.classList.add('fadeOutButton');

    setTimeout(() => {
      button.classList.add('hidden');
      this.setState((prevState, props) => {
        return { sectionsVisible: newArr };
      });
    }, 250);
    this.animateSections(newRows);
  }

  renderProcessbarsList(processbars, processbarVisible, index) {
    return (
      <div className="resume-section onscroll-reveal" data-navid={index}>
        <div>
          <ProcessBarsList
            processbars={processbars}
            visibleArr={processbarVisible}
            title={processbars[0].mainTitle}
          />
        </div>
        <WaveSvg />
      </div>
    );
  }

  renderProjects(projects, index) {
    const { projectsVisible } = this.state;
    return (
      <div
        className="resume-section onscroll-reveal projects-wrapper"
        data-navid={index}
      >
        <div>
          <Projects data={projects} visible={projectsVisible} />
        </div>
      </div>
    );
  }

  render() {
    const { translations } = this.props;
    const {
      processbars,
      career,
      education,
      projects,
      about,
      nav
    } = translations;
    const { processbarVisible, linksState } = this.state;

    return (
      <div>
        <Link to="/" onClick={ev => this.back(ev)}>
          <div
            className={classnames(
              'job-application--button-container',
              'button-left',
              'button-left--offset',
              'button-back--fixed'
            )}
            ref="back"
          >
            <Button text={translations.back} />
          </div>
        </Link>
        <Nav links={nav} linksState={linksState} />
        <div className="resume-container" ref="container">
          {this.renderSection(about, 0)}
          {this.renderSection(education, 1)}
          {this.renderSection(career, 2)}
          {this.renderProcessbarsList(processbars, processbarVisible, 3)}
          {this.renderProjects(projects, 4)}
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
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Resume)
);
