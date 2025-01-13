// WARNING: ONLY USE FOR DEVELOPMENT MODE
// NOTE: This is used for setting up a user in DEVELOPMENT MODE when building the Docker image. The password is hashed using bcrypt.
const bcrypt = require('bcrypt');

const password = 'your_password_here'; // Replace with the password you want to hash
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) {
    console.error('Error hashing password:', err);
  } else {
    console.log('Hashed password:', hash);
  }
});