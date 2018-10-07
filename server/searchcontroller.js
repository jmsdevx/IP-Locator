const axios = require('axios')
const {json} = require('body-parser')
let myLocations = []

function getSearch(req, res) {
    myLocations.push(req.body.results)
    res.status(200).json(myLocations)
    console.log(myLocations)
    }


module.exports = {getSearch}