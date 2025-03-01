
import './App.css'

function App() {
  let fact = true;
  const llamaFacts = [
    "They are in the Camelidae family.",
    "Their life span is between 15 and 20 years.",
    "Females and males reach maturity at about 2 to 3 years of age.",
    "They are about 4 feet tall at the shoulder.",
    "Llamas can weigh anywhere between 286-341 pounds, and weigh roughly 24lbs at birth.",
    "Their diet is mainly comprised of grass.",
    "A llama can spit green, partially digested food 15 feet or more.",
    "When one llama is angry at another llama, they will stick their tongues out to express their dislike."
    ];
  let factsLength = llamaFacts.length;
  let lastFact = (fact) ? llamaFacts[factsLength - 1] : ("Llamas are never angry. They are always happy!");
  console.log(lastFact);

  return (
    <div>
      <h1>Welcome to the world of Llamas!</h1>
      <h2>Here are some fun facts about them:</h2>
      <ul>
        {llamaFacts.map((fact) => <li>{fact}</li>)}
      </ul>
    </div>
  )
}

export default App
