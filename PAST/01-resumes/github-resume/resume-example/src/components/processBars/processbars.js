import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { TimelineMax, TimelineLite, Power2, Elastic, Linear } from 'gsap';
import './processbars.css';

class Processbar extends Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    data: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);
    this.animateProcessbar = this.animateProcessbar.bind(this);
    this.resize = this.resize.bind(this);
    this.state = {
      tl: new TimelineMax()
    };
  }

  resize() {
    const tl = new TimelineLite();

    for (let i = 0, len = this.props.data.length; i < len; i++) {
      const counterEl = this.refs['processcounter-' + i];
      const processbarEl = this.refs['processbar-' + i];

      if (processbarEl) {
        const percentage = this.props.data[i].percentage;
        const fullWidth =
          processbarEl.viewportElement.clientWidth ||
          processbarEl.parentNode.parentNode.clientWidth;
        const calcPercentageWidth = (percentage / 100) * fullWidth;
        tl.to(
          counterEl,
          0.3,
          {
            x: calcPercentageWidth,
            ease: Power2.easeOut
          },
          '-=0.3'
        ).to(
          processbarEl,
          0.5,
          {
            attr: { width: percentage + '%' },
            ease: Power2.easeOut
          },
          '-=0.5'
        );
      }
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    const tl = this.state.tl;
    tl.add(this.animateTitle(), 1);
    tl.add(this.animateColumns(), 1.5);
    tl.add(this.animateProcessbar(), 1.5);
  }

  animateTitle() {
    const tl = new TimelineLite();
    const title = this.refs['title-' + this.props.id];

    tl.set(title, { rotationX: -45 }).to(
      title,
      1,
      {
        y: '0%',
        opacity: 1,
        transformOrigin: '0 50%',
        rotationX: 0,
        ease: Power2.easeOut
      },
      0.2
    );

    return tl;
  }

  animateColumns() {
    const id = this.props.id;
    const tlContainer = new TimelineLite();
    const tl = new TimelineLite();
    const tlL = new TimelineLite();
    const tlR = new TimelineLite();

    tlContainer.set(
      '.processbar-row--container',
      {
        autoAlpha: 1
      },
      1.6
    );

    tlL
      .set('.processbar-left-' + id, {
        autoAlpha: 0,
        x: '-200px'
      })
      .staggerTo(
        '.processbar-left-' + id,
        1,
        { autoAlpha: 1, x: '0%', ease: Elastic.easeOut, easeParams: [0.9, 1] },
        1.4
      );
    tlR
      .set('.processbar-right-' + id, {
        autoAlpha: 0,
        x: '200px'
      })
      .staggerTo(
        '.processbar-right-' + id,
        1,
        { autoAlpha: 1, x: '0%', ease: Elastic.easeOut, easeParams: [0.9, 1] },
        1.4
      );

    tl.add(tlL, 0);
    tl.add(tlR, 0);

    return tl;
  }

  animateProcessbar() {
    const tl = new TimelineLite();
    let counters = [];

    for (let i = 0, len = this.props.data.length; i < len; i++) {
      const counterEl = this.refs['processcounter-' + i];
      const processbarEl = this.refs['processbar-' + i];
      const percentage = this.props.data[i].percentage;
      const fullWidth =
        processbarEl.viewportElement.clientWidth ||
        processbarEl.parentNode.parentNode.clientWidth;
      const calcPercentageWidth = (percentage / 100) * fullWidth;
      counters.push({ score: 0 });

      tl.set(counterEl, {
        autoAlpha: 0,
        scale: 0,
        z: 0.01,
        y: '20px'
      })
        .to(counterEl, 1.5, {
          scale: 1,
          y: '0%',
          autoAlpha: 1,
          ease: Elastic.easeOut,
          easeParams: [1.2, 0.3]
        })
        .to(
          counterEl,
          1.5,
          {
            x: calcPercentageWidth,
            ease: Power2.easeOut
          },
          '-=1.5'
        )
        .to(
          counters[i],
          1.5,
          {
            score: '+=' + percentage,
            roundProps: 'score',
            onUpdate: () => {
              counterEl.children[0].innerHTML = counters[i].score;
            },
            ease: Linear.easeNone
          },
          '-=1.5'
        )
        .to(
          processbarEl,
          1.5,
          {
            attr: { width: percentage + '%' },
            ease: Power2.easeOut
          },
          '-=1.5'
        );
    }

    return tl;
  }

  renderRows(rows, id) {
    return rows.map((row, i) => {
      return (
        <div className="processbar-row" key={i}>
          <div
            className={classnames('processbar-left', 'processbar-left-' + id)}
          >
            <h2>{row.name}</h2>
          </div>
          <div
            className={classnames('processbar-right', 'processbar-right-' + id)}
          >
            <span className="processbar-counter" ref={'processcounter-' + i}>
              <span>0</span>
              <span>%</span>
            </span>
            <div>
              <svg
                viewBox="0 0 622 20"
                preserveAspectRatio="xMidYMid meet"
                className="processbar-svg"
                ref="svg"
                height={this.props.height}
                width="100%"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect height={this.props.height} fill="#CCCCCC" width="100%" />
                <rect
                  height={this.props.height}
                  fill="#FF92F6"
                  width="0"
                  ref={'processbar-' + i}
                />
              </svg>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    const { data, id, title } = this.props;
    return (
      <div className="processbar-container">
        <h2 className="name processbars-header">
          <span ref={'title-' + id}>{title}</span>
        </h2>
        <div className="processbar-row--container">
          {this.renderRows(data, id)}
        </div>
      </div>
    );
  }
}

export default Processbar;
