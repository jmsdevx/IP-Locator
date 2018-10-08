const axios = require('axios')
let favorites = []
let myLocations = []
let myGenre = []
let myLogo = []

const deleteFavorite=(req, res) => {
    console.log(favorites.splice(req.params.i, 1))
    console.log(favorites)
    res.status(200).json(favorites)
}

const editFavorite=(req, res) => {
    if (req.body.value!==''){
    favorites.splice(req.params.i, 1, req.body.value)
    console.log(favorites)
    res.status(200).json(favorites)}
    else {
        res.status(200).json(favorites)
    }
}

const getLocation = (req, res) => {
        let r1 = Math.floor(Math.random()* 200)
        let r2 = Math.floor(Math.random()* 200)
        let r3 = Math.floor(Math.random()* 200)
        let r4 = Math.floor(Math.random()* 200)
        axios.get(`https://ipvigilante.com/json/${r1}.${r2}.${r3}.${r4}`)
    .then( response => {
        myLocations = (response.data.data)
        res.status(200).json(myLocations)
    })
    .catch(error => {
        console.log(error)
        res.status(500)
    })
}

const getFavorites = (req, res) => {
    res.status(200).json(favorites)
}

const addFavorite = (req, res) => {
    favorites.push(req.body.location.ipv4)
    res.status(200).json(favorites)
}

const getGenre = (req, res) => {
    axios.get(`https://binaryjazz.us/wp-json/genrenator/v1/genre/`)
    .then( response => {
        myGenre = (response.data)
        res.status(200).json(myGenre)
    })
    .catch(error => {
        console.log(error)
        res.status(500)
    })
}

const getLogo = (req, res) => {
    axios.get('http://numbersapi.com/random/math')
    .then( response => {
        myLogo = (response.data)
        res.status(200).json(myLogo)
    } )
    .catch(error=>{
        console.log(error)
        res.status(500)
    })
}



module.exports = {getLocation, getFavorites, addFavorite, deleteFavorite, getGenre, getLogo, editFavorite}