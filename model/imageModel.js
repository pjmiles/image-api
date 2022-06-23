const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const ImageSchema = mongoose.Schema({
    title :{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    }
})

ImageSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('ImageModel', ImageSchema)