import React, {Component} from 'react'

class Tracklist extends Component {

    

//     this.state = {
//         favoriteList: [],
//     }
// }
    
    // componentDidMount(){
    //     axios.get('api/ip')
    //     .then(response => {this.setState({favoriteList: response.data})
    //     console.log("FL: " + this.state.favoriteList)})
    //     .catch(error => console.log(error));

    // }

    render(){

        let favorites = this.props.tracking.map((e, i) =>(
            <div key={i} onClick={()=>this.props.delete(i)}>
            <h3>{e}</h3>
            </div>
        ))
        return(<div>
            <h3>Tracking:</h3>
            <div>{favorites}</div>
            </div>




        )
    }






}

export default Tracklist


