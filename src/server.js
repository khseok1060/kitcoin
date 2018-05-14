const express = require("express"),
  bodyParser = require("body-parser"),
  morgan = require("morgan"),
  Blockcahin = require('./blockchain'),
  P2P = require('./p2p');

const { getBlockchain, createNewBlock } = Blockcahin; 
const { startP2PServer } = P2P;

const PORT = process.env.HTTP_PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(morgan("combined"));

app.get("/blocks", (req, res) => {
  res.send(getBlockchain());
});

app.post("/blocks", (req, res) => {
  const { body: { data } } = req;
  const newBlock = createNewBlock(data);
  res.send(newBlock);
});

const server = app.listen(PORT, () => console.log(`Kitcoin HTTP Server running on port ${PORT} ✅`));

startP2PServer(server);
