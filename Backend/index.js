const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

let messages = [];

app.get('/messages', (req, res) => {
  res.status(200).json(messages);
});

app.post('/messages', (req, res) => {
  const { userId, text } = req.body;
  const newMessage = { userId, text };
  messages.push(newMessage);
  res.status(201).json(newMessage);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
