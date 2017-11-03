require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive');

const app = express();
app.use(cors());
app.use(bodyParser.json());
massive( process.env.CONNECTION_STRING ).then( db =>{ 
    app.set('db', db) 
});

app.get('/api/reviews/movies/', (req, res) => {
    const db = app.get('db')
    db.get_latest_review().then(response => {
        res.status(200).send(response)
    })
})


const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));