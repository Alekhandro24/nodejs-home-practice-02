const express = require("express");
const fs = require("fs/promises");
const moment = require("moment");
const cors = require("cors");
const products = require("./products");

const app = express();

app.use(cors());

// -отримати метод запросу - req
//- адресу запросу - req
//- сформувати дату
// app.use(async (req, res, next) => {
//   const { method, url } = req;
//   const date = moment().format("DD-MM-YYYY_hh:mm:ss");

//   await fs.appendFile("server.log", `\n${method} ${url} ${date}`);

//   next();
// });

// app.use((req, res, next) => {
//   console.log("1111");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("2222");
//   next();
// });

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(3000);
