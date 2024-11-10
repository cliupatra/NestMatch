const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'newUser.html'));
});

app.use(express.json());

app.post('/submit', (req, res) => {
  const userData = req.body;
  console.log(userData);

  res.json({ message: 'Data received successfully!' });
})

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});


