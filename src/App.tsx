import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {
  const personName = {
    first: "Ali",
    last: "TajNia",
  };
  const nameList = [
    { first: "Hamed", last: "Amiri" },
    { first: "Ali", last: "Mirzaei" },
    {
      first: "Reza",
      last: "Karbakhsh",
    },
  ];
  return (
    <div className="App">
      <Greet
        name="Sina"
        family="Saeedifar"
        isLoggedIn={true}
        messageCount={9}
      />
      <Person name={personName} />
      <PersonList names = {nameList} />
    </div>
  );
}

export default App;
