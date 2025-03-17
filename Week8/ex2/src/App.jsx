import { useState } from 'react'
import './App.css'
import AnimalCard from "./component/AnimalCard";

function App() {
  const [headline, setHeadline] = useState("Jen's List of Animals");

  const [animals, setAnimals] = useState([
    "Lion", "Tiger", "Elephant", "Giraffe", "Zebra", "Kangaroo", "Panda", "Cheetah",
    "Wolf", "Fox", "Bear", "Rabbit", "Deer", "Squirrel", "Hedgehog", "Otter",
    "Raccoon", "Skunk", "Moose", "Bison", "Buffalo", "Armadillo", "Sloth", "Anteater",
    "Koala", "Orangutan", "Gorilla", "Chimpanzee", "Meerkat", "Hyena"
  ]);

  // to update the headline
  function updateHeadline(newHeadline) {
    setHeadline(newHeadline);
  }

  // to delete an animal
  function deleteAnimal(animalName) {
    setAnimals(animals.filter((animal) => animal !== animalName));
  }

  return (
    <div className="container">
      <h1 className="headline">{headline}</h1>
      <div className="animal-list">
        {animals.map((animal) => (
          <AnimalCard
            key={animal}
            name={animal}
            onFocus={updateHeadline}
            onDelete={deleteAnimal}
          />
        ))}
      </div>
    </div>
  )
}

export default App
