// import logo from './logo.svg';
// import './App.css';
// import Header from './components/Header';
// import Footer from './components/Footer';


// const element = <h1>Hello Pushan Verma !</h1>;
// const flag=true;

// function App() {
//   return (
//    <>
// <h1>Hello {element}</h1>
// <h2>{50+50}</h2>
// <h3>{flag ?"flag is true":"flag is false"}</h3>
// {/* <Header/> */}
// <Header title={"Pushan"} name ="KGF"/>
// {/* <Header title="Pushan"/> */}
//    </>
//   );
// }

// export default App;

import React from 'react';
import Button from './components/Button';
import Text from './components/Text'
import Name from './components/Name';
class App extends React.Component
{
  constructor(props){
    super(props)
    this.state={no:'Press any Button',name:"abcd"};
  };

  stateChange=(value)=>{
    this.setState({
      no:value =='Reset'? 'Press any Button':value + 'is clicked'
    })

  }
 
 
 render() 
 {
  return (
  <> 
    <Text>
    {this.state.no}
    {this.state.name}
    </Text>
    

    {/* buttons names thru maps */}
          <p>
          {Name.map(function(e)
          {
          return (
            <Button handleChange={this.stateChange} fname={e.fname}/>
          );
          })}


          {/* <Button handleChange={this.stateChange} fname={Name[0].fname}/>
          <Button handleChange={this.stateChange} fname={Name[1].fname}/>
          <Button handleChange={this.stateChange} fname={Name[2].fname}/>
          <Button handleChange={this.stateChange} fname={Name[3].fname}/> */}


          </p>

    {/* <Button handleChange={this.stateChange} name="Button 1"/>
    <Button handleChange={this.stateChange} namconsole.log(firstElement); // undefined, no error
console.log(firstCharacter); // undefined, no error
console.log(zeroProperty); // undefined, no errore="Button 2"/>
    <Button handleChange={this.stateChange} name="Button 3"/>
    <Button handleChange={this.stateChange} name="Reset"/> */}


    {/* thru normal traversing  */}
    

    


  </>

);

 }  
 

}



 export default  App


