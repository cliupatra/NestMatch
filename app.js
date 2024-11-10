const express = require('express');
const path = require('path');
const app = express();
const Users = require('./Users');
const User = require('./User');

let users = new Users();

app.use(express.static(__dirname));



app.get('/newUser', (req, res) => {
  res.sendFile(path.join(__dirname, 'newUser.html'));
});

app.use(express.json());

app.post('/submit', (req, res) => {
  const userData = req.body;
  let user = new User(userData.userName, "", userData.gender, userData.preferToRoomWith, userData.sleepLevel, userData.cleanLevel, userData.noiseLevel, userData.partyLevel);
  users.addUser(user);
  console.log(users.users);
  res.json({ redirect: '/mainMenu' });
});

app.get('/mainMenu', (req, res) => {
  res.sendFile(path.join(__dirname, 'mainMenu.html'));
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});


