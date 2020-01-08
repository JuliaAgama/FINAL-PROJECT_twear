const https = require('https');

exports.getCurrency = (res) => {

    https.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', (resp) => {
        let data = '';
        resp.on('data', (chunk) => {
            data += chunk;
            data = JSON.parse(chunk.toString());

        });
        res.send(data)
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    })
};