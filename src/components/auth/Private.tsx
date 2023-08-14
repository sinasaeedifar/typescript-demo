import { Login } from "./Login";
import {ProfileProps} from "./Profile"
type PrivateProps = {
  IsLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
};
export const Private = ({ IsLoggedIn, component :Component }: PrivateProps) => {
  if (IsLoggedIn) {
    return <Component name="Sina" />;
  } else {
    return <Login />;
  }
};
