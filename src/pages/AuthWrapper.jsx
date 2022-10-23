import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../components/Loading";
import Wrapper from "../assets/wrappers/AuthWrapper";

function AuthWrapper({ children }) {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    <Wrapper>
      <h1>{error.message}</h1>
    </Wrapper>;
  }

  return <>{children}</>;
}

export default AuthWrapper;
