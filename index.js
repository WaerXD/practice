const express = require("express");
const http = require("http");
const cors = require("cors");
const { reverseArray } = require("./reverseArray");
const { reverseCase } = require("./reverseCase");
const { sum } = require("./sum");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  console.log("URL = ", req.url);
  console.log("Original_URL = ", req.originalUrl);
  console.log("METHOD = ", req.method);
  console.log("HOST = ", req.headers.host);
  console.log("IsSecure = ", req.secure);
  console.log("BODY", req.body);
  console.log("QUERY", req.query);

  next();
});

app.all("/", (req, res) => {
  res.status(200).json({ message: "This is a Test API12 request!" });
});

app.get("/sum", (req, res) => {
  let sumValue = sum(req.body.num1, req.body.num2);
  res.status(200).json({ sumValue });
});

app.get("/reverseArray", (req, res) => {
  let reversedArray = reverseArray(req.body.array);
  res.status(200).json({ reversedArray });
});

app.get("/reverseCase", (req, res) => {
  let reversedString = reverseCase(req.body.str);
  res.status(200).json({ reversedString });
});

http.createServer(app).listen(3000, () => {
  console.log("Server is working on port 3000");
});