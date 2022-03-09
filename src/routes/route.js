const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const midware= require("../middleware/auth")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",midware.authenticate,midware.authorise, userController.getUserData)

router.post("/users/:userId/posts",midware.authenticate,midware.authorise, userController.createPost)

router.put("/users/:userId",midware.authenticate,midware.authorise, userController.updateUser)

router.delete('/users/:userId',midware.authenticate,midware.authorise, userController.deleteStatusUpdate )

module.exports = router;






// midware.authenticate
// midware.authorise