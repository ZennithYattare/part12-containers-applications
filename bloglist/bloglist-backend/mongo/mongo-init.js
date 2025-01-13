db.createUser({
  user: 'the_username',
  pwd: 'the_password',
  roles: [
    {
      role: 'dbOwner',
      db: 'bloglist',
    },
  ],
});

// Switch to the bloglist database
db = db.getSiblingDB('bloglist');

// Create collections
db.createCollection('users');
db.createCollection('blogs');
db.createCollection('comments');

// NOTE: Use `hash-password.js` to generate the hashed password
db.users.insert({ username: 'janedoe', name: 'Jane Doe', passwordHash: 'your_hashed_password_here' });