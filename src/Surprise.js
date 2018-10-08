import React from 'react'

function Surprise(props) {
   return(
       <div>
   <button id="tiny" onClick={()=>props.pass()}>{`${props.name}`}</button>
   </div>)

}

export default Surprise