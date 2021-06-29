const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const connectToDB = require('./helperFunctions/connectToDB')
const placesRoute = require('./routes/placesRoute')

const app = express()
const port = 4000

connectToDB('places')

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.use('/places', placesRoute)


app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})
