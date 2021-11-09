if (typeof window === 'undefined') {
  global.window = {};
}

// requestAnimationFrame
// http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
const _requestAnimationFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame;

// Throttle http://underscorejs.org/#throttle
function throttle(func, wait, options) {
  const _ = {
    now:
      Date.now ||
      function() {
        return new Date().getTime();
      },
  };
  let context, args, result;
  let timeout = null;
  let previous = 0;
  if (!options) {
    options = {};
  }
  const later = () => {
    previous = options.leading === false ? 0 : _.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) {
      context = args = null;
    }
  };
  return () => {
    const now = _.now();
    if (!previous && options.leading === false) {
      previous = now;
    }
    const remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);

      if (!timeout) {
        context = args = null;
      }
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
}

// Check visibility of the element in the viewport
function checkVisibility(elem) {
  const viewportSize = getViewportSize();
  const currentScroll = getCurrentScroll();
  const elemInfo = getElemInfo(elem);
  const spaceOffset = 0.2;
  const elemHeight = elemInfo.height;
  const elemWidth = elemInfo.width;
  const elemTop = elemInfo.top;
  const elemLeft = elemInfo.left;
  const elemBottom = elemTop + elemHeight;
  const elemRight = elemLeft + elemWidth;

  const checkBoundaries = () => {
    // Defining the element boundaries and extra space offset
    const top = elemTop + elemHeight * spaceOffset;
    const left = elemLeft + elemWidth * spaceOffset;
    const bottom = elemBottom - elemHeight * spaceOffset;
    const right = elemRight - elemWidth * spaceOffset;

    // Defining the window boundaries and window offset
    const wTop = currentScroll.y + 0;
    const wLeft = currentScroll.x + 0;
    const wBottom = currentScroll.y - 0 + viewportSize.height;
    const wRight = currentScroll.x - 0 + viewportSize.width;

    // Check if the element is within boundary
    return top < wBottom && bottom > wTop && left > wLeft && right < wRight;
  };

  return checkBoundaries();
}

// Get the viewport (window) dimensions
function getViewportSize() {
  return {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  };
}

// Get the current scoll position
function getCurrentScroll() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset,
  };
}

// Get element dimensions and position
function getElemInfo(elem) {
  let offsetTop = 0;
  let offsetLeft = 0;
  let offsetHeight = elem.offsetHeight;
  let offsetWidth = elem.offsetWidth;

  // eslint-disable-next-line
  do {
    if (!isNaN(elem.offsetTop)) {
      offsetTop += elem.offsetTop;
    }
    if (!isNaN(elem.offsetLeft)) {
      offsetLeft += elem.offsetLeft;
    }
  } while ((elem = elem.offsetParent) !== null);
  return {
    top: offsetTop,
    left: offsetLeft,
    height: offsetHeight,
    width: offsetWidth,
  };
}

let scrollHandler;
let resizeHandler;

export function withinViewport(
  unsubscribeEvents,
  selector,
  viewPortClassName,
  callback
) {
  // Cutting the mustard
  // http://webfieldmanual.com/guides/cutting-the-mustard.html
  if (window.requestAnimationFrame && document.documentElement.classList) {
    // Passes the test so add enhanced class to HTML tag
    document.documentElement.classList.add('enhanced');

    // Global class for revealing element
    const revealer = document.querySelectorAll('.' + selector);

    // Run a loop with checkVisibility() and add / remove classes to the elements
    const toggleElement = () => {
      for (let i = 0; i < revealer.length; i++) {
        if (checkVisibility(revealer[i])) {
          revealer[i].classList.add(viewPortClassName);
          if (callback) {
            callback(true, revealer[i]);
          }
        } else {
          revealer[i].classList.remove(viewPortClassName);
          if (callback) {
            callback(false, revealer[i]);
          }
        }
      }
    };

    if (unsubscribeEvents) {
      // Listening for events
      if (window.addEventListener) {
        window.removeEventListener('scroll', scrollHandler, false);
        window.removeEventListener('resize', resizeHandler, false);
      } else if (window.attachEvent) {
        window.detachEvent('onscroll', scrollHandler);
        window.detachEvent('onresize', resizeHandler);
      } else {
        window.onscroll = null;
        window.onresize = null;
      }

      return false;
    } else {
      scrollHandler = throttle(() => {
        return _requestAnimationFrame(toggleElement);
      }, 300);

      resizeHandler = throttle(() => {
        return _requestAnimationFrame(toggleElement);
      }, 300);

      // Listening for events
      if (window.addEventListener) {
        window.addEventListener('scroll', scrollHandler, false);
        window.addEventListener('resize', resizeHandler, false);
      } else if (window.attachEvent) {
        window.attachEvent('onscroll', scrollHandler);
        window.attachEvent('onresize', resizeHandler);
      } else {
        window.onscroll = scrollHandler;
        window.onresize = resizeHandler;
      }
    }
  }
}

// From https://davidwalsh.name/javascript-debounce-function.
function debounce(func, wait, immediate) {
  let timeout;
  return function() {
    const context = this,
      args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

export function initElementTilt(el, destroy) {
  if (!destroy) {
    const newElmentTilt = new ElmentTilt(el);
    el.style.transition = 'transform 0.2s ease-out';
    if (typeof requestAnimationFrame === 'undefined') return;
    document.addEventListener(
      'mousemove',
      onMouseMoveHandler.bind(newElmentTilt)
    );
    window.addEventListener(
      'resize',
      debounceResizeHandler.bind(newElmentTilt)
    );
  } else {
    document.removeEventListener('mousemove', onMouseMoveHandler);
    window.removeEventListener('resize', debounceResizeHandler);
    el.style.transition = '';
    el.style.transform = '';
  }
}

function ElmentTilt(el) {
  this.el = el;
  this.win = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

ElmentTilt.prototype.options = {
  // Main image tilt: max and min angles.
  tilt: {
    maxRotationX: -4,
    maxRotationY: 3,
    maxTranslationX: 10,
    maxTranslationY: -2,
  },
};

ElmentTilt.prototype.getMousePos = function(e) {
  // from http://www.quirksmode.org/js/events_properties.html#position
  let posx = 0;
  let posy = 0;
  if (!e) {
    e = window.event;
  }

  if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  } else if (e.clientX || e.clientY) {
    posx =
      e.clientX +
      document.body.scrollLeft +
      document.documentElement.scrollLeft;
    posy =
      e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }

  return {
    x: posx,
    y: posy,
  };
};

function onMouseMoveHandler(ev) {
  requestAnimationFrame(() => {
    const mousepos = this.getMousePos(ev);
    const rotX =
      2 * this.options.tilt.maxRotationX / this.win.height * mousepos.y -
      this.options.tilt.maxRotationX;
    const rotY =
      2 * this.options.tilt.maxRotationY / this.win.width * mousepos.x -
      this.options.tilt.maxRotationY;
    const transX =
      2 * this.options.tilt.maxTranslationX / this.win.width * mousepos.x -
      this.options.tilt.maxTranslationX;
    const transY =
      2 * this.options.tilt.maxTranslationY / this.win.height * mousepos.y -
      this.options.tilt.maxTranslationY;
    this.el.style.transform = `perspective(1000px) 
                               translate3d( ${transX}px, ${transY}px, 0) 
                               rotate3d(1,0,0,${rotX}deg) 
                               rotate3d(0,1,0,${rotY}deg)`;
  });
}

// Window resize.
function debounceResizeHandler() {
  debounce(function() {
    this.win = { width: window.innerWidth, height: window.innerHeight };
  }, 10);
}

export function ifIE() {
  return document.documentMode || /Edge/.test(navigator.userAgent)
    ? true
    : false;
}
