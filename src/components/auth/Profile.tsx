export type ProfileProps = {
    name :string
}

export const Profile = ({name}:ProfileProps) => {
    return <div>Private Profile Component . your name is {name}</div>;
  };
  