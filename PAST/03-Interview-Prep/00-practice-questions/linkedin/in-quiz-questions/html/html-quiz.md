## HTML Assessment

#### Q1. What is the purpose of the `<track>` tag, and when should it be used?

- [ ] The `<track>` tag is used for specifying subtitles. It is typically applied as a child of the `<audio>` and `<video>` tags.
- [ ] The `<track>` tag is used for specifying subtitles. It is typically applied as a child of the `<video>` tag.
- [ ] The `<track>` tag is used for specifying subtitles, captions, and other types of time-based text. It is typically applied as a child of the `<video>` tag.
- [x] The `<track>` tag is used for specifying subtitles, captions, and other types of time-based text. It is typically applied as a child of the `<audio>` and `<video>` tag.

#### Q2. What are the best examples of void elements?

- [ ] `<link><meta><title>`
- [x] `<wbr><base><source>`
- [ ] `<input><br><p>`
- [ ] `<area><embed><strong>`

#### Q3. In HTML5, which tag or tags embed a webpage inside of a webpage?

- [ ] `<iframe>, <frame>, and <frameset>`
- [ ] `<frame>`
- [x] `<iframe>`
- [ ] `<frame> and <frameset>`

#### Q4. Where do `<header>` and `<footer>` tags typically occur?

- [ ] as children of `<body>, <article>, <aside>, and <section>` tags
- [x] as children of `<body>, <article>, and <section>` tags
- [ ] as children of `<body>, <article>, <aside>, <nav>, and <section>` tags
- [ ] as children of `<body>, <article>, <table>, and <section>` tags

#### Q5. What's the best way to apply bold styling to text?

- [x] `<strong>`
- [ ] Use CSS.
- [ ] `<bold>`
- [ ] `<b>`

#### Q6. When is the <link> tag used?

- [ ] when linking style sheets, JavaScript, and icons for mobile apps
- [ ] when linking style sheets, favicons, and preloading assets
- [x] when linking style sheets and favicons
- [ ] when linking style sheets, external URLs, and favicons

#### Q7. The "value" attribute is associated with which set of tags?

- [ ] `<button><input><form>`
- [ ] `<input><label><meter>`
- [ ] `<input><option><textarea>`
- [x] `<li><input><option>`

#### Q8. What should fill the two blanks in the HTML code below?

```html
<address ______ _____>
  <span itemprop="streetAddress">6410 Via Real</span><br />
  <span itemprop="addressLocality">Carpinteria</span>,
  <span itemprop="addressRegion">CA</span>
  <span itemprop="addressCode">93013</span>
</address>
```

- [x] `itemscope` `itemtype="http://schema.org/PostalAddress"`
- [ ] `itemsref="http://schema.org/PostalAddress"` `itemid="address"`
- [ ] `itemscope` `itemref="http://schema.org/PostalAddress"`
- [ ] `itemid="address"` `itemtype="http://schema.org/PostalAddress"`

#### Q9. When should you use the `<aside>` element?

- [x] when the content can be removed without detracting from the page's message
- [ ] for anything you want to move to the side, like a pull quote box, a sidebar, or an image with text wrapping around it
- [ ] for anything in parentheses
- [ ] for anything in a sidebar

#### Q10. With which tags is the `<source>` element associated?

- [ ] `<svg>, <picture>, <audio>, and <video>`
- [x] `<picture>, <audio>, and <video>`
- [ ] It is interchangeable with the `src` attribute, so any element which uses `src` may use `<source>`
- [ ] `<audio> and <video>`

#### Q11. What is NOT a valid attribute for the `<textarea>` element?

- [ ] readonly
- [x] max
- [ ] form
- [ ] spellcheck

#### Q12. What is the best way to code the sample shown?

![Sample text](images/ss-2.png?raw=true)

- [ ]

```html
<details>
  <summary>Parmesan Deviled Eggs</summary>
  <p>
    These delectable little bites are made with organic eggs, fresh Parmesan, and chopped pine nuts.
  </p>
</details>
```

- [ ]

```html
<h4>▸ Parmesan Deviled Eggs</h4>
<p>
  These delectable little bites are made with organic eggs, fresh Parmesan, and chopped pine nuts.
</p>
```

- [x]

```html
<details open>
  <summary>Parmesan Deviled Eggs</summary>
  <p>
    These delectable little bites are made with organic eggs, fresh Parmesan, and chopped pine nuts.
  </p>
</details>
```

- [ ]

```html
<details>
  <h4>▸ Parmesan Deviled Eggs</h4>
  <p>
    These delectable little bites are made with organic eggs, fresh Parmesan, and chopped pine nuts.
  </p>
</details>
```

#### Q13. What is the purpose of the `<samp>` element?

- [ ] It connects the web browser to a SA-MP server.
- [ ] It identifies enclosed text as a sampler or an example.
- [x] It identifies sample output from a computer program.
- [ ] It uses a simple application messaging protocol to connect the browser to a texting device.

#### Q14. When should you use `<ol>` and `<ul>` elements?

- [x] Use `<ul>` when you want a bulleted list and `<ol>` when you want a numbered list.
- [ ] Use `<ul>` when you have a list of items in which the order of the items matters. Use `<ol>` when you have a list of items that could go in any order.
- [ ] Use `<ol>` when you want a bulleted list and `<ul>` when you want a numbered list.
- [ ] Use `<ol>` when you have a list of items in which the order of the items matters. Use `<ul>` when you have a list of items that could go in any order.

#### Q15. What is the difference between the post and get methods in a form?

- [ ] post is used for sending information to the server. get is used for retrieving form information from the server.
- [ ] get is used for sending information to the server. post is used for retrieving form information from the server.
- [ ] With get, data is included in the form body when send to the server. With post, the data goes through the URL.
- [x] With post, data is included in the form body when send to the server. With get, the data goes through the URL.

#### Q16. What is the difference between the `<div>` and `<span>` tags?

- [x] `<div>` is used where a generic block-level tag is needed, while `<span>` is used where a generic inline tag is needed.
- [ ] `<div>` is used for major divisions on a page, while `<span>` is used to span across columns.
- [ ] `<div>` is the industry-standard default tag, but you could use `<span>` if you prefer.
- [ ] `<div>` is used where a generic inline tag is needed, while `<span>` is used where a generic block-level tag is needed.

#### Q17. What should fill the blank in the HTML code bellow?

```html
<form method="post" action="mailto:info@linkedin.com" ____="text/plain"></form>
```

- [x] enctype
- [ ] media
- [ ] type
- [ ] rel

#### Q18. What is the correct markup for `alt` attribute of an image?

- [ ]

```html
<img src="cubism.jpg" alt="Version of ""Whistler's Mother"" in cubist style">
```

- [ ]

```html
<img src="cubism.jpg" alt="Version of "Whistler's Mother" in cubist style">
```

- [x]

```html
<img src="cubism.jpg" alt='Version of "Whistler\'s Mother" in cubist style'>
```

- [ ]

```html
<img src="cubism.jpg" alt="Version of \"Whistler's Mother\" in cubist style">
```

#### Q19. In the code below, what is the purpose of the **id** attribute?

```html
<p id="warning">Be careful when installing this product.</p>
```

- [x] It establishes that id is a unique identifier in the document, used for styling CSS, scripting, and linking within a webpage.
- [ ] It establishes that id is a unique identifier in the document, used for styling CSS and with Javascript code.
- [ ] It establishes that id may be used for styling CSS several times per page.
- [ ] It establishes that id is a unique identifier in the website, used for styling CSS, scripting, and linking within a webpage.

#### Q20. What is the best semantic markup for the sentence shown?

```markdown
On July 21, 1969, Neil Armstrong said, "One small step for man, one giant leap for mankind."
```

- [x]

```html
<p>
  On <time datetime="1969-07-21">July 21, 1969</time>, Neil Armstrong said,
  <q cite="https://www.hq.nasa.gov/alsj/a11l/a11.html"
    >One small step for man, one giant leap for mankind.</q
  >
</p>
```

- [ ]

```html
<p>
  On July 21, 1969, Neil Armstrong said,
  <q cite="https://www.hq.nasa.gov/alsj/a11l/a11.html"
    >One small step for man, one giant leap for mankind.</q
  >
</p>
```

- [ ]

```html
<p>
  On July 21, 1969, Neil Armstrong said, <q>One small step for man, one giant leap for mankind.</q>
</p>
```

- [ ]

```html
<p>
  On <time datetime="07-21-1969">July 21, 1969</time>, Neil Armstrong said,
  <q cite="https://www.hq.nasa.gov/alsj/a11l/a11.html"
    >One small step for man, one giant leap for mankind.</q
  >
</p>
```

#### Q21. What should fill the blank in this HTML code? 

```html
<a href="https://es.yahoo.com/" hreflang="____" target="_blank">Visita Yahoo</a>
```

- [ ] es
- [ ] es-spanish
- [x] es-es
- [ ] spanish

#### Q22. Review the text in the red box in the image shown. What is the best way to code this in HTML?

![Image of footer](images/ss-3.png?raw=true)

- [ ] ordered list
- [x] unordered list inside a nav element
- [ ] ordered list inside a nav element
- [ ] unordered list

#### Q23. What is the best way to code three choices within a form so that the user can select only one item?

- [ ]

```html
<label for="example">Make a choice:</label>
<datalist id="example">
  <option value="Choice 1"></option>
  <option value="Choice 2"></option>
  <option value="Choice 3"></option>
</datalist>
```

- [ ]

```html
<p>Make a choice:</p>
<input id="choices" name="example" />

<datalist value="choices">
  <option value="Choice 1"></option>
  <option value="Choice 2"></option>
  <option value="Choice 3"></option>
</datalist>
```

- [ ]

```html
<label for="example">Make a choice:</label>
<input list="example" id="choices" name="choices" />

<datalist id="choices">
  <option value="Choice 1">Choice 1</option>
  <option value="Choice 2">Choice 2</option>
  <option value="Choice 3">Choice 3</option>
</datalist>
```

- [x]

```html
<label for="example">Make a choice:</label>
<input list="choices" id="example" name="example" />

<datalist id="choices">
  <option value="Choice 1"></option>
  <option value="Choice 2"></option>
  <option value="Choice 3"></option>
</datalist>
```

#### Q24. How do you confirm that a document is written in HTML5?

- [ ] The server wraps the webpage in an HTML5 wrapper.
- [x] Use the `<!DOCTYPE html>` declaration that starts the document.
- [ ] The browser receives encoding from the server to display the document with HTML5.
- [ ] It is enclosed in a `<html>` tag.

#### Q25. What does the code shown below accomplish?

```html
<picture>
  <source srcset="image1.jpg" media="(min-width: 1000px)" />
  <source srcset="image2.jpg" media="(min-width: 750px)" />
  <img src="image3.jpg" />
</picture>
```

- [ ] It displays image1.jpg at 1000px and higher, image2.jpg at 750-999px, and image3.jpg at 749px and lower.
- [ ] It displays image1.jps at 1000px and higher and image2.jpg at 750-999px, image3.jpg is a default in case `<picture>` is not supported.
- [x] It displays image1.jpg at 1000px and higher and image2.jpg at 750px and higher, image3.jpg is a default in case `<picture>` is not supported.
- [ ] It displays image1.jpg, image2.jpg and image3.jpg at 1000px and higher.

#### Q26. What code will produce the table shown below?

![Table with yellow background](images/ss-4.png?raw=true)

- [ ]

```html
<table>
  <scope cols="2" style="background-color: yellow">
  <tr>
    <th>Col 1</th>
    <th>Col 2</th>
    <th>Col 3</th>
  </tr>
  <tr>
    <td>first</td>
    <td>second</td>
    <td>third</td>
  </tr>
</table>
```

- [x]

```html
<table>
  <colgroup span="2" style="background-color: yellow">
  <tr>
    <th>Col 1</th>
    <th>Col 2</th>
    <th>Col 3</th>
  </tr>
  <tr>
    <td>first</td>
    <td>second</td>
    <td>third</td>
  </tr>
</table>
```

- [ ]

```html
<table>
  <group cols="2" style="background-color: yellow">
  <tr scope="row">
    <th>Col 1</th>
    <th>Col 2</th>
    <th>Col 3</th>
  </tr>
  <tr scope="row">
    <td>first</td>
    <td>second</td>
    <td>third</td>
  </tr>
</table>
```

- [ ]

```html
<table>
  <columns colspan="2" style="background-color: yellow">
  <tr>
    <th>Col 1</th>
    <th>Col 2</th>
    <th>Col 3</th>
  </tr>
  <tr>
    <td>first</td>
    <td>second</td>
    <td>third</td>
  </tr>
</table>
```

#### Q27. What is the `<hr>`tag typically used for?

- [ ] This tag is depreciated and should not be used.
- [x] It designates a topic shift within a section at the paragraph level.
- [ ] It draws a horizontal line.
- [ ] It designates a shift of topic at the section level.

<details><summary>Explanation</summary><p>

This is a confusing question and there can be an arguments for both the second and the third options being correct.
From [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr): The HTML `<hr>` element represents a thematic break between paragraph-level elements. Historically, this has been presented as a horizontal rule or line. While it may still be displayed as a horizontal rule in visual browsers, this element is now defined in semantic terms, rather than presentational terms, so if you wish to draw a horizontal line, you should do so using appropriate CSS.

</p></details>

#### Q28. What should fill the two blanks in the HTML code below?

```html
<section itemscope itemtype="http://schema.org/Restaurant">
  <h1 itemprop="name">Nadia's Garden</h1>
  <p itemscope ______ ______>
    <span itemprop="ratingValue">4.5</span> stars - based on
    <span itemprop="reviewCount">120</span> reviews
  </p>
</section>
```

- [ ] `itemprop="aggregateRating" itemref="http://schema.org/AggregateRating"`
- [x] `itemprop="aggregateRating" itemtype="http://schema.org/AggregateRating`
- [ ] `itemid="aggregateRating" itemtype="http://schema.org/AggregateRating`
- [ ] `itemid="aggregateRating" itemref="http://schema.org/AggregateRating`

#### Q29. Which HTML snippet links back to the very top of a webpage?

- [x]

```html
<a id="top"></a>
<!-- placed at the top of the page -->
<a href="#top">back to top</a>
```

- [ ]

```html
<a name="top"></a>
<!-- placed at the top of the page -->
<a href="#top">back to top</a>
```

- [ ]

```html
<a href="#">back to top</a> <a href="#top">back to top</a>
```

- [ ]

```html
<button href="#">back to top</button> <button href="#top">back to top</button>
```

#### Q30. Which three tags where deprecated in HTML4 but returned to HTML5?

- [x] `<rb> <rp> <rt>`
- [ ] `<acronym> <code> <wbr>`
- [ ] `<hgroup> <q> <wbr>`
- [ ] `<b> <i> <u>`

#### Q31. The "**\_\_**"tag is used for marking up a short code snippet, while the **\_\_** tag is used for marking up a longer block of code.

- [ ] `<kdb>`, `<pre>`
- [ ] `<pre>`, `<code>`
- [ ] `<kdb>`, `<mark>`
- [x] `<code>`, `<pre>`

#### Q32. What does the `<label>` tag do?

- [ ] It labels webpages with important information.
- [ ] It visually associates a text label with an interface element.
- [ ] It visually labels from fields.
- [x] It programmatically associates a text label with an interface element.

#### Q33. To get a link to open in a new window or tab, use the **\_\_** attribute.

- [x] `_blank`
- [ ] `_self`
- [ ] `_new`
- [ ] `_parent`

#### Q34. What is the most semantically accurate way to mark up the sentence shown below? Note: "TLAs" stands for "three-letter acronyms."

**We are fond of our TLAs in web design.**

- [ ]

```html
<p>We are fond of our <span title="three-letter acronyms">TLAs</span> in web design.</p>
```

- [ ]

```html
<p>We are fond of our TLAs in web design.</p>
```

- [x]

```html
<p>we are fond of our <abbr title="three-letter acronyms">TLAs</abbr> in web design.</p>
```

- [ ]

```html
<p>we are fond of our <acronym title="three-letter acronym">TLAs</acronym> in web design.</p>
```

<details><summary>Note</summary><p>

`<acronym>` has been removed in HTML5 and shouldn't be used anymore. Instead web developers should use the `<abbr>` element.

</p></details>

#### Q35. What is the correctly nested markup for this list?

```markdown
-Office
--Staple
--Paper
-Groceries
--Milk
```
[picture](https://cdn.lynda.com/question/5d07ce7b498ef292ca309a14/5d07ce7b498ef292ca309a14-1560793406126)


- [ ]

```html
<ul>
  <li>
    office
    <ol style="circle">
      <li>staple</li>
      <li>paper</li>
    </ol>
  </li>
  <li>
    groceries
    <ol style="circle">
      <li>milk</li>
    </ol>
  </li>
</ul>
```

- [x]

```html
<ul>
  <li>
    office
    <ul>
      <li>staple</li>
      <li>paper</li>
    </ul>
  </li>
  <li>
    groceries
    <ul>
      <li>milk</li>
    </ul>
  </li>
</ul>
```

- [ ]

```html
<ul>
  <li>office</li>
  <li>staple</li>
  <li>paper</li>
  <li>groceries</li>
  <li>milk</li>
</ul>
```

#### Q36. What code will produce this table?

| col1 (yellow)  | col2 (yellow)   | col3  |
| -------------- | --------------- | ----- |
| first (yellow) | second (yellow) | third |

- [ ]

```html
<table>
  <group cols=2 style='background-color:yellow'>
  <tr scope=row>
    <th>col1</th>
    <th>col2</th>
    <th>col3</th>
  </tr>
  <tr scope=row>
    <td>first</td>
    <td>second</td>
    <td>third</td>
  </tr>
</table>
```

- [ ]

```html
<table>
  <columns colspan=2 style=background-color:yellow>
  <tr>
    <th>col1</th>
    <th>col2</th>
    <th>col3</th>
  </tr>
  <tr>
    <td>first</td>
    <td>second</td>
    <td>third</td>
  </tr>
</table>
```

- [x]

```html
<table>
  <colgroup span=2 style=background-color:yellow>
  <tr>
    <th>col1</th>
    <th>col2</th>
    <th>col3</th>
  </tr>
  <tr>
    <td>first</td>
    <td>second</td>
    <td>third</td>
  </tr>
</table>
```

#### Q37. What should fill the blank below?

```html
<link href="phone.css" rel="stylesheet" _____="print" />
```

- [ ] title
- [ ] type
- [ ] device
- [x] media

#### Q38. What is the best semantic way to mark up the layout shown?

![quote](images/ss-5.png?raw=true)

- [ ]

```html
<p>
  "Making money is what you have to do to sustain a business—being driven to make something of value
  and purpose is much more powerful."
</p>
<p><em>Lynda Weinman</em></p>
```

- [ ]

```html
<blockquote>
  <q
    >"Making money is what you have to do to sustain a business—being driven to make something of
    value and purpose is much more powerful."</q
  >
  <cite><em>Lynda Weinman</em></cite>
</blockquote>
```

- [x]

```html
<blockquote>
  <p>
    "Making money is what you have to do to sustain a business—being driven to make something of
    value and purpose is much more powerful."
  </p>
  <cite>Lynda Weinman</cite>
</blockquote>
```

- [ ]

```html
<section>
  <q
    >"Making money is what you have to do to sustain a business—being driven to make something of
    value and purpose is much more powerful."</q
  >
  <cite>Lynda Weinman</cite>
</section>
```

#### Q39. Which choice uses the correct terminology in describing this markup: `<p>info</p>`?

- [ ] The element opener is `<p>`, the element closer is `</p>`, and the element information is info.
- [ ] The start tag is `<p>`, the end tag is `</p>`, and the enclosed HTML is info.
- [x] The start tag is `<p>`, the end tag is `</p>`, and the element content is info.
- [ ] The start element is `<p>`, the end element is `</p>`, and the tag content is info.

#### Q40. What is the difference between `<input type="submit" value="click me">` and `<button type="submit">Click me</button>`?

- [ ] There is no difference. Both will render a button that submits a form.
- [x] Both will submit a form. However, the `<button>` can have content other than text, like an image or nested HTML elements, while the `<input>` cannot.
- [ ] `<input type="button">` has been deprecated in HTML5. You should use the `<button>` tag instead.
- [ ] Both will submit a form. However, the `<input>` can have content other than text, like an image or nested HTML elements, while the `<button>` cannot.

#### Q41. What is the best semantic way to indicate that text refers to keyboard entry?

- [ ] `<p>Press the <tt>Enter</tt> key to proceed.</p>`
- [x] `<p>Press the <kbd>Enter</kbd> key to proceed.</p>`
- [ ] `<p>Press the <samp>Enter</samp> key to proceed.</p>`
- [ ] `<p>Press the Enter key to proceed.</p>`

#### Q42. What does this code do?

```html
<audio controls>
  <source src="sound.mp3" type="audio/mpeg" />
  <source src="sound.ogg" type="audio/ogg" />
  <source src="sound.wav" type="audio/wav" />
</audio>
```

- [x] The browser chooses the first supported format to play with the browser's default controls.
- [ ] The browser chooses the best audio format to play with JavaScript-provided controls.
- [ ] The browser plays each sound file in order automatically. The user has controls to stop playback.
- [ ] The browser chooses the first supported sound file and will loop the sound until the user stops it.

#### Q43. What attribute applies a keyboard shortcut hint to the current element?

- [x] `accesskey`
- [ ] `shortcut`
- [ ] `keyboard`
- [ ] `access`

#### Q44. What is the correct way to code a link that, when clicked, will send an email to `email@example.com` with a subject of "Hello"?

- [ ] `<a href="mailto:email@example.com&subject=Hello">Click me</a>`
- [ ] `<a href="mailto:email@example.com">Hello</a>`
- [x] `<a href="mailto:email@example.com?subject=Hello">Click me</a>`
- [ ] `<a href="mailto:email@example.com?&subject=Hello">Click me</a>`

#### Q45. Which tag is the root element of an HTML document?

- [ ] `<DOCTYPE html>`
- [x] `<html>`
- [ ] `<body>`
- [ ] `<root>`

#### Q46. Which code snippet creates the layout shown, starting at `<table>` and ending at `</table>`?

![Table](images/ss-1.png?raw=true 'table')

- [ ]

```html
<tr>
  <td>Table cell 1</td>
  <td>Table cell 2</td>
</tr>
<tr>
  <td rowspan="2">Table cell 3</td>
</tr>
```

- [ ]

```html
<tr>
  <td>Table cell 1</td>
  <td>Table cell 2</td>
  <td>Table cell 3</td>
</tr>
```

- [x]

```html
<tr>
  <td>Table cell 1</td>
  <td>Table cell 2</td>
</tr>
<tr>
  <td colspan="2">Table cell 3</td>
</tr>
```

- [ ]

```html
<tr>
  <td>Table cell 1</td>
  <td>Table cell 2</td>
</tr>
<tr>
  <td>Table cell 3</td>
</tr>
```

#### Q47. Which choice is NOT a legal value for the **name** attribute within a `<meta>` tag?

- [x] charset
- [ ] viewport
- [ ] generator
- [ ] author

#### Q48. Which form is coded correctly?

- [ ]

```html
<form>
  <legend>Title</legend>
  <fieldset>
    <label for="name">Your name:</label>
    <input type="text" name="name" id="name" />
    <button type="submit">Submit</button>
  </fieldset>
</form>
```

- [ ]

```html
<form>
  <fieldset>
    <legend>Title</legend>
    <p>Your name:</p>
    <input type="text" name="name" id="name" />
    <input type="submit" value="Submit" />
  </fieldset>
</form>
```

- [x]

```html
<form>
  <fieldset>
    <legend>Title</legend>
    <label for="name">Your name:</label>
    <input type="text" name="name" id="name" />
    <button type="submit">Submit</button>
  </fieldset>
</form>
```

- [ ]

```html
<form>
  <legend>Title</legend>
  <label for="name">Your name:</label>
  <input type="text" name="name" id="name" />
  <input type="submit" value="Submit" />
</form>
```

#### Q49. What does the **poster** attribute do in the `<video>` tag?

- [x] It specifies an image that should display while the video downloads and until the video is played.
- [ ] It specifies an image that only displays if there is a problem with the video.
- [ ] It specifies an image that should display until the video is played.
- [ ] It specifies an image that should display while the video downloads.

#### Q50. What does this code do?

```html
<audio controls src="sound.mp3" type="audio/mpeg">When does this text display?</audio>
```

- [ ] The text displays over the audio controls, unless CSS is used to position it elsewhere.
- [ ] The text displays under the audio controls.
- [x] The text displays when the browser cannot play the sound.
- [ ] The text never displays.

#### Q51. What is the primary purpose of the `<canvas>` tag?

- [ ] It allows raster images to be rendered on the webpage.
- [ ] It displays annotated images.
- [x] It allows drawing on a bitmap via JavaScript.
- [ ] It allows vector images to be rendered on the webpage.

#### Q52. Which choice contains three valid block-level elements?</li>

- [ ] `<details> <abbr> <figcaption>`
- [ ] `<canvas> <select> <noscript>`
- [x] `<dt> <table> <pre>`
- [ ] `<kbd> <p> <main>`

#### Q53. In the code below, what is the purpose of the **lang** attribute?

```html
<p lang="en-GB">Welcome to our wonderful website.</p>
```

- [ ] It establishes the language for the website—in this case, English.
- [ ] It establishes the language and dialect for the website—in this case, British English.
- [ ] It establishes the language and dialect for the paragraph—in this case, British English.
- [x] It establishes the language for the paragraph—in this case, English.

#### Q54. Which image formats can be displayed by all web browsers?

- [ ] JPG, GIF, TIF
- [ ] JPG, TIF, BMP
- [ ] TIF, BMP, GIF
- [x] PNG, GIF, JPG

#### Q55. Review the code below. What is the absolute URL for a page called **page.html**?

```html
<base href="http://www.linkedin.com/dir/">
```

- [ ] http://www.linkedin.com/dir/page.html
- [ ] page.html
- [ ] http://www.linkedin.com/page.html
- [ ] dir/page.html

#### Q56. What is the correct way to include a stylesheet named **style.css** in the **<head>** of your document?

- [ ] <style link="style.css">
- [ ] <link rel="stylesheet" href="style.css">
- [ ] <style src="style.css"></style>
- [ ] <link style="style.css">
  
#### Q57. You want to have single spacing in between some lines, like in a poem or an address. Which approach should you use?

- [ ] Wrap the text in a box that is the right width so everything wraps correctly. Set the box width with CSS.
- [ ] Separate lines with a '<p>', then use CSS to make single spacing.
- [ ] Use the '<pre>' tag to make the line spacing look exactly like you want.
- [ ] Separate the lines with the '<br>' tag.
  
#### Q58.What does the <wbr> tag do?
   
- [ ] It requires the browser to wrap the current line at that point.
- [ ] It breaks a word into two pieces, using a hyphen to connect the words.
- [ ] It formats a sentence to be easily breakable.
- [ ] It presents an opportunity for a break in a very long word, if needed for proper page display.

#### Q59. Review the code below. How do you include subnavigation for Link 2 that includes a link? 
   ```html
        <nav><ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
             <li><a href="#">Link 3</a></li>
        </ul></nav>
```
- [ ]
      <nav><ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
         <ul>
           <li><a href="#">Link 2a</a></li>
         </ul>
       <li><a href="#">Link 3</a></li> 
      </ul></nav>

- [ ]
      <nav><ul>
       <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a>
          <ul>
            <li><a href="#">Link 2a</a></li>
          </ul></li>
       <li><a href="#">Link 3</a></li>
      </ul></nav>

- [ ]
      <ul><nav>
       <li><a href="#">Link 1</a></li>
       <li><a href="#">Link 2</a>
         <ul><nav>
            <li><a href="#">Link 2a</a></li>
         </nav></ul></li>
       <li><a href="#">Link 3</a></li>
      </nav></ul>

- [ ]
      <nav><ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
         <nav><ul>
           <li><a href="#">Link 2a</a></li>
          </ul></nav>
        <li><a href="#">Link 3</a></li>
      </ul></nav>
      
#### Q60. What is the correct way to code a comment in HTML?

- [ ] //this is a comment
- [ ] /* this is a comment */ 
- [ ] <! this is a comment ->  
- [ ] <!-- this is a comment -->

#### Q61. Which statement is false?

- [ ] Inline elements can be nested inside inline elements.
- [ ] Block elements can be nested inside block elements.
- [ ] Inline elements can be nested inside block elements.
- [ ] Block elements can be nested inside inline elements.


---
---
---
---
# Skill Assessments Linkedin HTML (45 Questions with answers)
## Linkedin Assessments HTML 
> ### Q1. What is the most semantically correct way to mark up this layout?
![quote](images/rm-6.png?raw=true)
```html
[ ]<img src="q24.jpg" alt="Mini-cheeseburgers.">
    <p>These mini cheeseburgers are served on a freshly baked pretzel bun with lettuce, tomato, avocado, and your choice of cheese.</p>

[ ]<img src="q24.jpg" alt="Mini-cheeseburgers.">
    <caption>These mini cheeseburgers are served on a freshly baked pretzel bun with lettuce, tomato, avocado, and your choice of cheese.</caption>

[ ]<figure>
   <img src="q24.jpg" alt="Mini-cheeseburgers.">
   <caption>These mini cheeseburgers are served on a freshly baked pretzel bun with lettuce, tomato, avocado, and your choice of cheese.</caption>
   </figure>

[x]<figure>
   <img src="q24.jpg" alt="Mini-cheeseburgers.">
   <figcaption>These mini cheeseburgers are served on a freshly baked pretzel bun with lettuce, tomato, avocado, and your choice of cheese.</figcaption>
  </figure>
```  
> ### Q2. Review the code below. What is the best way to nest a two-cell table inside of Cell 2?
```HTML
    <table>
      <tr>
          <td>Cell 1</td>
          <td>Cell 2</td>
      </tr>
    </table>

[ ] <td>Cell 2</td></tr></table>
        <table>
          <tr>
            <td>Cell A</td>
            <td>Cell B</td>
          </tr>
      </table>

[ ] <td>Cell 2</td>
        <table>
          <tr>
            <td>Cell A</td>
            <td>Cell B</td>
          </tr>
        </table>
      </tr>

[x] <td>Cell 2
        <table>
          <tr>
            <td>Cell A</td>
            <td>Cell B</td>
          </tr>
        </table>
      </td>

[ ] <td>Cell 1</td>
        <table>
          <tr>
            <td>Cell A</td>
            <td>Cell B</td>
          </tr>
        </table>
      <td>Cell 2</td>
```
> ### Q3. In this code, what is the purpose of defer? 

  <script defer src="myscript.js"></script>

- [ ]  It downloads the script from the server when resources allow.

- [x]  It runs the script after HTML parsing is complete.

- [ ]  It runs the script when it is ready.

- [ ]  It pauses the parsing of HTML code while the script runs.

> ### Q4. What is the purpose of async in this code?
```  <script async src="myscript.js"></script>```

- [ ]  It runs the script when the script is ready.

- [x]  It pauses the parsing of HTML code while the script runs.

- [ ]  It runs the script after HTML parsing is complete.

- [ ]  It downloads the script from the server when resources allow.

> ### Q5. What is the difference between the `<svg>` and `<canvas>` tags?

- [ ] `<svg>` integrates with JavaScript, while `<canvas>` does not.

- [x] `<svg>` produces vector graphics, while `<canvas>` produces raster graphics.

- [ ] `<svg>` produces raster graphics, while `<canvas>` produces vector graphics.

- [ ] `<svg>` cannot be used as a background image, while `<canvas>` can be used as a background.

> ### Q6. What is the purpose of `<caption>`?
```
[ ] <caption> provides captions for <audio>, <video>, <img>, and <table>.

[ ] <caption> provides captions for <img>, <audio>, and <video>.

[x] <caption> provides captions to <table>.

[ ] <caption> provides captions for <audio>, <video>, and <table>.
```
> ### Q7. Which snippet of HTML, when clicked, makes a phone call on a mobile device?
```
[ ] <a href="tel">802-555-1212</a>

[ ] <a href="phone:802-555-1212">Call me</a>

[ ] <a href="phone">802-555-1212</a>

[x] <a href="tel:802-555-1212">Call me</a>
```
> ### Q8. What is the correct way to include a stylesheet named style.css in the <head> of your document?
```
[ ] <link style="style.css">

[ ] <style src="style.css- [ ]></style>

[ ] <style link="style.css">

[x] <link rel="stylesheet" href="style.css">
```
> ### Q9. What is the primary purpose of HTML?

- [ ] HTML is responsible for the structure, styling, and interactivity of webpages.

- [x] HTML structures the webpage, identifying its elements such as paragraphs, headings, and lists.

- [ ] HTML is responsible for the structure and styling of webpages.

- [ ] HTML structures and provides a rudimentary look to webpages.

> ### Q10. What is the best semantic markup for this sentence?  
      On July 21, 1969, Neil Armstrong said, "That's one small step for man, one giant leap for mankind."
```
[x] <p>On <time datetime="1969-07-21">July 21, 1969</time>, Neil Armstrong said, 
      <q cite="https://www.hq.nasa.gov/alsj/a11/a11.step.html">That's one small step for man, one giant leap for mankind.</q></p>

[ ] <p>On July 21, 1969, Neil Armstrong said, 
      <q cite="https://www.hq.nasa.gov/alsj/a11/a11.step.html">"That's one small step for man, one giant leap for mankind."</q></p>

[ ] <p>On July 21, 1969, Neil Armstrong said, 
      <q>"That's one small step for man, one giant leap for mankind."</q></p>

[ ] <p>On <time datetime="07-21-1969">July 21, 1969</time>, Neil Armstrong said, 
      <q cite="https://www.hq.nasa.gov/alsj/a11/a11.step.html">That's one small step for man, one giant leap for mankind.</q></p>
```
> ### Q11.  What is the correctly nested markup for this list? 
![quote](images/rm-8.png?raw=true)

    Bulleted list with one bullet (Office Supplies), two subbullets (Stapler and Paper clips), another bullet (Groceries), and one subbullet (Milk)
```    
[x] <ul>
      <li>Office Supplies</li>
        <ul>
          <li>Stapler</li>
          <li>Paper clips</li>
        </ul>
      <li>Groceries</li>
        <ul>
          <li>Milk</li>
        </ul>
    </ul>

[ ] <ul>
      <li>Office Supplies
        <ol style="circle">
          <li>Stapler</li>
          <li>Paper clips</li>
        </ol>
      </li>
      <li>Groceries
        <ol style="circle">
          <li>Milk</li>
        </ol>
      </li>
    </ul>

[ ] <ul>
      <li>Office Supplies</li>
          <li>Stapler</li>
          <li>Paper clips</li>
      <li>Groceries</li>
          <li>Milk</li>
    </ul>

[ ] <ul>
      <li>Office Supplies
        <ul>
          <li>Stapler</li>
          <li>Paper clips</li>
        </ul>
      </li>
      <li>Groceries
        <ul>
          <li>Milk</li>
        </ul>
      </li>
    </ul>

```
> ### Q12.  What is the best way to code three choices within a form so that the user can select only one item?
```
[ ]  <fieldset>
        <label>Options</label>
        <input id="choice-1" name="options" type="radio" />
        <label for="choice-1">Choice 1</label>
        <input id="choice-2" name="options" type="radio" />
        <label for="choice-2">Choice 2</label>
        <input id="choice-3" name="options" type="radio" />
        <label for="choice-3">Choice 3</label>
      </fieldset>

[ ] <p>Make a choice:</p>
    <input id="choices" name="example" />

  <datalist value="choices">
      <option value="Choice 1">
      <option value="Choice 2">
      <option value="Choice 3">
  </datalist>

[ ]  <label for="example">Make a choice:</label>
  <datalist id="example">
    <option value="Choice 1">
    <option value="Choice 2">
    <option value="Choice 3">
  </datalist>

[x]  <fieldset>
      <legend>Options</legend>
      <input id="choice-1" name="options" type="radio" />
      <label for="choice-1">Choice 1</label>
      <input id="choice-2" name="options" type="radio" />
      <label for="choice-2">Choice 2</label>
      <input id="choice-3" name="options" type="radio" />
      <label for="choice-3">Choice 3</label>
  </fieldset>
```
> ### Q13.  What does the poster attribute do in the `<video>` tag?
- [x]  It specifies an image that should display while the video downloads and until the video played.
- [ ]

> ### Q14. Which list comprises three empty elements?
[ ]`  <area>  <embed>  <strong>`
  
[ ]  `<link>  <meta>  <title>`
  
[ ]  `<input>  <br>  <p>`
  
[x]`  <wbr>  <base>  <source>`
  
> ### Q15. Which statement is correct?

- [ ] The `<main>` element represents the dominant content of an `<article>` in a document.

- [ ] The `<main>` element represents the dominant content of a `<section>` of a document. 
    You may have one `<main>`element per section.

- [x] The `<main>` element represents the dominant content of your document. 
    There can be only one `<main>` element that is not hidden.

- [ ] The `<article>` element represents the dominant content of your document. 
    There can be only one `<article>`element that is not hidden.

> ### Q16.  What is the most semantically accurate way to mark up this sentence?

    Hmm, Mary thought. I wonder how I should mark up this sentence.

- [ ] `<p><b>Hmm</b>`, Mary thought. `<b>`I wonder how I should mark up this sentence.`</b></p>`

- [ ] `<p><i>Hmm</i>`, Mary thought. `<i>`I wonder how I should mark up this sentence.`</i></p>`

- [ ] `<p><q>Hmm</q>`, Mary thought.` <q>`I wonder how I should mark up this sentence.`</q></p>`

- [x] `<p><em>Hmm</em>`, Mary thought. `<em>`I wonder how I should mark up this sentence.`</em></p>`

> ### Q17. What does the <wbr> tag do?

- [ ]  It formats a sentence to be easily breakable.

- [ ]  It requires the browser to wrap the current line at that point.

- [ ]  It breaks a word into two pieces, using a hyphen to connect the words.

- [x]  It presents an opportunity for a break in a very long word, if needed for proper page display.

> ### Q18. Review the code below. What is the absolute URL for a page called page.html?

`<base href="http://www.linkedin.com/dir/">`

[ ]  page.html

[ ]  dir/page.html

[ ]  http://www.linkedin.com/page.html

[x]  http://www.linkedin.com/dir/page.html

> ### Q19. You want to have single spacing in between some lines, like in a poem or an address. Which approach should you use?

- [ ]  Wrap the text in a box that is the right width so everything wraps correctly. Set the box width with CSS.

- [x]  Separate the lines with the `<br>` tag.

- [ ]  Separate lines with a `<p>`, then use CSS to make single spacing.

- [ ]  Use the `<pre>` tag to make the line spacing look exactly like you want.

> ### Q20. What is the correct way to code a comment in HTML?

- [ ]  //this is a comment

- [x]  `<!-- this is a comment -->`

- [ ]  <! this is a comment ->

- [ ]  /* this is a comment */

> ### Q21. For the HTML code below, when will "Sample Text" display to the browser?
  `<noscript>Sample Text</noscript>`

- [x]  when JavaScript is not supported by the browser or if JavaScript is disabled in the browser.

- [ ]  when JavaScript is disabled in the web browser.

- [ ]  when there is no JavaScript used on this webpage.

- [ ]  when JavaScript is not supported by the web browser.

> ### Q22.  Which image formats can be displayed by all web browsers?

- [ ]  JPG, GIF, TIF
- [x]  PNG, GIF, JPG
- [ ]  JPG, TIF, BMP
- [ ]  TIF, BMP, GIF

> ### Q23. In the code below, what is the purpose of the lang attribute?
`<p lang="en-GB">Welcome to our wonderful website.</p>`

- [ ]  It establishes the language for the paragraph—in this case, English. 

- [ ]  It establishes the language for the website—in this case, English. 

- [ ]  It establishes the language and dialect for the website—in this case, British English. 

- [x]  It establishes the language and dialect for the paragraph—in this case, British English.

> ### Q24. In this code, what is target? 
`<a href="http://www.linkedin.com" target="_blank">Visit site</a>`

- [x]  a tag

- [ ]  an attribute

- [ ]  content

- [ ]  an element

> ### Q25.  Review the code below. How do you include subnavigation for Link 2 that includes a link? 
```
  <nav><ul>
    <li><a href="#">Link 1</a></li>
    <li><a href="#">Link 2</a></li>
    <li><a href="#">Link 3</a></li>
  </ul></nav>

[ ]  <ul><nav>
    <li><a href="#">Link 1</a></li>
    <li><a href="#">Link 2</a>
      <ul><nav>
      <li><a href="#">Link 2a</a></li>
      </nav></ul></li>
    <li><a href="#">Link 3</a></li>
  </nav></ul>

[ ]  <nav><ul>
    <li><a href="#">Link 1</a></li>
    <li><a href="#">Link 2</a>
      <ul>
      <li><a href="#">Link 2a</a></li>
      </ul></li>
    <li><a href="#">Link 3</a></li>
  </ul></nav>

[x]  <nav><ul>
    <li><a href="#">Link 1</a></li>
    <li><a href="#">Link 2</a></li>
      <ul>
      <li><a href="#">Link 2a</a></li>
      </ul>
    <li><a href="#">Link 3</a></li>
  </ul></nav>

[ ]  <nav><ul>
    <li><a href="#">Link 1</a></li>
    <li><a href="#">Link 2</a></li>
      <nav><ul>
        <li><a href="#">Link 2a</a></li>
      </ul></nav>
    <li><a href="#">Link 3</a></li>
  </ul></nav>
```
> ### Q26. Given the file and directory structure shown here, what is the correct element to place in file profit.html to link to info.html?
![quote](images/rm-7.png?raw=true)
```
[ ]  <a href="../../info.html">See information</a>

[ ]  <a href="../info.html">See information</a>

[x]  <a href="../work/info.html">See information</a>

[ ]  <a href="info.html">See information</a>
```
> ### Q27.  The code below contains some errors. Which choice corrects all of the errors? 
```  <table>
    <tr>Cell 1</tr>
    <td>Cell 2</td>
    <caption>A table</caption>
  </table>

[ ]  <caption>A table</caption>
  <table>
    <tr>
      <td>Cell 1</td>
      <td>Cell 2</td>
    </tr>
  </table>

[ ]  <table>
    <tr>
      <td>Cell 1</td>
      <td>Cell 2</td>
    </tr>
    <caption>A table</caption>
  </table>

[x]  <table>
    <caption>A table</caption>
    <tr>
      <td>Cell 1</td>
      <td>Cell 2</td>
    </tr>
  </table>

[ ]  <caption>A table</caption>
  <table>
    <td>
      <tr>Cell 1</tr>
      <tr>Cell 2</tr>
    </td>
  </table>
```
> ### Q28.   What is the correct markup to provide a quote in the alt attribute of an image?
```
[x]  <img src="cubism.jpg"
    alt='Version of "Whistler\'s Mother" in cubist style'>

[ ]  <img src="cubism.jpg"
    alt="Version of ""Whistler's Mother"" in cubist style">

[ ]  <img src="cubism.jpg"
    alt="Version of "Whistler's Mother" in cubist style">

[ ]  <img src="cubism.jpg"
    alt="Version of \"Whistler's Mother\" in cubist style">
```
> ### Q29.  What is the most semantically accurate way to mark up a main navigation bar, displayed in a horizontal direction?
```
[ ] <nav>
      <ol>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>                
        <li><a href="contact.html">Contact</a></li>
      </ol>
    </nav>

[ ]  <p>
    <a href="index.html">Home</a> |
    <a href="about.html">About</a> |                
    <a href="contact.html">Contact</a> 
    </p>

[x] <nav>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>                
        <li><a href="contact.html">Contact</a></li>
    </ul>
    </nav>

[ ]  <nav>
    <a href="index.html">Home</a> |
    <a href="about.html">About</a> |                
    <a href="contact.html">Contact</a> 
  </nav>
```
> ### Q30. Which statement is false?

- [ ] Inline elements can be nested inside block elements.

- [x] Block elements can be nested inside inline elements.

- [ ] Inline elements can be nested inside inline elements.

- [ ] Block elements can be nested inside block elements.

> ### Q31. what is the correct way to describe an empty element? 

- [ ] It has child but no closing tag.

- [ ] It dissplay nothing on a webside.

- [x] It has opening and closing tags but no child content.

- [ ] It has no chlid content and no closing tag.

> ### Q32. When should you use the `<article>` element?

- [ ] for the main content area of your website.

- [x] when the content stands alone as a unit, is suitable for syndication, or is reusable.

- [ ] to associate comments with a blog post.

- [ ] for blog posts and other social media items.

> ### Q33. How will a video look displayed on a fully loaded webpage if the `<video>` tags is used and the autoplay attribute is not set?
- [ ] It will display nothing unless the poster attribute is set.

- [ ] It will a black window unless the poster attribute is set.

- [ ] It will display a random frame from a video, unless the poster attribute is set.

- [x] It will display the first frame of the video, unless the poster attribute is set.

> ### Q34. Which choice is not a legal type attribute for the `<input>` tag?

- [ ] `<input type="week">`

- [ ] `<input type="color">`

- [ ] `<input type="tel">`

- [x] `<input type="num">`

> ### Q35. What is the semantically correct way to mark up this layout?
```
[ ] <h4>Mailing Address</h4>
    <p><em>
    6410 Via Real <br>
    Carpinteria, CA 93013<br>
    <a href="mailto:info@linkedin.com">info@linkedin.com</a>
    <em></p>

[ ] <p><strong>Mailing Address</strong></p>
    <p><em>
    6410 Via Real <br>
    Carpinteria, CA 93013<br>
    <a href="mailto:info@linkedin.com">info@linkedin.com</a>
    <em></p>

[x] <h4>Mailing Address</h4>
    <address>
    6410 Via Real <br>
    Carpinteria, CA 93013<br>
    <a href="mailto:info@linkedin.com">info@linkedin.com</a>
    </address>

[ ] <h4><strong>Mailing Address</strong></h4>
    <address><em>
    6410 Via Real <br>
    Carpinteria, CA 93013<br>
    <a href="mailto:info@linkedin.com">info@linkedin.com</a>
    <em></address>
```
> ### Q36. What is the best semantic way to indicate that text refers to keyboard entry?

- [ ]  `<p>Press the <tt>Enter</tt> key to proceed.</p>`

- [ ]  `<p>Press the <samp>Enter</samp> key to proceed.</p>`

- [x] ` <p>Press the <kbd>Enter</kbd> key to proceed.</p>`

- [ ]  `<p>Press the Enter key to proceed.</p>`

> ### Q37. What does this code do?
  `<audio autoplay loop src="sound.mp3" type="audio/mpeg"></audio>`

- [ ]  The browser plays the sound once automatically in the background. 
        The user has no  control over the sound.

- [x]  The browser plays the sound automatically and continuously in the background.
       The user has no control over the sound.

- [ ]  When the Play button is pressed, the browser plays the sound over and 
        over again until the user stops it.

- [ ]  The browser plays the sound automatically and continuously in the background. 
        The user may stop the sound at any time.

> ### Q38. What is the most semantically accurate way to mark up this sentence? (Note: "TLAs" stands for "three-letter acronyms.") We are fond of our TLAs in web design.

- [x] `<p>We are fond of our <abbr title="three-letter acronyms">TLAs</abbr> in web design.</p>
`
- [ ] `<p>We are fond of our TLAs in web design.</p>`

- [ ] `<p>We are fond of our <span title="three-letter acronyms">TLAs</span> in web design.</p>`

- [ ] `<p>We are fond of our <acronym title="three-letter acronyms">TLAs</acronym> in web desi`

> ### Q39. What is the difference between the <head> and `<header>` tags?

- [x] There is only one `<head>` tag per page, while there may be many `<header>` tags.

- [ ] all of these answersall of these answers

- [ ] The `<head>` tag contains meta information, while the `<header>` tag contains navigation, 
      logos, and other page identifying content.

- [ ] The `<head>` tag may contain CSS and JavaScript links, while the `<header>` tag may 
      contain headings and navigational links.

> ### Q40. What are the best examples of void elements?

- [ ] `<link><meta><title>`
- [x] `<wbr><base><source>`
- [ ] `<input><br><p>`
- [ ] `<area><embed><strong>`

> ### Q41. In HTML5, which tag or tags embed a webpage inside of a webpage?

- [ ] `<iframe>, <frame>, and <frameset>`
- [ ] `<frame>`
- [x] `<iframe>`
- [ ] `<frame> and <frameset>`

> ### Q42. Where do `<header>` and `<footer>` tags typically occur?

- [ ] as children of `<body>, <article>, <aside>, and <section>` tags
- [x] as children of `<body>, <article>, and <section>` tags
- [ ] as children of `<body>, <article>, <aside>, <nav>, and <section>` tags
- [ ] as children of `<body>, <article>, <table>, and <section>` tags

> ### Q43. The "value" attribute is associated with which set of tags?

- [ ] `<button><input><form>`
- [ ] `<input><label><meter>`
- [ ] `<input><option><textarea>`
- [x] `<li><input><option>`
> ### Q44. What's the best way to apply bold styling to text?

- [x] `<strong>`
- [ ] `Use CSS.`
- [ ] `<bold>`
- [ ] `<b>`

> ### Q45. When is the `<link>` tag used?

- [ ] when linking style sheets, JavaScript, and icons for mobile apps
- [ ] when linking style sheets, favicons, and preloading assets
- [x] when linking style sheets and favicons
- [ ] when linking style sheets, external URLs, and favicons


[(Back to top of the page)](#Linkedin-Assessments-HTML)

