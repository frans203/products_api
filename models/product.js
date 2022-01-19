const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true, 'Name is missing']
    },
    price: {
        type: Number,
        required: [true, 'Price is missing']
    },
    featured: {
        type: Boolean, 
        default: false
    },
    rating:{
        type: Number,
        default: 4.5
    },
    company: {
        type: String,
        enum: {
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: "{VALUE}, company name, it's not supported"
        }
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('Product', productSchema)