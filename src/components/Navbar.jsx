import Wrapper from "../assets/wrappers/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import Welcome from "../images/welcome.svg";

const Navbar = () => {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();
  const isUser = isAuthenticated && user;

  return (
    <Wrapper>
      <img className="welcome-img" src={Welcome} alt="Welcome" />
      {isUser && user.picture && (
        <img className="user-img" src={user.picture} alt="user picture" />
      )}
      {isUser && user.name && (
        <h4>
          <strong>{user.name.toUpperCase()}</strong>
        </h4>
      )}
      {isUser ? (
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          logout
        </button>
      ) : (
        <button onClick={loginWithRedirect}>login</button>
      )}
    </Wrapper>
  );
};

export default Navbar;
