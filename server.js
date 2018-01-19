const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const middleWare = require('./middleWare');
const User = require('./user');
const bcrypt = require('bcrypt');
const { sendUserError, hashedPassword, loggedIn, restrictedPermissions } = require('./middleWare');

const STATUS_USER_ERROR = 422;
const BCRYPT_COST = 11;

const server = express();
server.use(bodyParser.json());
const corsOptions = {
  "origin": "http://localhost:3000",
  "credentials": true
};
server.use(cors(corsOptions));
server.use(session({
  secret: 'e5SPiqsEtjexkTj3Xqovsjzq8ovjfgVDFMfUzSmJO21dtXs4re',
  resave: false,
  saveUninitialized: true
}));

server.use(restrictedPermissions);

server.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    sendUserError('email undefined', res);
    return;
  }
  User.findOne({ email }, (err, user) => {
    if (err || user === null) {
      sendUserError('No user found at that id', res);
      return;
    }
    const hashedPw = user.passwordHash;
    bcrypt
      .compare(password, hashedPw)
      .then((response) => {
        if (!response) throw new Error();
        req.session.email = email;
        req.user = user;
      })
      .then(() => {
        res.json({ success: true });
      })
      .catch((error) => {
        return sendUserError(error, res);
      });
  });
});

server.post('/users', hashedPassword, (req, res) => {
  const { email } = req.body;
  const passwordHash = req.password;
  const newUser = new User({ email, passwordHash });
  newUser.save((err, savedUser) => {
    if (err) {
      res.status(422);
      res.json({ 'Need both Email/Password fields': err.message });
      return;
    }

    res.json(savedUser);
  });
});

server.post('/logout', (req, res) => {
  if (!req.session.email) {
    sendUserError('User is not logged in', res);
    return;
  }
  req.session.email = null;
  res.json(req.session);
});

server.get('/restricted/users', (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      sendUserError('No user found', res);
      return;
    }
    res.json(users);
  });
});

// TODO: add local middleware to this route to ensure the user is logged in
server.get('/me', loggedIn, (req, res) => {
  // Do NOT modify this route handler in any way
  res.send({ user: req.user, session: req.session });
});

server.listen(3333);