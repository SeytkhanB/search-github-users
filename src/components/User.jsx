import Wrapper from "../assets/wrappers/User";
import Card from "./Card";
import Followers from "./Followers";
const User = () => {
  return (
    <section className="section">
      <Wrapper className="section-center">
        <Card />
        <Followers />
      </Wrapper>
    </section>
  );
};

export default User;
