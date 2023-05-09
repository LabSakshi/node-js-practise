//consider it as an entry point
const express = require("express")
const dotenv = require("dotenv").config()
const errorHandler = require('./middleWare/errorHandler')
// CREATE A EXPRESS SERVER
const app = express()

const port = process.env.PORT || 5001
app.use(express.json())
const countactRoute = require('./routes/contactRoutes')

//MIDDLEWARE TO USE THE DIFFERENT ROUTES
app.use('/api/contacts', countactRoute)
app.use(errorHandler)

//LISTEN THE SERVER
app.listen(port, () => {
    console.log(`server running on port ${port}`)
})