import { profile } from "console";
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
import { Private } from "./components/auth/Private";
import { CounterClass } from "./components/class/CounterClass";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { User } from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";
import { Domref } from "./components/ref/DomRef";
import { MutableRef } from "./components/ref/MutableRef";
import { Counter } from "./components/state/Counter";
import { Profile } from "./components/auth/Profile";

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
       <MutableRef />
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
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <CounterClass message="The Count Value Is" />
      <Container style={{ padding: "1rem", border: "1px solid black" }} />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <Domref />
      <Private IsLoggedIn={false} component={Profile}/>
     
    </div>
  );
}

export default App;
