const express = require('express');
const users = require('./routes/users');
const contacts = require('./routes/contacts');
const auth = require('./routes/auth');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to the contact keeper API' });
});

app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/contacts', contacts);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
