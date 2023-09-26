import { useState } from "react";
import "./App.css";
import { puppyList } from "./data.js";
import "./index.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);

  console.log("puppyList: ", puppyList);

  const [featPupId, setFeatPupId] = useState(null);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  console.log("featured puppy: ", featuredPup);

  return (
    <div className="App">
      <header>
        <span className="title">Puppy Pals</span>
      </header>
      <main className="container">
        {puppies.map((puppy) => {
          return (
            <p
              onClick={() => {
                console.log("puppy id: ", puppy.id);
                setFeatPupId(puppy.id);
              }}
              key={puppy.id}
            >
              {puppy.name}
            </p>
          );
        })}
      </main>
      <footer className="feature">
        {featPupId && (
          <div>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
      </footer>
    </div>
  );
}

export default App;
