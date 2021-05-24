const express = require('express');
const router = express.Router();
const Schemas = require('../models/Schemas');

/*
router.get('/addUser', async (req, res) => {
    const user = {username: 'Manuelito', fullname: 'Manuelitooo'};
    const newUser = new Schemas.Users(user);

    try {
        await newUser.save( async(err, newUserResult) => {
            console.log('New user created!');
            res.end('New user created!');
        });
    } catch (err) {
        console.log(err);
        res.end('User not added!')
    }
})
*/

// SELECT FROM TABLE JOIN a ON b
router.get('/tweets', async (req, res) => {
    const twetts = Schemas.Tweets;

    // const userTweets = await twetts.find({}, (err, tweetData) => {
    const userTweets = await twetts.find({}).populate("user").exec((err, tweetData) => {
        if (err) throw err;
        if (tweetData) {
            res.end(JSON.stringify(tweetData));
        } else {
            res.end();
        }
    });
});

router.post('/addTweet', async (req, res) => {
    const userTweet = req.body.tweetInput;
    const user = Schemas.Users;
    const userId = await user.findOne({username:'manuel'}).exec();

    const newTweet = new Schemas.Tweets({
        tweet: userTweet,
        user: userId._id
    });

    try {
        await newTweet.save((err, newTweetResults) => {
            if (err) res.end('Error Saving.');
            res.redirect('/tweets');
            res.end();
        });
    } catch (err) {
        console.log(err);
        res.redirect('/tweets');
        res.end();
    }
})

module.exports = router;
