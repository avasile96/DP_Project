const express = require('express');
const router = express.Router();
const Schemas = require('../models/Schemas.js');

/*// Uncomment to add a new user document to our users table
// To use this, run the backend server, then go to URL: localhost:4000/addUser
router.get('/addUser', async (req, res) => {
    const user = {username: 'eaglefang', fullname: 'Sensei Johnny'};
    const newUser = new Schemas.Users(user);
    try {
        await newUser.save( async(err, newUserResult) => {
            console.log('New user created!');
            res.end('New user created!');
        });
    } catch(err) {
        console.log(err);
        res.end('User not added!');
    }
});*/


router.get('/tweets', (req, res) => {
    const str = [
        {
            "name": "Alex",
            "msg": "This is my first tweet!",
            "username": "avasile"
        },
    ];
    res.end(JSON.stringify(str));
});

router.post('/addTweet', (req, res) => {
    res.end('NA');
});

module.exports = router;