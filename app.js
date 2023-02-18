const http = require("http");
// request - об*єкт, який описує весь запит
// response - об*єкт, який описує всю відповідь

const server = http.createServer((request, response) => {
  const { url } = request;
  if (url === "/") {
    response.write("<h2>Home page</h2>");
  } else if (url === "/contacts") {
    response.write("<h2>Contacts page</h2>");
  } else {
    response.write("<h2>Not found</h2>");
  }
  response.end();
});
