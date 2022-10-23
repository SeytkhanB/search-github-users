import { useState, useEffect, createContext, useContext } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";
const GithubContext = createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);

  const [error, setError] = useState({ show: false, msg: "" });
  const [isLoading, setIsLoading] = useState(false);

  const [requests, setRequests] = useState(0);

  const searchGithubUser = async (user) => {
    setIsLoading(true);
    toggleError();
    const res = await axios
      .get(`${rootUrl}/users/${user}`)
      .catch((err) => console.log(err));

    if (res) {
      setGithubUser(res.data);
      const { login, followers_url } = res.data;

      // fetch repos
      const repos = await axios(
        `${rootUrl}/users/${login}/repos?per_page=100`
      ).catch((err) => console.log(err));
      setRepos(repos.data);

      // fetch followers
      const followers = await axios(`${followers_url}?per_page=100`).catch(
        (err) => console.log(err)
      );
      setFollowers(followers.data);

      // ALTERNATIVE WAY with Promise.allSettled()
      // await Promise.allSettled([
      //   axios(`${rootUrl}/users/${login}/reposr?per_page=100`),
      //   axios(`${followers_url}?per_page=100`),
      // ])
      //   .then((res) => {
      //     const [repos, followers] = res;
      //     const status = "fulfilled";
      //     if (repos.status === status) {
      //       setRepos(repos.value.data);
      //     }
      //     if (followers.status === status) {
      //       setFollowers(followers.value.data);
      //     }
      //   })
      //   .catch((err) => console.log(err));
    } else {
      toggleError(true, "There is no user with that username!");
    }
    checkRequests();
    setIsLoading(false);
  };

  const checkRequests = () => {
    axios
      .get(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        setRequests(remaining);
        if (remaining === 0) {
          toggleError(true, "Sorry, you have exceeded your hourly rate limit!");
        }
      })
      .catch((err) => {
        throw new Error("Failed while checking requests!");
      });
  };

  const toggleError = (show = false, msg = "") => {
    setError({ show, msg });
  };

  useEffect(() => {
    checkRequests();
  }, []);

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        requests,
        followers,
        isLoading,
        error,
        searchGithubUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GithubContext);
};

export { GithubProvider, GithubContext };
