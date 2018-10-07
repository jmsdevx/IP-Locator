import React, {Component} from 'react'
const axios = require('axios')

class Search extends Component {

    constructor(props){
        super(props);
        this.state = {
            input0:'',
            input1:'',
            input2:'',
            input3:'',
            myLocations: []
        }

    }

    handleInput0(input){
        this.setState({input0: parseInt(input)})
    }
    handleInput1(input){
        this.setState({input1: parseInt(input)})
    }
    handleInput2(input){
        this.setState({input2: parseInt(input)})
    }
    handleInput3(input){
        this.setState({input3: parseInt(input)})
    }

   getSearch(){
        let n0 = this.state.input0
        let n1 = this.state.input1
        let n2 = this.state.input2
        let n3 = this.state.input3
        axios.get(`https://ipvigilante.com/json/${n0}.${n1}.${n2}.${n3}`)
        .then( response => {
            axios.post('http://localhost:3006/api/searchresults', {results : response.data.data}).then(searchresponse => {
                this.setState({myLocations: searchresponse.data})
            })
       
    })
    .catch (error => {
        console.log(error)
    
    })
}

    render(){

        return(<div className="searchbar">
            <input onChange={(e=>this.handleInput0(e.target.value))} />
            <input onChange={(e=>this.handleInput1(e.target.value))} />
            <input onChange={(e=>this.handleInput2(e.target.value))} />
            <input onChange={(e=>this.handleInput3(e.target.value))} />
            <button onClick={()=>this.props.postInput(`${this.state.input0}.${this.state.input1}.${this.state.input2}.${this.state.input3}`)}>Post</button>
            </div>
        )
    }
}

export default Search