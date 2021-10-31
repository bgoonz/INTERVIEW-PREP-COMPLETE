# React Slidez

<img src="https://raw.githubusercontent.com/pau1fitz/react-slidez/master/slidez.png" width="250" />

✨ Customisable React Slideshow component.✨

## Demo

💪 [Live demo](http://pau1fitz.github.io/react-slidez/) 💪

## Installation

    npm install react-slidez --save

### Properties

<table style="width:98%;"><colgroup><col style="width: 8%" /><col style="width: 81%" /><col style="width: 4%" /><col style="width: 5%" /></colgroup><thead><tr class="header"><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr class="odd"><td>showIndex</td><td>Show the index of the current slide</td><td>Boolean</td><td><code>false</code></td></tr><tr class="even"><td>showArrows</td><td>Show arrows to navigate through the slides</td><td>Boolean</td><td><code>true</code></td></tr><tr class="odd"><td>autoplay</td><td>Select whether you want the slideshow to autoplay or not</td><td>Boolean</td><td><code>true</code></td></tr><tr class="even"><td>enableKeyboard</td><td>Select whether you want to allow the user change the slides with the keyboard</td><td>Boolean</td><td><code>true</code></td></tr><tr class="odd"><td>useDotIndex</td><td>Select whether you want the index to be dots or numbers</td><td>Boolean</td><td><code>false</code></td></tr><tr class="even"><td>slideInterval</td><td>Dictate the speed in ms at which the slides change</td><td>Integer</td><td><code>2000</code></td></tr><tr class="odd"><td>defaultIndex</td><td>Choose the index that you wish to start at</td><td>Integer</td><td><code>0</code></td></tr><tr class="even"><td>slides</td><td>The slides you pass into the component. This can be an array of images, or other components which are passed as children. See example below.</td><td>Array</td><td>No default</td></tr><tr class="odd"><td>effect</td><td>Choose the animation effect of your slideshow. Options include <code>fade</code>, <code>left</code>, <code>top</code>, <code>right</code>, <code>bottom</code>, <code>bounce-right</code>, <code>bounce-left</code></td><td>String</td><td><code>'fade'</code></td></tr><tr class="even"><td>height</td><td>Choose the height of the slideshow. Example <code>height={'50px'}</code> or <code>height={'50%'}</code></td><td>String</td><td><code>'100%'</code></td></tr><tr class="odd"><td>width</td><td>Choose the width of the slideshow. Example <code>width={'50px'}</code> or <code>width={'50%'}</code></td><td>String</td><td><code>'100%'</code></td></tr></tbody></table>

## Usage

    const Slideshow = require('react-slidez');

    <Slideshow
      showIndex
      showArrows
      autoplay
      enableKeyboard
      useDotIndex
      slideInterval={2000}
      defaultIndex={1}
      slides={['1.jpg', '2.jpg']}
      effect={'fade'}
      height={'100%'}
      width={'100%'}
    />;

You can also pass other components to the `Slideshow` component as children. All the same properties as above are available.

    const Slideshow = require('react-slidez');

    <Slideshow>
      <ComponentOne />
      <ComponentTwo />
      <Checkout />
    </Slideshow>;

## License

[MIT License](https://opensource.org/licenses/MIT)

Copyright (c) 2017 Paul Fitzgerald
