import { useState } from "react";
import './App.css';

function App() {
  const myName = "Jennifer";
  let cousins = 21;
  let rowdy = true;

  return (
    <div>
      <h1>Hello World!</h1>
      <p>My name is {myName}.</p>
      <p>I am one of {cousins} cousins on my mom's side.</p>
      {rowdy ? (<p>We are quite the rowdy bunch at parties!</p>) : (<p>They're all boring.</p>)}
    </div>
  )
}

export default App
