const express = require('express');
const router = express.Router();

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
