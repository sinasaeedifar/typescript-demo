type greedProps = {
  name: string;
  family: string;
  isLoggedIn: boolean;
  messageCount?: number;
};
export const Greet = (props: greedProps) => {
  const {messageCount = 0} =props
  return (
    <div>
      {props.isLoggedIn
        ? `Hello Dear ${props.name} ! You have ${messageCount} unread messages ...`
        : "Welcome Guest"}
    </div>
  );
};
