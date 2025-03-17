// ------- Express Setup -------

const express = require('express');
const app = express();
const port = 2030;

// --------------------------

//other

const fs = require('fs');
const path = require('path');
// ------- Cors Setup -------

const cors = require('cors');

// --------------------------

let tag = 0;

// ------- Multer Setup -------

const multer = require('multer');
const storyge = multer.diskStorage({
  destination: (req, flie, cb) => {
    cb(null, './uploeadedImages');
  },
  filename: (req, file, cb) => {
    cb(null, tag.toString());
  },
});
const upload = multer({ storage: storyge }); // Files will be saved in the 'uploads' directory

// --------------------------

// Middleware
app.use(express.json());
app.use(cors());

app.post('/sendData', upload.single('image'), (req, res) => {
  let data = require('./data.json');
  data.push(req.body);
  data[data.length - 1]['ImageTag'] = tag;
  fs.writeFileSync('./data.json', JSON.stringify(data));
  console.log(`\n\x1b[1m\x1b[34m---------------------------------------------\n
    \x1b[1m\x1b[37m Post reqest to\x1b[31m /send data\n\x1b[0m
     ${JSON.stringify(req.body)}\x1b[1m\x1b[37m'\n
     End with status code:\x1b[1m\x1b[32m 200\n\n\x1b[1m\x1b[34m---------------------------------------------\n
    \x1b[0m
    `);
  res.status(200).end();
});

app.listen(port, () => {
  console.log(
    '\n\x1b[1m\x1b[34m',
    `---------------------------------------------\n\n`,
    '\x1b[37m',
    'Server is running on port: ',
    '\x1b[1m\x1b[32m',
    `${port}`,
    '\x1b[1m\x1b[34m',
    '\n\n',
    `---------------------------------------------\n`,
    '\x1b[0m'
  );
});
