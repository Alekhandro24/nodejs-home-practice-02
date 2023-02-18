const express = require("express");
const { v4 } = require("uuid");

const products = require("../../data/products");

const router = express.Router();

// Задачі:
//1. Отримати товари
//2. Отримати по id
//3. Добавити товар
//4. Обновити товар по id
//5. Видалити товар по id

//1. - GET /api/products
router.get("/", (req, res) => {
  res.json({
    status: "success",
    code: 200,
    data: {
      result: products,
    },
  });
});

//якщо запрос просто на id => ми спочатку id считуємо з параметрів => const { id } = req.params;

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const result = products.find((item) => item._id === id);
  if (!result) {
    res.status(404).json({
      status: "error",
      code: 404,
      message: `Product with id=${id} don't find!`,
    });
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
});

//POST /api/products
// //якщо POST  запрос для добавлення, то нам треба зчитати тіло запросу(POST, Body, raw, JSON => POSTMAN)
router.post("/", (req, res) => {
  const newProduct = { ...req.body, id: v4() };
  products.pus(201).json({
    status: "success",
    code: 201,
    data: {
      result: newProduct,
    },
  });
});

module.exports = router;
