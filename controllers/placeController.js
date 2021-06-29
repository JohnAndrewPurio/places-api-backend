const { connection, mongo } = require('mongoose')
const PlaceModel = require('../models/place')

async function addNewPlace({ name, city, state }) {
    const schema = {
        name,
        city,
        state,
        slug: `${ name }-${ city }-${ state }-${ String(Date.now()) }`
    }

    try {
        const place = new PlaceModel(schema)
        await place.save()
    
        return '\n\nData successfully added to database\n\n'
    } catch(error) {
        return { error }
    } 
}

async function searchQueryPlaces(query) {
    try {
        const data = await connection.collection('places').find(query).toArray()

        return data
    } catch(error) {
        return { error }
    }
}

module.exports = {
    addNewPlace, searchQueryPlaces
}
