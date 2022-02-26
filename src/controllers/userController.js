const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

const createBook = async function(req,res){
 const  material = req.body
  const savedMaterial = await UserModel.create(material)
   res.send({msg:savedMaterial})
}


const getBook =async function(req,res){
    const getBookSchema = await UserModel.find()
    res.send({msg:getBookSchema})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
 module.exports.createBook=createBook
 module.exports.getBook=getBook