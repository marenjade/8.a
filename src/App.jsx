import { useState } from "react";
import "./App.css";
import Plant from "./Plant";

import marantaImg from "./assets/images/maranta.jpeg";
import hoyaImg from "./assets/images/hoya.jpeg";
import orchidImg from "./assets/images/orchid.jpeg";
import bougainvilleaImg from "./assets/images/pink.jpeg";
import moneyTreeImg from "./assets/images/tree.jpeg";
import pileaImg from "./assets/images/cmp.jpeg";

function App() {
  const [plants, setPlants] = useState([
    {
      id: 1,
      name: "Maranta Leuconeura",
      nickname: "Prayer Plant",
      have: true,
      difficulty: "Moderate",
      rarity: "Common",
      image: marantaImg,
    },
    {
      id: 2,
      name: "Pilea Peperomioides",
      nickname: "Chinese Money Plant",
      have: true,
      difficulty: "Easy",
      rarity: "Common",
      image: pileaImg,
    },
    {
      id: 3,
      name: "Bougainvillea",
      nickname: "Paper Flower",
      have: false,
      difficulty: "Hard",
      rarity: "Uncommon",
      image: bougainvilleaImg,
    },
    {
      id: 4,
      name: "Phalaenopsis Orchid",
      nickname: "Moth Orchid",
      have: true,
      difficulty: "Moderate",
      rarity: "Common",
      image: orchidImg,
    },
    {
      id: 5,
      name: "Pachira Aquatica",
      nickname: "Money Tree",
      have: true,
      difficulty: "Easy",
      rarity: "Common",
      image: moneyTreeImg,
    },
    {
      id: 6,
      name: "Hoya Obscura",
      nickname: "Wax Plant",
      have: false,
      difficulty: "Moderate",
      rarity: "Rare",
      image: hoyaImg,
    },
  ]);

  function deletePlant(id) {
    const updatedPlants = plants.filter((plant) => plant.id !== id);
    setPlants(updatedPlants);
  }

  function duplicatePlant(id) {
    const plantToCopy = plants.find((plant) => plant.id === id);

    if (!plantToCopy) return;

    const copiedPlant = {
      ...plantToCopy,
      id: Date.now(),
    };

    setPlants([...plants, copiedPlant]);
  }

  return (
    <div className="container">
      <h1>My Plant Collection</h1>
      <p className="legend">Green = plants I own | Pink = plants I want</p>

      <div className="plant-grid">
        {plants.map((plant) => (
          <Plant
            key={plant.id}
            id={plant.id}
            name={plant.name}
            nickname={plant.nickname}
            have={plant.have}
            difficulty={plant.difficulty}
            rarity={plant.rarity}
            image={plant.image}
            deletePlant={deletePlant}
            duplicatePlant={duplicatePlant}
          />
        ))}
      </div>
    </div>
  );
}

export default App;