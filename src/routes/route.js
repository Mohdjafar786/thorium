const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)


 router.post("/jafar" ,UserController.createBook)

 router.get("/mahir" ,UserController.getBook)


module.exports = router;






























// {
//     "bookName": "Subtle art of not giving a fuck",
//         "authorName":"Mahir",
//         "category":"Human psycology",
//         "year":{
//             "type": 2019,
//             "required": true    }
//     }











