import { useState } from "react";
import Wrapper from "../assets/wrappers/Search";
import { MdSearch } from "react-icons/md";
import { useGlobalContext } from "../context/context";

const Search = () => {
  const [user, setUser] = useState("");
  const { requests, error, searchGithubUser, isLoading } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      searchGithubUser(user);
    }
  };

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  return (
    <section className="section">
      <Wrapper className="section-center">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <MdSearch />
            <input
              value={user}
              onChange={handleChange}
              type="text"
              placeholder="Enter github user"
            />
            <button
              type="submit"
              className={requests === 0 || isLoading ? "disabled-btn" : "search-btn"}
              disabled={requests === 0 || isLoading}
            >
              search
            </button>
          </div>
        </form>

        <h3>requests: {requests} / 60</h3>
      </Wrapper>
    </section>
  );
};

export default Search;
