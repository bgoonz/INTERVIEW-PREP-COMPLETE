# Event App React-Redux Already Packaged

## Website [Demo](https://lower-toonie-23867.herokuapp.com/)

## Setup

- run `npm install`

## RUN

- running dev (hot reloading)
  - `cd FullStackCalendar && npm run start:dev`
  - API will be running on port 3001
  - on seperate terminal, `cd CalendarFrontEnd && npm start`
  - App will be running on port 3000
- running production
  - `cd CalendarFrontEnd && npm run build`
  - `cp build/* -r ../FullStackCalendar`
  - `npm start`

# Features

- Local Persisted Authentication + user have to be logged to create an event
  - user can only modified and delete polls s/he created
    - user will be promted with a notification

## APIs

- Rules
  - all backend routes start with '/api', e.g. localhost:8000/api/polls'
  - you have to be logged in to access most routes, e.g, post, put and delete routes

## Backend

    - Rules
    + all backend routes start with '/api/v1/', e.g. http://localhost:3001/api/polls'
    + you have to be logged in to access most routes, e.g, post, put and delete routes

### POST /events

    + create a new event

### GET /events

    + returns all events with their options

### DELETE /events/:id

    + deletes a event, all its associated voting records will also be deleted

### PUT /events/:id

    + update an existing event.
