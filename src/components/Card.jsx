import { useGlobalContext } from "../context/context";
import Wrapper from "../assets/wrappers/Card";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";

const Card = () => {
  const { githubUser } = useGlobalContext();
  const {
    bio,
    location,
    name,
    avatar_url,
    html_url,
    blog,
    twitter_username,
    company,
  } = githubUser;

  return (
    <Wrapper>
      <header>
        <img src={avatar_url} alt={`${name}s avatar`} />
        <div>
          <h4>{name || "name"}</h4>
          <p>@{twitter_username || "twitter username"}</p>
        </div>
        <a href={html_url} target="_blank">
          follow
        </a>
      </header>
      <p className="bio">{bio || "bio"}</p>
      <div className="links">
        <p>
          <MdBusiness /> {company || "company"}
        </p>
        <p>
          <MdLocationOn /> {location || "location"}
        </p>
        <a href={blog ? `https://${blog}` : null} target="_blank">
          <MdLink /> {blog || "blog"}
        </a>
      </div>
    </Wrapper>
  );
};

export default Card;
