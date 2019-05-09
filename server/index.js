const express = require('express');
const path = require('path');
// const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// app.use(cors());

app.use(express.static(path.join(__dirname, '../dist')));

app.listen(port, () => {
  console.log('SERVER STARTED');
});
