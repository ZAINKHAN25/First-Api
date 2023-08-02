var http = require('http');
var fs = require('fs');
var url = require("url");
  
const server = http.createServer(function (req, res) {
  // Add CORS headers to allow requests from any origin (replace * with your specific domain if needed)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  if (req.url == "/" || req.url == "/Dashbord") {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`<body style="background-color:black; display:flex; align-items:center;justify-content:center; color:white;"><h1>You are in home page</h1></body>`);
    res.end();
  } else if (req.url == "/About") {
    res.writeHead(200, {'Content-Type': 'application/json'});
    fs.readFile('./file/main.txt', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.end('Error reading the file.');
      } else {
        res.end(JSON.stringify({
          "id": 1,
          "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          "price": 109.95,
          "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          "category": "men's clothing",
          "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          "rating": {"rate": 3.9, "count": 120}
        }));
      }
    });
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log("server is started at port 8000");
});
