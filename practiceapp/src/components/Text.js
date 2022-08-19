import React from 'react'
import Button from './Button';

const Text = (props) => {
  let data=props.children +'pushan'
 
  return (
    <h1>  {data} </h1>
  )
}

export default Text

