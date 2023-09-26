import { useState } from "react";
import "./App.css";
import { puppyList } from "./data.js";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log("puppyList: ", puppyList);

  const [featPupId, setFeatPupId] = useState(null);
  // function handleClick(puppy) {
  //   setFeatPupId(puppy.id);
  //   console.log("puppy id: ", puppy.id);
  // }
  // const featuredPup = puppies.find((pup) => {
  //   pup.id === featPupId;
  // });
  // console.log("Featured Puppy: ", featuredPup);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log("featured puppy: ", featuredPup);
  return (
    <div className="App">
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
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
