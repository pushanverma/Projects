import React from 'react'
import Header from '../components/Header'

const parastyle ={
    backgroundColor:"blue",
}
const Footer = (props) => {
  return (
    <>
    <h1 style ={{color:'red'}}> Hello I am Prop from Footer {props.title} and my name is {props.name}</h1>
    <p style={parastyle}>gngfbsjdsjnjcjdsjvnfdvvdvfd</p>
    </>
  )
}

export default Footer