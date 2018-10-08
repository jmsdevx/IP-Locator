import React from 'react'

function NewLocation(props){
    return <button onClick={() => props.newLocation()}>Next</button>
}

export default NewLocation