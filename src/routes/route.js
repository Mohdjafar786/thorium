 let obj =require('../logger/logger');
 let obj1=require('../util/helper')


const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    obj.welcome('Welcome to my application. I am Mohd jafar and a part of FunctionUp Thorium cohort.')
        
 res.send('My first ever api!')


});


router.get('/test-me', function (req, res) {
    console.log('Date:'+ obj1.printDate)
    console.log('Month:'+ obj1.printMonth)
    console.log(obj1.batchInfo)

 res.send('My second ever api!')

 
});

module.exports = router;
// adding this comment for no reason../
