// import React from "react";
// import { useState } from "react";

// function Practice (){
//   const [data, setData] = useState("Jyoti")
//   // function updateData() {
//   //    setData("Singh")
//   // }
//               // OR 
//   const updateData = () =>{
//     setData("Singh")
//   }
//   return(
//     <>
//      <h1>{data}</h1>
//      <button onClick={updateData}>Click Me</button>
//     </>
//   )
// }

// export default Practice;


                //  for props 


import React from "react";
import PracticeOne from "./PracticeOne";
function Practice () {
  return(
    <>
     <div>
      <h1>Props in React.</h1>
      <PracticeOne name={"Jyoti"} email={"jojo@123"} gender={"Female"}/>
     </div>
    </>
  )
}
 export default Practice;
