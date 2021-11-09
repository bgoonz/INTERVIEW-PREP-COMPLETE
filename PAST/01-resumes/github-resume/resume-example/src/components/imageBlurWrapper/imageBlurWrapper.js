import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { processImage } from '../../common/stackBlur';
import './imageBlurWrapper.css';

/**
 * Image blur wrapper component
 * Loads thumbnail image in canvas and performes
 * blur algoritim to blur image. When bigger image has loaded
 * it hides canvas and shows bigger image
 */
class ImageBlurWrapper extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    txt: PropTypes.string,
    thumbnail: PropTypes.string.isRequired,
    visible: PropTypes.bool,
    blur: PropTypes.string,
    id: PropTypes.number.isRequired,
    overlay: PropTypes.bool,
    overlayTitle: PropTypes.string,
    overlayText: PropTypes.string
  };

  componentDidMount() {
    const { blur, thumbnail } = this.props;
    let img = new Image();
    img.src = thumbnail || 'images/thumbnails/placeholder.png';
    img.onload = () => {
      let canvas = this.refs.canvas;
      processImage(img, canvas, blur || 10);
    };
  }

  loadBigImage(src) {
    let img = new Image();
    img.src = src;
    img.onload = () => {
      this.refs.canvas.parentNode.classList.add('heightAuto');
      this.refs.canvas.classList.add('image-blur--image--hide');
      this.refs.image.classList.add('image-blur--image--show');
    };
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.visible === true;
  }

  render() {
    const {
      src,
      alt,
      className,
      text,
      overlay,
      overlayText,
      overlayTitle,
      visible
    } = this.props;

    if (visible === true) {
      this.loadBigImage(src);
    }

    return (
      <div
        className={classnames('image-blur--wrapper', className)}
        ref="wrapper"
      >
        <figure className="image-blur--wrapper-image">
          <div>
            <img
              src={visible ? src : ''}
              alt={alt}
              className="image-blur--image"
              ref="image"
            />
            <canvas ref="canvas" className="image-blur--canvas" />
          </div>
          {overlay ? (
            <div className="image-blur--wrapper-overlay">
              <h2>{overlayTitle}</h2>
              <p>{overlayText}</p>
            </div>
          ) : null}
        </figure>
        {text ? (
          <figcaption>
            <p>{text}</p>
          </figcaption>
        ) : null}
      </div>
    );
  }
}

export default ImageBlurWrapper;
