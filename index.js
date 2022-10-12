const express = require("express");
const http = require("http");
const cors = require("cors");
const { engine } = require('express-handlebars');

/*const { reverseArray } = require("./reverseArray");
const { reverseCase } = require("./reverseCase");
const { sum } = require("./sum"); */

const PORT = 3000;
const app = express();


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
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


const messages = [];

app.get('/', (req,res) => {
  res.render("home", {messages} )
});

app.post('/message', (req,res) => {
  const messageText = req.body.messageText;
  messages.push(messageText);
  res.redirect('/');
});

app.get('/done',(req, res) => {
  messages.pop();
  res.status(200).redirect('/');
})

http.createServer(app).listen(PORT, () => {
  console.log(`Server is working on port ${PORT}`);
});

/*
app.get("/reverseArray", (req, res) => {
  let reversedArray = reverseArray(req.body.array);
  res.status(200).json({ reversedArray });
});

app.get("/sum", (req, res) => {
  let sumValue = sum(req.body.num1, req.body.num2);
  res.status(200).json({ sumValue });
});

app.get("/reverseCase", (req, res) => {
  let reversedString = reverseCase(req.body.str);
  res.status(200).json({ reversedString });
});
 */