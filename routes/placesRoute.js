const express = require('express')
const { searchQueryPlaces, addNewPlace } = require('../controllers/placeController')
const router = express.Router()

router.use( express.urlencoded({ extended: true }) )

router.get('/:slug', getSpecificPlaceHandler)
    .get('/', getPlacesHandler)
    .post('/', postPlaceHandler)


async function getSpecificPlaceHandler(request, response) {
    const { params } = request

    const result = await searchQueryPlaces(params)

    if(result.error) 
        response.statusCode = 400

    response.send(result)
}

async function getPlacesHandler(request, response) {
    const { query } = request

    const result = await searchQueryPlaces(query)

    if(result.error) 
        response.statusCode = 400
    
    response.send(result)
}

async function postPlaceHandler(request, response) {
    const { body } = request

    for(let key in body) {
        body[key] = body[key].toLowerCase()
    }

    const result = await addNewPlace(body)

    if(result.error)
        response.statusCode = 400

    response.send(result)
}

module.exports = router