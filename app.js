const express = require('express');
const path = require('path');
const app = express();
const Users = require('./Users');
const User = require('./User');

let users = new Users();
let user, matches;

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // You can store your EJS templates in a 'views' folder

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/Login/login.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '/Login/signup.html'));
});

app.get('/newUser', (req, res) => {
  res.sendFile(path.join(__dirname, 'newUser.html'));
});

app.use(express.json());

app.post('/submit', (req, res) => {
  const userData = req.body;
  user = new User(userData.userName, "", userData.gender, userData.preferToRoomWith, userData.sleepLevel, parseInt(userData.cleanLevel), parseInt(userData.noiseLevel), parseInt(userData.partyLevel));
  users.addUser(user);
  console.log(users.users);
  matches = users.findBestMatches(user);
  res.json({ redirect: '/mainMenu' });
});

app.get('/mainMenu', (req, res) => {
  console.log(matches);
  res.render('mainMenu', { matches }); // Render the 'mainMenu.ejs' file with the matches data
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
