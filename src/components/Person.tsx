type personProps = {
  name: {
    first: string;
    last: string;
  };
};

export const Person = (props: personProps) => {
  return (
    <div>
      your name is {props.name.first}
      your lastname is {props.name.last}
    </div>
  );
};
