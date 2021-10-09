const express = require("express");
const app = express();
const BST = require("../utils/BST");
const { ranges, toRangeString } = require("../utils/ranges");

let storage = new BST();

app.get("/insert/:data", (req, res) => {
  const { data } = req.params;
  let result = storage.insert(parseInt(data));
  res.send(`Zip code ${result} inserted \n`);
});

app.get("/delete/:data", (req, res) => {
  const { data } = req.params;
  let result = storage.delete(data);
  res.send(`Zip code ${result} deleted \n`);
});

app.get("/has/:data", (req, res) => {
  const { data } = req.params;
  let result = storage.search(data);
  res.send(result + "\n");
});

app.get("/display", (req, res) => {
  const { data } = req.params;
  let result = toRangeString(ranges(storage.inorder(data)));
  res.send(result + "\n");
});

app.listen(3000);
