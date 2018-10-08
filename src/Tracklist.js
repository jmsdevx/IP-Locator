import React, {Component} from 'react'


class Tracklist extends Component {

    render(){

        let favorites = this.props.tracking.map((e, i) =>(
            <div key={i} className="tracking">
            <div id="trackbar">{e}<div id="trackbuttons"><button id="editbutton" onClick={()=>this.props.edit(i, this.props.input)}>Edit</button>
            <button id="deletebutton" onClick={()=>this.props.delete(i)}>Delete</button></div></div>
            </div>
        ))
        return(<div id="undermap">
              <h2 className="tracktitle">Tracking  :<input type="text" placeholder="edit IP" onChange={(e)=>this.props.handler(e.target.value)}/></h2>
            <div>{favorites}</div>
            </div>

        )
    }

}

export default Tracklist


