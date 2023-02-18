const { response } = require("express");
const express = require("express");

// створюємо веб-сервер, визиваючи експрес як функцію
const app = express();

// добавляємо дані(записи), викликаємо метод
// якщо прийде GET запит
// request - вся інформація про запрос
app.get("/contacts", (request, response) => {
  console.log(request.url);
  console.log(request.method);
  console.log(request.headers);
  response.send("<h2>Contact Page</h2>");
});
app.get("/", (request, response) => {
  response.send("<h2>Home Page</h2>");
});

// запуск веб-сервера
app.listen(3000, () => console.log("hi"));
