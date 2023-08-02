import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { User } from "./components/state/User";

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
      <PersonList names={nameList} />
      <Status status="Success" />
      <Oscar>
        <Heading>Oscar Goes To Leonardo Dicaprio !</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log("i am clicked", event, id);
        }}
      />
      <Input
        value="Sina"
        handleChange={(event) => console.log("event", event)}
      />
      <User/>
      <Container style={{ padding: "1rem", border: "1px solid black" }} />
    </div>
  );
}

export default App;
