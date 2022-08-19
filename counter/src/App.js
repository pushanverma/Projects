import logo from './logo.svg';
import './App.css';
import React from 'react';
import Text from './components/Text';
import Button from './components/Button';

class App extends React.Component
{
  constructor(props){
    super(props);
    this.state={count:0,name:"abcd"}
    // intial state with constructor 

     
    } 
    increment=()=>{
      // this.state.count=this.state.count+1; //wrong method to do 
      // this.state.name="Pushan";
      this.setState({
        count:this.state.count+1
      })
    }

    decrement=()=>{
      this.setState({
        count:this.state.count-1
        }
      )
    }

  render()
  {
    return (
    <>
    <Text no={this.state.count}/>
    <Button handleChange ={this.increment} value={this.state.count} name =" + "/>
    <Button handleChange ={this.decrement} value ={this.state.count} name =" - "/>
    </>
    )
    
  }
}

export default App;
