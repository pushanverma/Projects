import React from 'react'
import Footer from '../components/Footer';
import Button from '../components/Button'

const Header = (props) => {
  return (
    <>
    <i className='header'>Hello I am  Prop from Header {props.title} </i>
    <h3>and my name is {props.name}</h3>
     <Button color='green' text="Hello"/>
     <Button color='blue' text="Hellomyfriend123"/>
     <Button color='yellow' text="HelloPushanVerma123456"/>

   
    <Footer  title={props.title} name ={props.name} />
    </>   
  )
}

// Header.defaultProps =
// {
//     title: 'Kolar Gold Fields',
//     name:'Yash Rocking Star'
// }

export default Header