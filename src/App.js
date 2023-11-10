import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[expression,setExpression] = useState("")

  const handleInputChange = (e) =>{
    setExpression(e.target.value);
  }

  const calculateExpresstion = () => {
    console.log("calculate")
    const result = eval(expression);
    setExpression(result);
    document.getElementById("result").innerHTML = result;
  }
  return (
   <>
     <h2>My calcuclator</h2>
     <input id="screen" onChange={handleInputChange} placeholder='enter your number'/>
     <button onClick={calculateExpresstion}>=</button>
     <div>result: <span id="result"></span></div>
   </> 
  )
}

export default App;
