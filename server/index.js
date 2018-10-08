const express = require('express')
const {json} = require('body-parser')
const cors = require('cors')
const {getLocation} = require('./ipcontroller')
// const {postIP} = require('./ipcontroller')
const {getFavorites} = require('./ipcontroller')
const {addFavorite} = require('./ipcontroller')
const {deleteFavorite} = require('./ipcontroller')
const {getGenre} = require('./ipcontroller')
const {getLogo} = require('./ipcontroller')
const {editFavorite} = require('./ipcontroller')
const app = express()
const port = 3006


 
app.use(json());
app.use(cors());


app.get('/api/ip/location', getLocation)
app.get('/api/ip', getFavorites)
app.get('/api/ip/genre', getGenre)
app.get('/api/ip/logo', getLogo)
app.post('/api/ip', addFavorite)
app.delete('/api/ip/:i', deleteFavorite)
app.put('/api/ip/:i', editFavorite)





app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`)
})