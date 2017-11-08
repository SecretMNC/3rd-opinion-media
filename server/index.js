require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , axios = require('axios');

const app = express();
app.use(cors());
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
});

//endpoints
//diplaying latest review
app.get('/api/reviews/movies/latest', (req, res) => {
    const db = app.get('db')
    db.get_latest_review().then(response => {
        res.status(200).send(response)
    })
});

app.get('/api/info/:retrieve', (req, res) => {
    const db = app.get('db')
    // console.log(req.params.retrieve)
    db.get_image([req.params.retrieve]).then(image => { 
        
        if (image[0]) {
            // console.log('here')
            res.status(200).send(image)
        } else {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.KEY}&query=${req.params.retrieve}`)
                .then(response => {
                    res.status(200).send(response)
                })
        }
    })
});

app.get('/api/info/:search', (req, res) => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.KEY}&query=${req.params.search}`)
        .then(response => {
            res.status(200).send(response.data)
        })
});

app.get('/api/users/', (req, res) => {
    const db = app.get('db')
    db.get_reviewers().then(response => {
        res.status(200).send(response)
    })
});

app.get('/api/reviews/movies/', (req, res) => {
    const db = app.get('db')
    db.get_movie_reviews().then(response => {
        res.status(200).send(response)
    })
});

app.get('/api/reviews/:review', (req, res) => {
    const db = app.get('db')
    db.get_review([req.params.review]).then(response => {
        res.status(200).send(response)
    })
});

app.get('/api/bios/', (req, res) => {
    const db = app.get('db')
    db.get_reviewers().then(response => {
        res.status(200).send(response)
    })
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));