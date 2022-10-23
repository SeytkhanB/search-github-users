import Wrapper from "../assets/wrappers/Error";
import { Link } from "react-router-dom";


const Error = () => {
  return (
    <Wrapper>
      <div>
        <h1>404</h1>
        <h3>page not found</h3>
        <Link to="/" className="btn">
          back home
        </Link>
      </div>
    </Wrapper>
  );
};

export default Error;
