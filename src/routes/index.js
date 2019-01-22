const express  = require('express');
const summoner = require('./summoner');
// create an instance of the express router
const router  = express.Router(); 

router.get('/', (req, res, next) => {
    res.render('index');
});

router.use('/summoner', summoner);

module.exports = router;