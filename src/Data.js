import React, {Component} from 'react'
// import Search from './Search'
import Tracklist from './Tracklist'
const axios = require('axios')



class Data extends Component {

constructor(){
    super();
    this.state = {
        // locations: [],
        // ips: [],
        // continents: [],
        // countries: [],
        // longitudes: [],
        // latitudes: [],
        // post: [],
        // all: []
        location: [],
        favoriteLocation: [],
    }
    this.deleteFavorite = this.deleteFavorite.bind(this)

    // this.postInput = this.postInput.bind(this)
}

componentDidMount(){
  this.newLocation()
  this.getFavorites()
}


// getIPS(){
//     axios.get('http://localhost:3006/api/ip/location').then (response =>{
//        const {ipv4, continent_name, country_name, longitude, latitude} = response.data
//        this.setState({locations: [...this.state.locations, response.data], ips: [...this.state.ips, ipv4], 
//         continents: [...this.state.continents, continent_name], countries: [...this.state.countries, country_name],
//         longitudes: [...this.state.longitudes, Math.floor(longitude)], latitudes: [...this.state.latitudes, Math.floor(latitude)]})
//        })

//     }

 newLocation(){
    axios.get('http://localhost:3006/api/ip/location')
    .then(response => {this.setState({location: response.data})})
    .catch((error) => console.log(error) 
    )}

    
    getFavorites(){
        axios.get("/api/ip")
        .then(response => {this.setState({favoriteLocation: response.data})
        console.log(response)})
        .catch(error => console.log(error));
    }

    addFavorite(){
        let {location} = this.state
        axios.post("/api/ip", {location})
        .then(response => {
            this.setState({favoriteLocation: response.data})
            console.log(this.state.favoriteLocation)
        })
        .then(this.newLocation())
    }

    deleteFavorite(i) {
        axios.delete(`/api/ip/${i}`)
        .then(response => {
         this.setState({favoriteLocation: response.data})})
        .catch(error=>console.log(error))
    }


// postInput(input){
//     console.log(input)
//    this.setState({input: input})
//     axios.post('http://localhost:3006/api/ip', {input})
//     .then(response => this.setState({locations: response.data}))
// }


// displayIP(){
//     let displayIP = this.state.ips.map((e, i)=>
//         <h4 key = {i}>{e}</h4>
//     )
//     return displayIP
// }

// displayRegion(){
//     let displayRegion = this.state.continents.map((e, i)=>
//         <h4 key = {i}>{e}</h4>
//     )
//     return displayRegion
// }

// displayCountry(){
//     let displayCountry = this.state.countries.map((e, i)=>
//         <h4 key = {i}>{e}</h4>
//     )
//     return displayCountry
// }

// displayLong(){
//     let displayLong = this.state.longitudes.map((e, i)=>
//     <h4 key = {i}>{e}</h4>
//     )
//     return displayLong
// }

// displayLat(){
//     let displayLat = this.state.latitudes.map((e, i)=>
//     <h4 key={i}>{e}</h4>
//     )
//     return displayLat
// }

render(){
    const {location} = this.state
    return(
    <div className = "fullpage">

        <div className="threatbox">
            <h2 id="incoming">INCOMING ATTACK</h2>
            <div className="data"><h4>IP:</h4> {location.ipv4}</div>
            <div className="data"><h4>Region:</h4>{location.continent_name}</div>
            <div className="data"><h4>Country:</h4> {location.country_name}</div>
            <div className="coords"><h4>Coords  :</h4>({Math.floor(location.latitude)},{Math.floor(location.longitude)})</div>
            <div className="buttons">
                <button onClick={() => this.addFavorite()}>Track IP</button>
                <button onClick={() => this.newLocation()}>Next</button>
            </div>
        </div>
        <div className="trackbox">
        <Tracklist tracking={this.state.favoriteLocation} delete={this.deleteFavorite} />
        </div>


    </div>)
}

}

export default Data
















    /* <div className="holder">
    <div className="dataBucket">
        <div className="address">Address: {this.displayIP()}</div>
        <div className="region">Region: {this.displayRegion()}</div>
        <div className="country">Country: {this.displayCountry()}</div>
        </div>
        <div className="coords">
        <div>Longitude: {this.displayLong()}</div>
        <div>Latitude: {this.displayLat()}</div>
    </div>
    </div>
        <Search postInput={this.postInput}/>
    
)
}
}
*/

