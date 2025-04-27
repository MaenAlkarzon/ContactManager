import { useState,useEffect } from "react";
import PeopleForm from "./PeopleForm";
//import PeopleList from "./PeopleList";
//import Digimon from "./Digimon";

function App() {
  const [people, setPeople] = useState([]);

  const addPerson = (person) => {
    setPeople([...people, person]);
    // console.log(people.length);

  };

  useEffect(() => {
    console.log(people);
    if (people.length > 0) {
      console.log(`✅ New person added: ${people[people.length - 1].name}`);
      console.log(`Total people now: ${people.length}`);
    }
  }, [people]);



  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚀 React Basics Demo</h1>

      <PeopleForm addPerson={addPerson} />
    </div>
  );

}

export default App;