require('dotenv').config();
const cookieSession = require('cookie-session');
const express = require('express');
const cors = require('cors');
const passportSetup = require('./passport');
const passport = require('passport');
const authRoute = require('./routes/auth');
const app = express();

app.use(
  cookieSession({
    secret: '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',
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  })
);

app.use('/auth', authRoute);

app.listen('5000', () => {
  console.log('Server is running!');
});
