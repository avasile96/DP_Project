const express = require('express');
const router = express.Router();
const Schemas = require('../models/Schemas.js');

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

router.post('/Registration', async (req, res) => {
    const newUserName = req.body.username;
    const password = req.body.pass;
    const fieldThird = req.body.license;
    const userCheck = Schemas.LoginUser;

    const checkUser = await userCheck.findOne({name:newUserName, password:password}).exec();

    const newUser = new Schemas.NewUser({
        name: newUserName,
        password: password,
        thirdField: fieldThird
    });
    if (checkUser === null) {
        try {
            await newUser.save((err, newUserResults) => {
                if (err) res.end('Error saving.');
                res.redirect('/login');
                res.end();
            });
        } catch (err) {
            console.log(err)
            res.redirect('/');
            res.end('User not added.');
        }
    } else {
        res.redirect('/login');
        res.end();
    }
});

router.post('/login', async (req, res) => {
    const userName = req.body.user;
    const pass = req.body.password;
    const userLogin = Schemas.LoginUser;

    const loginUser = await userLogin.findOne({name:userName, password:pass}).exec();
    const checkUser = await userLogin.findOne({name:userName}).exec();

    try {
        if (loginUser != null && checkUser != null) {
            res.redirect('/dash');
            res.end();
        } else if (loginUser === null && checkUser != null) {
            res.redirect('/login');
            res.end();
        } else {
            res.redirect('/Registration');
            res.end();
        }
    } catch (err) {
        console.log(err)
        res.redirect('/');
        res.end('User not added.');
    }
});

router.post('/pat_reg', async (req, res) => {
    const patientName = req.body.patient;
    const pressureBlood = req.body.blood;
    const BMI = req.body.BMI;
    const Patient = Schemas.Patient;

    const checkPatient = await Patient.findOne({name:patientName}).exec();

    const newPatient = new Schemas.NewPatient({
        name: patientName,
        bloodPressure: pressureBlood,
        bodyMassIndex: BMI
    });
    if (checkPatient === null){
        try {
            await newPatient.save((err, newUserResults) => {
                if (err) res.end('Error saving.');
                res.redirect('/dash');
                res.end();
            });
        } catch (err) {
            console.log(err)
            res.redirect('/pat_reg');
            res.end('User not added.');
        }
    } else {
        res.redirect('/dash');
        res.end();
    }
});

module.exports = router;
