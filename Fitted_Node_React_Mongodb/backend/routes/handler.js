const express = require('express');
const router = express.Router();
const Schemas = require('../models/Schemas.js');
const tf = require('@tensorflow/tfjs');

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
            if (err) res.end('Invalid Input.');
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
                if (err) res.end('Invalid Input.');
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
                if (err) res.end('Invalid Input.');
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

router.get('/dash', async (req, res) => {
    const patients = Schemas.Patient;

    const basePatients = await patients.find({}, (err, patientData) => {
        if (err) throw err;
        if (patientData) {

            // Generate some synthetic data for training.
            const xs = tf.tensor2d([
                [130, 10],
                [150, 20],
                [180, 35],
                [130, 10],
                [150, 20],
                [180, 35],
                [130, 10],
                [150, 20],
                [180, 35],
            ]);
            const ys = tf.tensor1d([10, 50, 100,10, 50, 100,10, 50, 100]);
            /*console.log(xs.shape.slice(1));*/
            // Generate model
            const model = tf.sequential();
            model.add(tf.layers.dense({ units: 4, inputShape: xs.shape.slice(1), activation: "relu", kernelInitializer: "heUniform"}));
            model.add(tf.layers.dense({ units: 4, activation: "relu", kernelInitializer: "heUniform"}));
            model.add(tf.layers.dense({ units: 4, activation: "relu", kernelInitializer: "heUniform"}));
            model.add(tf.layers.dense({ units: 1, activation: "relu", kernelInitializer: "heUniform"}));
            model.compile({ optimizer: 'adam', loss: 'meanSquaredError', metrics: ['accuracy'] });

            // Train the model using the fake data.
            model.fit(xs, ys, {epochs: 200}).then(() => {
                for (let i = 0; i < patientData.length; i += 1) {
                    // Use the model to do inference on a data point the model hasn't seen before:
                    const pred = model.predict(tf.tensor2d([patientData[i].bloodPressure, patientData[i].bodyMassIndex], [1,2]));
                    patientData[i].__v= pred.arraySync().flat()[0];
                    /*console.log(patientData[1]);*/
                }
                /*console.log(patientData);*/
                res.end(JSON.stringify(patientData));
            });

        } else {
            res.end();
        }
    });
});

router.post('/pat_del', async (req, res) => {
    const patientName = req.body.patient;
    const Patient = Schemas.Patient;
    // const deletePatient = await Patient.deleteOne({name:patientName}).exec()

    try {
        await Patient.deleteOne({name:patientName}, (err, patientDeleted) => {
            if (err) res.end('Error deleting.');
            res.redirect('/dash');
            res.end();
        });
    } catch (err) {
        console.log(err);
        res.redirect('/dash');
        res.end();
    }
});
//
// router.post('/pat_up', async (req, res) => {
//     const patientName = req.body.patient;
//     const Patient = Schemas.Patient;
//     // const deletePatient = await Patient.deleteOne({name:patientName}).exec()
//
//     try {
//         await Patient.updateOne({name:patientName}, (err, patientDeleted) => {
//
//             });
//     } catch (err) {
//         console.log(err);
//         res.redirect('/dash');
//         res.end();
//     }
// });


router.post('/pat_up', async (req, res) => {
    const patientName = req.body.patient;
    const pressureBlood = req.body.blood;
    const BMI = req.body.BMI;
    const Patient = Schemas.Patient;

    const checkPatient = await Patient.findOne({name:patientName}).exec();

    // const newPatient = new Schemas.NewPatient({
    //     name: patientName,
    //     bloodPressure: pressureBlood,
    //     bodyMassIndex: BMI
    // });
    if (checkPatient !== null) {
        try {
            await Patient.updateOne(
                { name: patientName },
                { $set:
                        {
                            bloodPressure: pressureBlood,
                            bodyMassIndex: BMI,
                        }
                }, (err, patientDeleted) => {
                    if (err) res.end('Error updating.');
                    res.redirect('/dash');
                    res.end();
                });
        } catch (err) {
            console.log(err)
            res.redirect('/dash');
            res.end('User not updated.');
        }
    } else {
        res.redirect('/pat_reg');
        res.end();
    }
});

module.exports = router;