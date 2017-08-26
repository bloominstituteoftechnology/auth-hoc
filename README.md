# LS-Client-Auth

## Packages

* `redux-thunk`
* `cors`

## Topics

*	Redux Thunk
* localStorage
* axios's config object
* http headers


## Assignment

Clone down this project.  Run `npm i`.
Start your MongoDB server by running `mongod` from the command line.
Start up your (completed) server from the server Auth sprint. If your 
implementation isn't complete, feel free to clone down from the solution
repository.

Complete the SignUp component.  When the user fills out the form you should send and
axios POST request to the server to save the user to the database.  If successful then you
should save the provided JWT to localStorage and then redirect the user to `/users`.
User the existing code as a reference.

You will also need to make sure that your server is using the `cors` middleware.
Instructions for adding cors:
* `npm i --save cors`
* `const cors = require('cors');`
* `app.use(cors());`

## Insanity Mode

Build the entire client from scratch and duplicate this functionality.  I highly
encourage you all to attempt this if you finish the project early.
