import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};
export const User = () => {
  const handleLogin = () => {
setUser({
    name : "Sina",
    email : "sina.saeedifar@gmail.com"
})  };
  const handleLogout = () => {
    setUser(null);
  };
  const [user, setUser] = useState(null); //user is state variable and setUser is a setter function
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is </div>
      <div>User Email is </div>
    </div>
  );
};
