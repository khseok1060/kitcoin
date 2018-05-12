const express = require("express"),
  bodyParser = require("body-parser"),
  morgan = require("morgan"),
  Blockcahin = require('./blockchain');

const { getBlockchain, createNewBlock } = Blockcahin; 

const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(morgan("combined"));
app.listen(PORT, () => console.log(`Kitcoin Server running on ${PORT}`));
