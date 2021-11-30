import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { TimelineLite, Elastic, Power2 } from 'gsap';
import classnames from 'classnames';
import ImageBlurWrapper from '../imageBlurWrapper';
import './projects.css';

class Projects extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    visible: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      tl: new TimelineLite(),
      hasShown: false
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.hasShown === false) {
      this.setState((prevState, props) => {
        return { hasShown: true };
      });

      this.animateTitle(this.refs.title.children[0]);

      setTimeout(() => {
        this.animateComponent();
      }, 1200);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.visible && !nextState.hasShown;
  }

  animateComponent() {
    const { tl } = this.state;
    const children = this.refs.container.children;
    let headers = [];
    let images = [];

    for (let i = 0, len = children.length; i < len; i++) {
      if (children[i].tagName !== 'H1') {
        headers.push(children[i].children[0]);

        const temp = children[i].children[1].children;
        for (let j = 0, len = temp.length; j < len; j++) {
          if (temp[j].children[0]) {
            images.push(temp[j].children[0]);
          }
        }
      }
    }

    tl.staggerTo(
      headers,
      1.5,
      {
        y: '0%',
        autoAlpha: 1,
        ease: Elastic.easeOut,
        easeParams: [0.9, 1]
      },
      1
    ).staggerTo(
      images,
      1.5,
      {
        y: '0%',
        autoAlpha: 1,
        ease: Elastic.easeOut,
        easeParams: [0.9, 1]
      },
      0.1,
      0.3
    );
  }

  renderHobbyProjects(projects) {
    const { visible } = this.props;
    return projects.map((project, i) => {
      const { id, url, image, thumbnail, text, title, titleText } = project;

      return (
        <a
          href={url}
          title={text}
          key={'project-image' + i}
          className="project"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="even">
            <ImageBlurWrapper
              id={id}
              src={'images/' + image}
              thumbnail={'images/' + thumbnail}
              alt={text}
              text={text}
              overlay={true}
              overlayTitle={title}
              overlayText={titleText}
              visible={visible}
            />
          </div>
        </a>
      );
    });
  }

  /**
   * Animates section title
   */
  animateTitle(title) {
    const tl = new TimelineLite();
    tl.set(title, { rotationX: -45 }).to(
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

  renderSection(sections) {
    const { visible } = this.props;

    return sections.map((section, i) => {
      const { title, projects, text } = section;
      const titleClass = i === 1 ? 'work-header' : '';

      return (
        <div key={'project-' + i}>
          <h2 className={classnames('project-header', titleClass)}>
            <span>{title}</span>
          </h2>
          <div className="image-blur--container">
            {i === 0 ? (
              <Fragment>
                {this.renderHobbyProjects(projects)}
                <a
                  href={
                    'https://github.com/snaerth/create-react-component-folder/'
                  }
                  title={text}
                  key="project-image-5"
                  className="project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="even">
                    <ImageBlurWrapper
                      id={5}
                      src="images/crcf.png"
                      alt="Create react component folder"
                      text="Hjálpartól til að búa til möppu strúktur fyrir React eða React Native með einni skipun"
                      overlay={true}
                      overlayTitle="Create react component folder (2018)"
                      visible={visible}
                    />
                  </div>
                </a>
              </Fragment>
            ) : null}

            {i === 1 ? (
              <p
                className="work-text"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            ) : null}
          </div>
        </div>
      );
    });
  }

  render() {
    const { data, visible } = this.props;

    return (
      <div>
        <h1 className="name visible relative name-project" ref="title">
          <span>{data[0].mainTitle}</span>
        </h1>
        <div className="projects-list-container" ref="container">
          {visible ? this.renderSection(data) : null}
        </div>
      </div>
    );
  }
}

export default Projects;
