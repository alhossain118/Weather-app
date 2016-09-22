const PORT = 7070;
const express = require('express');

// Create our App
const app = express();

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Express listening on PORT ${PORT}`);
});
