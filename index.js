const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('User Service Running');
});

app.listen(port, () => {
  console.log(`User Service listening on port ${port}`);
});
