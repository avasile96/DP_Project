const express = require('express');
const router = express.Router();
const Schemas = require('../models/Schemas');

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

router.get('/tweets', (req, res) => {
    const str = [{
        "name": "Manuel Ojeda",
        "msg": "Veamos que madre pasa",
        "username": "Manu"
    }];
    res.end(JSON.stringify(str));
})

router.post('/addTweet', (req, res) => {
    res.end('ALA');
})

module.exports = router;
