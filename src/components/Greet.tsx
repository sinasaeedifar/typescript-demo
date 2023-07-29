type greedProps = {
  name: string;
  family: string;
  isLoggedIn: boolean;
  messageCount: number;
};
export const Greet = (props: greedProps) => {
  return (
    <div>
      {props.isLoggedIn
        ? `Hello Dear ${props.name} ! You have ${props.messageCount} unread messages ...`
        : "Welcome Guest"}
    </div>
  );
};
