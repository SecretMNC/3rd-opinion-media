require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , axios = require('axios')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../build`));

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

massive(process.env.CONNECTION_STRING).then(db => {
    console.log('db is connected');
    app.set('db', db);
});

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENTID,
    clientSecret: process.env.AUTH_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
}, function (accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get('db');
    const userData = profile._json;
    // console.log(profile._json);
    db.find_user([userData.identities[0].user_id])
        .then(user => {

            if (user[0]) {
                return done(null, user[0].id);
            } else {
                db.create_user([
                    userData.name,
                    userData.picture,
                    userData.email,
                    userData.identities[0].user_id
                ]).then(user => {
                    return done(null, user[0].user_id);
                }).catch(err => console.log('create', err))
            }
        }).catch(err => console.log('find', err));
}));

passport.serializeUser(function (id, done) {
    done(null, id);
});
passport.deserializeUser(function (id, done) {
    app.get('db').find_session_user([id])
        .then(user => {
            return done(null, user[0]);
        })
});

//endpoints
app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/input',
    failureRedirect: '/auth'
}));
app.get('/auth/me', (req, res) => {
    if (req.user) {
        return res.status(200).send(req.user);
    } else {
        return res.status(401).send('Need to log in.')
    }
});

app.get('/auth/logout', (req, res) => {
    req.logout()
    res.redirect(process.env.REACT_APP_LOGOUT)
});


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

            res.status(200).send(image)
        } else {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.KEY}&query=${req.params.retrieve}`)
                .then(response => {
                    db.post_image([
                        response.data.results[0].poster_path,
                        response.data.results[0].title
                    ]).then(response => {
                        res.status(200).send(response)
                    })
                })
        }
    })
});

// app.get('/api/info/:search', (req, res) => {
//     axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.KEY}&query=${req.params.search}`)
//         .then(response => {
//             res.status(200).send(response.data)
//         })
// });

//Supplies biographies for each reviewer in bios.js component

app.get('/api/bios/', (req, res) => {
    const db = app.get('db')
    db.get_reviewers().then(response => {
        res.status(200).send(response)
    })
});

//Gives the Lists.js component a different list based on the clicked link
app.get('/api/reviews/:media/', (req, res) => {
    const db = app.get('db')

    if (req.params.media === 'movies') {
        db.get_movie_reviews().then(response => {
            res.status(200).send(response)
        });
    } else if (req.params.media === 'TVshows') {
        db.get_tvshow_reviews().then(response => {
            res.status(200).send(response)
        })
    } else if (req.params.media === 'anime') {
        db.get_anime_reviews().then(response => {
            res.status(200).send(response)
        })
    } else if (req.params.media === 'videogames') {
        db.get_videogame_reviews().then(response => {
            res.status(200).send(response)
        })
    }
});

app.get('/api/getReview/:media/:review/', (req, res) => {
    const db = app.get('db')
    if (req.params.media === 'movies') {
        db.get_movie_review([req.params.review]).then(response => {
            res.status(200).send(response)
        });
    } else if (req.params.media === 'TVshows') {
        db.get_tvshow_review([req.params.review]).then(response => {
            res.status(200).send(response)
        })
    } else if (req.params.media === 'anime') {
        db.get_anime_review([req.params.review]).then(response => {
            res.status(200).send(response)
        })
    } else {
        db.get_videogame_review([req.params.review]).then(response => {
            res.status(200).send(response)
        })
    }
});



app.post('/api/postImage/', (req, res) => {
    const db = app.get('db')
    db.post_image().then(response => {
        res.status(200).send(response)
    })
})

app.post('/api/input/Movie', (req, res) => {
    const db = app.get('db')
    // console.log(req.user.id)
    db.post_movie_review([
        req.user.id,
        req.body.title,
        req.body.review,
        req.body.sample,
        req.body.name,
        req.body.rating,
        req.body.imageURL
    ]).then(response => {
        res.status(200).send(response)
    })
});

app.post('/api/input/TVshow', (req, res) => {
    const db = app.get('db')
    db.post_tvshow_review([
        req.user.id,
        req.body.title,
        req.body.review,
        req.body.sample,
        req.body.name,
        req.body.rating,
        req.body.imageURL
    ]).then(response => {
        res.status(200).send(response)
    })
});

app.post('/api/input/Anime', (req, res) => {
    const db = app.get('db')
    db.post_anime_review([
        req.user.id,
        req.body.title,
        req.body.review,
        req.body.sample,
        req.body.name,
        req.body.rating,
        req.body.imageURL
    ]).then(response => {
        res.status(200).send(response)
    })
});

app.post('/api/input/Videogame', (req, res) => {
    const db = app.get('db')
    db.post_videogame_review([
        req.user.id,
        req.body.title,
        req.body.review,
        req.body.sample,
        req.body.name,
        req.body.rating,
        req.body.imageURL
    ]).then(response => {
        res.status(200).send(response)
    })
});

// const path = require('path')
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../build/index.html'));
// });

const PORT = 8080;
app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));