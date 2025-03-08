import React from "react";
import Camelid from "./components/camelid";
import llamaImage from "./assets/llama.jpg";
import alpacaImage from "./assets/alpaca.jpg";

function App() {
  const camelidCompare =[  {
    name: "Llama",
    image: llamaImage,
    trivia: "Llamas are known for their long banana-shaped ears and their role as pack animals."
  },
  {
    name: "Alpaca",
    image: alpacaImage,
    trivia: "Alpacas have shorter, more spear-shaped ears and are primarily bred for their soft fleece."
  }
]

  return (
    <div>
      <h1>Compare Camelids</h1>
      <div className="camelids">
        <Camelid name={camelidCompare[0].name} image={camelidCompare[0].image} trivia={camelidCompare[0].trivia} />
        <Camelid name={camelidCompare[1].name} image={camelidCompare[1].image} trivia={camelidCompare[1].trivia} />
      </div>
      
    </div>
  )
}

export default App
