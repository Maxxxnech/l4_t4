import logo from './logo.svg';
import './Clicker.css';
import React, { Component, useState } from 'react';
import Clicker from './Clicker'


function App() {
  var [count, setCount] = useState(0)

  return (
    <div className="App">      
      <Clicker />
      <button onClick={()=>{setCount(++count)}} >{count}</button>
    </div>
  );
}

export default App;
