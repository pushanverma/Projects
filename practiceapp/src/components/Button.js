import React from 'react'
import Text from './Text';
import Name from './Name';

const Button = (props) => {
  return (
    <>
        <button className='btn' onClick={()=>props.handleChange(props.no)}>{props.fname}</button>
        
    </>
  )
}

export default Button

