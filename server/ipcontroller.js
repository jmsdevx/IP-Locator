const axios = require('axios')
let favorites = []
let myLocations = []



const deleteFavorite=(req, res) => {
    console.log(favorites.splice(req.params.i, 1))
    console.log(favorites)
    res.status(200).json(favorites)
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


// function postIP(req, res){
//     myPosts.push(req.body.input)
//     console.log(req.body.input)
//     res.status(200).send(myLocations)

// }

module.exports = {getLocation, getFavorites, addFavorite, deleteFavorite}