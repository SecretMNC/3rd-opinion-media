const express = require('express')
    , bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());



const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));