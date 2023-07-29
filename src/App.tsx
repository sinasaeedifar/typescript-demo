import "./App.css";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

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
      <Heading>this a strong heading</Heading>
      <Greet
        name="Sina"
        family="Saeedifar"
        isLoggedIn={true}
        messageCount={9}
      />
      <Person name={personName} />
      <PersonList names = {nameList} />
      <Status status="Success" />
      <Oscar>
        <Heading>Oscar Goes To Leonardo Dicaprio !</Heading>
      </Oscar>
    </div>
  );
}

export default App;
