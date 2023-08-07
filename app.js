// var http = require("http");
// var url = require("url");
// let num = 0;


// const server = http.createServer((req,res) => {
//   if (req.url == '/' || req.url == "/Home") {
//     num = (num + 1);
//     console.log("Server chala " + (num) + " bar");
//     res.writeHead(200,{
//       'Content-type': 'text/html'
//     })
//     res.end("<h1>Server chala " + (num) + " bar</h1>");
//   }
//   else{
//     res.end('Nahi chala kya kar lo ge')
//   }
// });

// server.listen(8000, () => { 
//   console.log('Server Chal gya');
// })

var express = require('express');
var app = express();
var port = 8000;

app.get('/',(req, res)=>{
  res.json({
    name: "Zain is a good boy",
    khan: "Dont you know me"
  })
})

app.listen(port, ()=>{
  console.log(`Server is running on localhost:${port}`);
})