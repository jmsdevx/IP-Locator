const express = require('express')
const {json} = require('body-parser')
const cors = require('cors')
const {getLocation} = require('./ipcontroller')
// const {postIP} = require('./ipcontroller')
const {getFavorites} = require('./ipcontroller')
const {addFavorite} = require('./ipcontroller')
const {deleteFavorite} = require('./ipcontroller')
const app = express()
const port = 3006


 
app.use(json());
app.use(cors());

// app.get('/api/iplocation', (req, res)=> {
//     res.status(200).json('this is working')
// })

app.get('/api/ip/location', getLocation)
app.get('/api/ip', getFavorites)
app.post('/api/ip', addFavorite)
app.delete('/api/ip/:i', deleteFavorite)




app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`)
})