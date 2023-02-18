const express = require("express");

const products = require("./products");

const app = express();

// app.set("json spaces", 555);

app.get("/products", (req, res) => {
  //   res.send(products);
  res.json(products);
  //   res.send(null);
  //   res.json(null);
  //   res.json({
  //     status: "success",
  //     code: 200,
  //     data: {
  //       result: products,
  //     },
  //   });
  //   res.render("products", { name: "iPhone" });
});

app.listen(3000);
