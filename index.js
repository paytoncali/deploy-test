const express = require('express');
const { fstat } = require('fs');
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    return fs.readFile(path.join(__dirname, "index.html"), (e, data) => {
        if (e) console.error(e);
        res.writeHead(200, {'Content-Type': "text/html"});
        });
});

app.listen(PORT, () => { console.log(`app listening on port ${PORT}`)});