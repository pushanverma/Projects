import React from 'react'

let buttonstyle={

};
function Button(props) {
  return (
    <div class="container">
    <button id="changeBG" style={{color:"blue",fontWeight:'bold',padding:"1.5%",marginLeft:"10px",justifyContent:'center',fontSize:'5rem',borderRadius:'10px' ,alignItems:'center' ,display:'inline-flex'}} onClick={()=>props.handleChange(props)}>{props.name}</button>
    </div>
  )
}

export default Button