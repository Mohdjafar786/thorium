const { count } = require("console")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")


const createBook= async function (req, res) {
    let book = req.body
    // let bookCreated = await bookModel.create(book)
    // res.send({data: bookCreated})
    
    let authorId = book.author
    let publisherId = book.publisher
    
    if(!authorId) return res.send('The request is not valid as the author details are required.')
    
    let author = await authorModel.findById(authorId)
    if(!author) return res.send('The request is not valid as no author is present with the given author id')
    
    if(!publisherId) return res.send('The request is not valid as the publisher details are required.') 
    
    let publisher = await publisherModel.findById(publisherId)
    if(!publisher) return res.send('The request is not valid as no publisher is present with the given publisher id')
    
    let bookCreated = await bookModel.create(book)
    return res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate("author").populate("publisher")
    res.send({data: books})
}

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }



const increasePrice= async function (req, res) {

    let prices = await bookModel.updateMany({ratings:{$gt:3.5}},{$inc : {price: +10}});
  //  const id = putpublbooks[0]._id
    res.send({msg: "Pirice Changed successfully Check your Database for updated price"})
}


 const putBook= async function (req,res){
     const update = await bookModel.updateMany({$or: [{"PublisherM":"621fb5eb5d6e45b7897e1c2a" },{"PublisherM": "6220700c68da3d9edbda9c42"}]},{"isHardCover": true},{new:true})
     res.send("changes Updated")
   }


module.exports.putBook= putBook
module.exports.increasePrice= increasePrice

module.exports.createBook= createBook
 module.exports.getBooksData= getBooksData
 //module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails


//find().select(author_id)