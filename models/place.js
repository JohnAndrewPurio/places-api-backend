const {Schema, model} = require('mongoose')

const PlaceSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    city: {
        type: String,
        required: true,
    },

    state: {
        type: String,
        required: true,
    },

    slug: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true })

const PlaceModel = new model("Place", PlaceSchema)

module.exports = PlaceModel