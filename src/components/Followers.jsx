import { useGlobalContext } from "../context/context";
import Follower from "./Follower";
import Wrapper from "../assets/wrappers/Followers";
import FollowersImg from "../images/followers.svg";

const Followers = () => {
  const { followers } = useGlobalContext();

  if (followers.length === 0) {
    return (
      <Wrapper>
        <img
          className="not-followers-img"
          src={FollowersImg}
          alt="followers img"
        />
        <h4 className="not-followers">You don't have any followers</h4>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="followers">
        {followers.map((follower, index) => {
          const { avatar_url: img, html_url, login } = follower;
          return (
            <Follower key={index} img={img} html_url={html_url} login={login} />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Followers;
