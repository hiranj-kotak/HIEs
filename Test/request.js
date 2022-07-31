const https = require("https");

https
    .get("http://127.0.0.1:5000/api1", (resp) => {
        let data = "";

        // A chunk of data has been received.
        resp.on("data", (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on("end", () => {
            console.log(JSON.parse(data).explanation);
        });
    })
    .on("error", (err) => {
        console.log("Error: " + err.message);
    });
