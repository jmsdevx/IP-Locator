import React from 'react'

function TrackButton (props) {
    return <button id="trackbutton" onClick={() => props.addFavorite()}>Track IP</button>
}

export default TrackButton