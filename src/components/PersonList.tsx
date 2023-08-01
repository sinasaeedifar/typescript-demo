import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[];
};

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((item, index) => {
        return (
          <h2 >
            {item.first} {item.last}
          </h2>
        );
      })}
    </div>
  );
};
