import React, {Component} from 'react'
// import Search from './Search'
import Tracklist from './Tracklist'
import Map from './Map'
import NewLocation from './NewLocation'
import TrackButton from './TrackButton'
import Ono from './Ono'
import Surprise from './Surprise'
const axios = require('axios')



class Data extends Component {

constructor(){
    super();
    this.state = {
        location: [],
        favoriteLocation: [],
        lat: 30,
        lng: 90,
        myGenre: 'Target Location', 
        myLogo: '',
        input: []
    }
    this.deleteFavorite = this.deleteFavorite.bind(this)
    this.addFavorite = this.addFavorite.bind(this)
    this.newLocation = this.newLocation.bind(this)
    this.getGenre = this.getGenre.bind(this)
    this.getLogo = this.getLogo.bind(this)
    this.inputHandler = this.inputHandler.bind(this)
    this.editFavorite = this.editFavorite.bind(this)
}

componentDidMount(){
  this.newLocation()
  this.getFavorites()
}


 newLocation(){
    axios.get('http://localhost:3006/api/ip/location')
    .then(response => {this.setState({location: response.data, lat: parseInt(response.data.latitude), lng: parseInt(response.data.longitude)})}
    )
    .catch((error) => console.log(error) 
    )}

    
    getFavorites(){
        axios.get("/api/ip")
        .then(response => {this.setState({favoriteLocation: response.data})})
        .catch(error => console.log(error));
    }

    addFavorite(){
        let {location} = this.state
        axios.post("/api/ip", {location})
        .then(response => {
            this.setState({favoriteLocation: response.data})
            console.log(this.state.favoriteLocation)
        })
    }

    deleteFavorite(i) {
        axios.delete(`/api/ip/${i}`)
        .then(response => {
         this.setState({favoriteLocation: response.data})})
        .catch(error=>console.log(error))
    }

    editFavorite(i, value) {
        axios.put(`/api/ip/${i}`, {value})
        .then(response => {
         this.setState({favoriteLocation: response.data})})
        .catch(error=>console.log(error))
    }

    getGenre(){
        axios.get('http://localhost:3006/api/ip/genre')
        .then(response => {
            console.log(response.data)
            this.setState({myGenre: response.data})})
        .catch(error=>console.log(error))
    }

    inputHandler(input){
        console.log(input)
        this.setState({input: input})
    }


    getLogo(){
        axios.get('http://localhost:3006/api/ip/logo')
        .then(response => {
            console.log(response.data)
            this.setState({myLogo: response.data})
        })

    }

render(){
    const {location} = this.state

    return(
    <div className = "fullpage">

        <div className="threatbox">
            <div className="ipdata"><h1 id="incoming">INCOMING</h1></div>
            <div className="data"><h4>IP:  </h4> {location.ipv4}</div>
            <div className="data"><h4>Region:  </h4>{location.continent_name}</div>
            <div className="data"><h4>Country:  </h4> {location.country_name}</div>
            <div className="coords"><h4>Coords:  </h4>({Math.floor(location.latitude)},{Math.floor(location.longitude)})</div>
            <div className="buttons"> 
                <TrackButton addFavorite = {this.addFavorite} />
               
                <NewLocation newLocation = {this.newLocation}/>
                
              
        </div>
            <p id="facts">{this.state.myLogo}</p>
           
        </div>
        <div className="trackbox">
        <h3>{this.state.myGenre}</h3>
        <Map lat = {this.state.lat} lng = {this.state.lng}/>
        <Tracklist tracking={this.state.favoriteLocation} delete={this.deleteFavorite} edit={this.editFavorite} input={this.state.input} handler={this.inputHandler} />
        </div>
        <div className="logos">
        <Ono />
        <Surprise pass={this.getGenre} name=""/>
        <Surprise pass={this.getLogo} name=""/>
        <Ono />
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

// getIPS(){
//     axios.get('http://localhost:3006/api/ip/location').then (response =>{
//        const {ipv4, continent_name, country_name, longitude, latitude} = response.data
//        this.setState({locations: [...this.state.locations, response.data], ips: [...this.state.ips, ipv4], 
//         continents: [...this.state.continents, continent_name], countries: [...this.state.countries, country_name],
//         longitudes: [...this.state.longitudes, Math.floor(longitude)], latitudes: [...this.state.latitudes, Math.floor(latitude)]})
//        })

//     }

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