const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  {
    usernameField: 'email'
  },
  function(email, password, done) {

    // TEMP mock user (for assignment)
    if (email === 'admin@test.com' && password === 'password123') {
      return done(null, {
        email: email,
        name: 'Admin User'
      });
    } else {
      return done(null, false);
    }

  }
));