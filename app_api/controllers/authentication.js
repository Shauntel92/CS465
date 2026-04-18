const passport = require('passport');
const jwt = require('jsonwebtoken');

const login = (req, res) => {

  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ message: "All fields required" });
  }

  passport.authenticate('local', (err, user, info) => {

    if (err) {
      return res.status(404).json(err);
    }

    if (user) {
      const token = jwt.sign(
        { email: user.email, name: user.name },
        'MY_SECRET_KEY',
        { expiresIn: '1h' }
      );

      return res.status(200).json({ token });
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }

  })(req, res);
};

module.exports = {
  login
};