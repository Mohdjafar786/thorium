const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})
// router.post("/players" , function(req,res){
//     let players =[{"name": "manish","dob": "1/1/1995","gender": "male","city": "jalandhar","sports": ["swimming"]},{"name": "jafar","dob": "2/1/1995","gender": "male","city": "jalandhar","sports": ["swimming"]},{"name": "hayat","dob": "3/1/1995","gender": "male","city": "jalandhar","sports": ["swimming"]},{"name": "junaid","dob": "4/1/1995","gender": "male","city": "jalandhar","sports": ["swimming"]},{"name": "mahir","dob": "5/1/1995","gender": "male","city": "jalandhar","sports": ["swimming"]}]
//     let onemorePlayer=req.body.element
//     arr.pusg(onemorePlayer)




    router.post("/players", function(req, res) {
        let players =  [ {
               "name": "simran",
               "dob": "15/08/1998",
               "gender": "feale",
               "city": "kolkata",
               "sports": [
                   "batminton"
               ],
               "bookings": [
                   {
                   "bookingNumber": "1",
                  "sportId": "",
                  "centerId": "",
                   "type": "private",
                   "slot": "16286598240000",
                   "bookedOn": "18/08/2021",
                   "bookedFor": "08/09/2021"
                   }]
           },
           {
               "name": "rahila",
               "dob": "10/11/1997",
               "gender": "female",
               "city": "lucknow",
               "sports": [
                   "carrom"
               ],
               "bookings": [
                   {
                   "bookingNumber": "2",
                  "sportId": "",
                  "centerId": "",
                   "type": "private",
                   "slot": "16396598110000",
                   "bookedOn": "30/11/2021",
                   "bookedFor": "02/08/2021"
                   }]
               },
       
               {
                   "name": "misba",
                   "dob": "10/03/1994",
                   "gender": "female",
                   "city": "delhi",
                   "sports": [
                       "shortput"
                   ],
                   "bookings": [
                       {
                       "bookingNumber": "3",
                      "sportId": "",
                      "centerId": "",
                       "type": "private",
                       "slot": "16286592300000",
                       "bookedOn": "29/08/2021",
                       "bookedFor":" 04/09/2021"
                       }]
                   }
       ]
       
        
       let name= req.body.name
       players.push(name)
       
       let dob=req.body.dob
       players.push(dob)
       
       let gender=req.body.gender
       players.push(gender)
       
       let city=req.body.city
       players.push(city)
       
       let sports=req.body.sports
       players.push(sports)
       
       let bookings=req.body.bookings
       players.push(bookings)
       
       for (let i =0; i < players.length; i++)  {
         if(players[i].name ==name){
             console.log("playerexist")
             res.send("player already exist")
         }else{
             players.push(name, dob, gender, city, sports, bookings)
         }
       }
       res.send( {msg: players, status:true} )
       })
       
       
       

//    res.send( { msg:players,status: true})
// });
module.exports = router;