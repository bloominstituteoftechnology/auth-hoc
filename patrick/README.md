# LS-Client-Auth

## Assignment
Start your MongoDB server by running `mongod` from the command line.
Start up your Auth server that we extended in the mini lab.

Complete the SignUp component. When the user fills out the form you should send an
axios POST request to the server to save the user to the database. From there, the user will
be redirected to the `/signin` page to login. Upon successful login, the server will be persisting
their session, and the user should be able to get a list of all the users currently stored in
the database (you'll want to test this by registering a bunch of users). 

You'll also need to complete the `RequireAuth` higher-order component in `/components/HOC`. This 
higher-order component wraps the `users` component to ensure that only authorized users can view
that component. 

There's lots of starter code in this repo that you can use as a reference. 

## Extra Credit
Clone down [this](https://github.com/LambdaSchool/LS-Auth-JWT/tree/solution) repository, which is an auth 
server implementation that handles sessions with JWTs instead of sessions. Have a look around the code and
try to understand as much of what it is doing as you can. Refactor your client to interface with this server 
and persist JWTs in localStorage. 

Some of the things that you'll need to change include:
 * Your actions that make calls to your server will all need to be refactored to handle the JWT token accordingly.
 * The way you check if a user is authenticated throughout your application will need to change (i.e. in the `RequireAuth` higher-order component).
 * There is no `/restricted/users` route on this server, so don't forget to update this on your client accordingly.
 * Logging out is now an entirely client-side operation. Simply invalidate the JWT client-side. Note that the server doesn't even have a `/logout` route.

## Insanity Mode
Build the entire client from scratch and duplicate this functionality. It is highly
encouraged that you attempt this if you finish the project early.
