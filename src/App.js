import React, { useState }from 'react';
import './App.css';
import Button from './components/button';
import Input from './components/input';
import * as math from 'mathjs';

function App() {
const [input, setInput] =useState("");

const handleClear = () => {
  setInput('');
}
const addToInput = (val)=> {
setInput( input ==='0' ? String(val):input + val);
 };
const inputDot  = () => {
  if(input.indexOf('.')=== -1){
    setInput(input + '.')
  }
}
const toggleSign = () =>{
  setInput(input.charAt(0)==='-' ? input.substr(1): '-' + input)
}
const inputPercent =() => {
  const value =parseFloat(input);
  setInput(String(value/100))
}

 const handleEqual = () => {
   setInput(math.evaluate(input))
 }
 console.log(input);
  return (
    <div className="app">
    <div className= "calc-wrapper">
      <Input
      input={input}
      />
       <div className = "row">
      <Button className ="clear-btn" handleClick={handleClear}>C</Button> 
       <Button handleClick={toggleSign}>+/-</Button> 
       <Button handleClick={inputPercent}>%</Button> 
      </div>
      <div className = "row">
      <Button handleClick={addToInput}>7</Button> 
       <Button handleClick={addToInput}>8</Button> 
       <Button handleClick={addToInput}>9</Button> 
       <Button handleClick={addToInput}>/</Button> 
      </div>
      <div className = "row">
      <Button handleClick={addToInput}>4</Button> 
       <Button handleClick={addToInput}>5</Button> 
       <Button handleClick={addToInput}>6</Button> 
       <Button handleClick={addToInput}>*</Button> 
      </div>
      <div className = "row">
      <Button handleClick={addToInput}>1</Button> 
       <Button handleClick={addToInput}>2</Button> 
       <Button handleClick={addToInput}>3</Button> 
       <Button handleClick={addToInput}>+</Button> 
      </div>
      <div className = "row">
      <Button handleClick={inputDot}>.</Button> 
       <Button handleClick={addToInput}>0</Button> 
       <Button handleClick={handleEqual}>=</Button> 
       <Button handleClick={addToInput}>-</Button> 
      </div>
      
    </div>

    </div>
  );
}

export default App;
