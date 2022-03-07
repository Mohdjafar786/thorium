const mongoose=require('mongoose')
const ObjectId=mongoose.Schema.Types.ObjectId

const orderSchema= new mongoose.Schema({
        userId:{
                type:ObjectId,
                ref:"UserM"
        },
        productId:{
                type:ObjectId,
                ref:"ProductM"
        },
        amount: Number,
        isFreeAppUser:Boolean,
        date:String,
},{timestamps:true}
);

module.exports=mongoose.model('OrderM',orderSchema)