import React from "react";


function DataStore (props){
  return(
      <>
       <div>
        <h1>Name: {props.name}</h1>
        <h2>Email: {props.email}</h2>
       </div>
      </>
  )
}

export default DataStore;