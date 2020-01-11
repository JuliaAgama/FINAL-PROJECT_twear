const https = require('https');

exports.getCurrency = (req, res) => {

    https.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', (resp) => {
        let data = '';
        resp.on('data', (chunk) => {
            data += chunk;
            data = JSON.parse(chunk.toString());
            res.send(data);
        });

    }).on("error", (err) => {
        res.send("Error: " + err.message);
    })
};