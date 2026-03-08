import mongoose from 'mongoose'


const schema = mongoose.Schema({
    userId: {
        type:String,
        required: true
    },
    items: {
        type:Array,
        required: true
    },
    amount: {
        type:Number,
        required: true
    },
    address: {
        type:Object,
        required: true
    },
    status: {
        type:String,
        default: 'Food Proccessing'
    },
    date: {
        type:Date,
        default: Date.now()
    },
     payment: {
        type:String,
        default: 'COD'
    },
})

const Order = mongoose.model("order", schema)
export default Order
