const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World depuis Kubernetes !');
});

app.listen(port, () => {
  console.log(`App lancée sur le port ${port}`);
});
