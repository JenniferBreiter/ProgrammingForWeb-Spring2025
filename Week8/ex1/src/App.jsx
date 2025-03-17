import { useState } from 'react'
import './App.css'
import llamaImage from "./assets/llama.jpg";
import alpacaImage from "./assets/alpaca.jpg";

function App() {
  const [image, setImage] = useState(llamaImage);

  return (
    <div className="container">
      <h1>Llama or Alpaca?</h1>
      <h2>Choose your player!</h2>
      <div className="image-container">
        <img src={image} alt="Camelid" />
      </div>
      <div className="button-container">
        <button onClick={() => setImage(alpacaImage)}>Alpaca</button>
        <button onClick={() => setImage(llamaImage)}>Llama</button>
      </div>
    </div>
  )
}

export default App
