import { PersonProps } from "./Person.types";


export const Person = (props: PersonProps) => {
  return (
    <div>
      your name is {props.name.first}
      your lastname is {props.name.last}
    </div>
  );
};
