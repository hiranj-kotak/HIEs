const http = require("http");

const options = {
  "method": "GET",
  "hostname": "127.0.0.1",
  "port": "5000",
  "path": "/api2",
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();