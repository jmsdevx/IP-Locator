import React, {Component} from 'react'

class NewAttacks extends Component {

render(){
    return(
    <div>
        {console.log("Hello from " + this.props.locations.country_name)}
    </div>
    )
}
}

export default NewAttacks