type greedProps = {
  name: string;
  family: string;
  isLoggedIn: boolean;
  messageCount?: number;
};
export const Greet = ({name,family,isLoggedIn,messageCount}: greedProps) => {
  return (
    <div>
      {isLoggedIn
        ? `Hello Dear ${name} ! You have ${messageCount} unread messages ...`
        : "Welcome Guest"}
    </div>
  );
};
