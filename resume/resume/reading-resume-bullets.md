# Crafting Resume Bullets

The primary purpose of your resume is to demonstrate to a recruiter that you
possess specific skills. Recruiters spend only a few seconds glancing over your
resume so you have to rely on keywords to tell the story.

When you are crafting technical bullet points, do not discuss a feature of a
project but discuss **what you did as an engineer** to create that feature!

## Steps to take

1. Identify a key skill or technology you want to demonstrate knowledge in.
2. Pick a feature from one of your projects that either was enabled by said
   technology or let you use the skill you want to demonstrate.
3. Use the skill and feature in a bullet point that tells us how you implemented
   said feature using said skill/technology. Your goal is to demonstrate that
   you understand how that skill/technology actually works from an engineering
   standpoint.

Answer the following for each bullet:
  - What did I do?
  - How does it demonstrate the key skill?
  - What was the impact or benefit?

Examples:

| Skill | Feature              | Impact |
| ----- | -------------------- | ------ |
| APIs  | Global on-off switch | Designed global on-off switch & dimmer React-Native components by making HTTP post requests to the Phillips Hue API changing the state of the bulbs in turn. |
| UI/UX Design | Drag and drop canvas for lightbulbs | Developed a smooth, intuitive UI with high usability by leveraging the React-Native PanResponder Library to allow users to map bulbs to their physical space in their room |
| JS Promises & Async Functions | Saving user preferences | Implemented scenes feature to allow users to save their current settings by utilizing React-Native’s AsyncStorage library & JavaScript promises to fetch & store data asynchronously |

Compile a list of the skills you want to demonstrate, then craft your bullets
around them. 

### Categories of skills you can showcase

**Software related skills**

- Anything you coded. Even if it was brief or unfinished or unofficial
- Quantitative analysis / handling data
- Improvements to a website
- **Important Note about Technical Skills**: When writing, try not to discuss a
  feature, but try to let the reader know about the feature and what YOU did to
  make it happen!

**Interpersonal skills**

- Were part of a team
- Handled heavy volume of customer...
- Mentored someone
- Made clients happy
- Made coworkers happy
- Attracted customers
- Negotiated something

### Quantifiable ways to demonstrate your impact

**Recognition**

- Published something
- Gave a talk
- Won an award
- Given a new responsibility or job title

**Output**

- Made something faster or better
- Reduced number of errors
- Took initiative to do something
- Delivered project on time

**Money**

- Made or saved money
- Handled lots of money (or widgets worth a lot of money)
- Delivered project within budget

## Examples

| Skill      | Action                        | How the action demonstrates the key skill    | Impact/Benefit                         | Result |
| ---------- | ----------------------------- | -------------------------------------------- | -------------------------------------- | ------ |
| Leadership | Founded company softball team | Took initiative. Organized long-term project | Improved team morale and collaboration | "Founded and managed company softball team, resulting in improved morale and communication." |
| Scaling an app | Stored images in the cloud | Shows I know how to use AWS S3 | Reduces server load and allows for scale | "Stores image uploads in the cloud using AWS S3, reducing server load and allowing app to scale gracefully." |
| Use of Third-Party API | Determine user locations and filter searches | Shows I know how to use the Google Maps API | Allows users to search for each other based on location | "Integrates Google Maps API with geolocation based searching to display location of other users on a map." |

## Notes from a technical coach

Bullet points should be substantive. A good pattern to follow is the following:

```
Used «technology» to implement «feature/idea/functionality» allowing for «very brief description of the capabilities»
```

**Good Example**:

- "Utilized AWS S3 and the Paperclip gem to implement user image uploads
  reducing server load and allowing for scalability of image services."

You do not want to use overly simple, un-substantive, or all jargon bullet
points. You also do not want to simply describe what your apps do:

**Bad Examples**:

- "Implemented CRUD functionality for note taking."
- "Persisted user data with AJAX requests to the Rails backend"
- "Leveraged ActiveRecord in Rails to make queries to the PostgreSQL database
  and generate JSON views with the jBuilder gem."

Avoid using technical language that's too casual (i.e. "vanilla", "hand rolled",
or "...in 2 weeks").

You want to avoid terms like 'handrolled' and 'vanilla' in a resume. They are
fine in conversation, but don't read well on a resume. Instead use words like
'custom' or say that you 'designed' or 'implemented' the idea or technology in
question. Rather than say 'vanilla' you can use the term 'basic' in some cases
(like when you build your own middleware from basic javascript) or simply say
the name of the tech or library without any qualifiers. It conveys the same
message.

Also, do not talk about the amount of time it took to build apps or their
features. It does not read as impressive when you say "Implemented music sharing
functionality in 2 weeks." If you want to highlight an impressive time
constraint (i.e. "48 hours for a fullstack app at a hackathon"), include the
name of the event and the amount of time you took to build it in parenthesis.
You can do this in the description of the app before the bullet points, BUT DO
THIS SPARINGLY.

### Questions to help you brainstorm

- Did you find some clever way to DRY up your code?
- Did you bootstrap some data to avoid extraneous AJAX requests?
- Did you make some tough choices in your database schema?
- Did you use cookies to store anything other than a session token?
- Does your Javascript use any math to resize something in the DOM?
- Did you use a library in a way that its author probably didn't anticipate?
- Do you have any data that's nested one degree deeper than usual?
- Did you override a Rails or Backbone.js method? (eg. Model#parse or
  Model#as_json)
- Do your ActiveRecord models run any custom SQL queries?
- Did you make any trade-offs related to performance, eg. store information
  that's costly to compute?
- Are you doing any caching?
- Do you make AJAX requests to any unexpected routes?
- Did you write a custom CompositeView class with a recursive #remove method?
- Does your chess game make a recursive deep_dup to validate moves without
  modifying the game state?
- Do your chess pieces inherit from a Slideable and Steppable class?

**Resume Project Bullet Point Cheat Sheet**: Check out this [cheat sheet] for
creating bullet points!

[cheat sheet]:
  https://appacademy-open-assets.s3-us-west-1.amazonaws.com/portfolio_curriculum/RESUME_DEVELOPMENT_CHEAT_SHEET.pdf

When answering the questions above, the key is to point out features you built
that went **above and beyond** the basic requirements.

Take a look at the properly formatted versions of the examples below
[here][examples-formatted].

### Example bullet points

#### Project Name (Rails, PostgreSQL, React, Redux, React Player, Sass, Webpack, AWS, Heroku)

_A single-page Spotify clone where users can stream music, create playlists,
and follow their friends and favorite artists._

- Integrated React Player with Redux’s global store by dispatching actions only
  when sharing information across components and encapsulating music player data
  to give the user a seamless, uninterrupted experience.
- Reduced needed PostgreSQL database tables by 25% and heavily DRYed up backend
  code by utilizing a one-to-many polymorphic table on the database level, as
  well as Rails concerns on the model and controller level.
- Designed a weighted search algorithm that initially displays the category with
  the most results and orders items based upon the relevance of the search
  query.

#### Project Name (React VR, npm)

_A developer’s toolkit for streamlining the creation of applications in virtual
reality using React VR._

- Published a component library and navigation system for React VR as an npm
  that bypasses common pitfalls of content rendering and 360° visualization in
  virtual reality.
- Created an npx package runner that generates and initiates a pre-configured
  React VR project and demo app with a one-line terminal command to unburden the
  user of needed boilerplate code.
- Packaged a script that scrapes HTML content and dynamically renders it in a VR
  preview with the component library.

#### Project Name (JavaScript, HTML, CSS)

_A minimalist side-scrolling puzzle platformer that requires cooperation and
intuitive thinking in order to solve puzzles._

- Constructed a unidirectional data flow architecture with a single
  application-level state object to prevent mutated state and data collision,
  and to ensure reliable DOM rendering.
- Built a custom physics engine that supports collision of many objects at once
  and manages movement patterns, gravity, and condition for each player while
  flying, swimming, or in gravity chambers.
- Implemented a tile-map parsing system that reads in a level, dynamically
  assigns individual tiles to ‘actor’ and ‘background’ layers, and ensures that
  only ‘actor’ tiles are repainted to the DOM, thus heavily reducing game lag.

#### Project Name

_A web app inspired by Airbnb, built with Rails, React, Redux HTML5, and CSS3_

- Created custom SQL queries and reduced server load through the utilization of
  Active Record associations to extract data from multiple tables in a single
  query
- Ensured user privacy and autonomy through frontend and backend authentication
  measures and React Router, allowing users to only access and make changes to
  their own reservations when logged in
- Introduced improvements in efficiency and complexity to the architecture of
  Airbnb’s current stylesheets through the use of the SASS pre-compiler

#### Project Name

_A fully interactive JavaScript and HTML5 Canvas game based on the classic
Super Nintendo game Bomberman 2_

- Improved player retention through the development of an opponent AI and
  randomized level rendering through the implementation of conditional logic and
  engaging sprites
- Engineered layers of gaming complexity through the introduction of game state
  changes that rely on OOP techniques and vector calculations
- Decreased graphic rendering lag through the use of HTML5 Canvas and animation
  frames, resulting in a more realistic gaming experience

#### Project Name

_A food-sharing iOS app built using React Native and Google Firebase_

- Facilitated primary use case of the app by integrating native camera functions
  with photo uploads to the app database
- Developed user autonomy by linking their food posts to their account, allowing
  for fast and efficient post editing and deletion
- Produced the food post UI using React Native styling and user-centered design
  techniques , improving usability and user retention

- Integrated Google Maps API with the Ruby Geocoder gem and custom search
  functionality to dynamically present business locations based on user
  parameters.
- Utilized Redux architecture's unidirectional data flow with React for
  predictable state and reliablle DOM rendering
- Used observer pattern to handle management of global Z-indexes for overlapping
  items.
- Lowered latency of DB read/write by factor of 7 by using Unicorn to enable
  virtual multi-threaded processing.
- Used xcode in conjunction with React Native library to hook into mobile device
  cameras and geolocation.
- Designed dynamic data-visualizations with Javascript implemented algorithms
  based on user input
- Created custom modal framework using React component architecture allowing for
  efficient development of new forms.
- Created top-level music player using HTML5 audio and React, giving the user
  seamless audio streaming during navigation.
- Leveraged custom event listeners and the Redux cycle to dynamically sync audio
  waveforms and play-pause toggle buttons with music player.
- Utilized CSS media queries to create a fully responsive, device agnostic
  design.
- Configured the Node backend with PostgreSQL, using the Sequelize ORM for
  validations and database queries.
- Incorporated MVC architecture with Polymorphic model associations, reducing
  the number of required tables by almost 50%.
- Implemented local strategy for user authentication with Passport.js, using
  BCrypt for password hashing.
- Generated intelligent, movement-based animation using asynchronous Javascript.
- Developed collision detection algorithm for sprite characters, and integrated
  with keystroke event listeners to predict future player direction and
  movement.
- Utilized HTML Image Maps to allow users to click directly on an item in a
  photograph.
- Recorded user activity using React Router to create a seamless user experience
  during authentication process and app navigation.
- Processed and displayed reat-time BTC price data in the Sentiment Analysis by
  simultaneously leveraging Twitter Streaming API and CoinBase Digital Currency
  API
- Designed intuitive, device-agnostic UI using Adobe Xd to meet Progressive Web
  App (PWA) standards.
- Developed a custom responsive calendar using CSS3 to display logged infusions.

### More example bullet points

- Incorporated React-Redux container and Redux selector patterns to architect
  highly scalable and uni-directional front-end state management.
- Implemented custom back and front end user authentication by combining Rails
  conventions, Active Record, and customized React-Router higher order
  components.
- Adhered to React and ES6 best practices to generate a true single page
  reactive web app experience.
- Leveraged Webpack and Babel to insure a reliable uniform user experience
  across web browsers.
- Optimized database usage and eliminated N+1 queries by observing SQL and
  Active Record best practices.
- Connected the Rails back end to AWS S3 for media storage and organization
  while maintaining content security with AWS IAM.

_If you cloned Spotify, Youtube, Soundcloud, Netflix:_

- Integrated Redux with HTML5 media web components to create customized media
  playback for users.

_If you cloned Evernote, Medium, or Stack Overflow (anything with rich text editing):_

- Applied customized design and functionality to the react-quill library for
  smooth user experience in rich text editing.

_If you implemented auto-save:_

- Extended rich-text-editing functionality by implementing auto-save with native
  Javascript and React.

_If you cloned AirBnB, Couchsurfing, or other "booking" type app:_

- Managed scheduling an booking CRUD through custom transactional database
  operations using Active Record and PostgreSQL.

_If you used Redux to manage form data:_

- Harnessed the unidirectional state management of Redux to simplify React
  components and directly manage data for form inputs and form submissions.

_If you built a search feature:_

- Implemented custom search using redux

[examples-formatted]:
  https://docs.google.com/document/d/1R5O8Hzvt64HokA4NiOp1Njx2G09Bfu0NEuxXyE95uc0/edit?usp=sharing
