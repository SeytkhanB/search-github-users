import Wrapper from "../assets/wrappers/Repos";
import { useGlobalContext } from "../context/context";
import { Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";
import NoRepos from "../images/no-repos.svg";

const Repos = () => {
  const { repos } = useGlobalContext();

  const languages = repos.reduce((total, item) => {
    // calculating, how many languages and stars we have!
    const { language, stargazers_count } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      total[language] = {
        ...total[language], // overwriting the existing language and increment it
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }

    return total;
  }, {});

  let { stars, forks } = repos.reduce(
    (total, item) => {
      const { stargazers_count, name, forks } = item;
      total.stars[stargazers_count] = { label: name, value: stargazers_count };

      total.forks[forks] = { label: name, value: forks };

      return total;
    },
    {
      stars: {},
      forks: {},
    }
  );

  // turn an object into an array
  function sorting(value) {
    // most used language
    if (value === "mostUsed") {
      return Object.values(languages).sort((a, b) => {
        return b.value - a.value;
      }); // if there are a lot of languages just chain "slice(0, 5)" and get only 5 languages
    }

    // most starred language
    if (value === "mostPopular") {
      return Object.values(languages)
        .sort((a, b) => {
          return b.stars - a.stars;
        })
        .map((item) => ({ ...item, value: item.stars })); // overwriting items value with item.stars
    }

    // most starred repo
    if (value === "stars") {
      return (stars = Object.values(stars).slice(-5).reverse());
    }

    // most forked repo
    if (value === "forks") {
      return (forks = Object.values(forks).slice(-5).reverse());
    }
  }

  if (repos.length === 0) {
    return (
      <section className="section">
        <img src={NoRepos} className='img' alt="No repository" />
        <h3 className="error-text">No repos to display</h3>
      </section>
    );
  }

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie3D data={sorting("mostUsed")} />
        <Column3D data={sorting("stars")} />
        <Doughnut2D data={sorting("mostPopular")} />
        <Bar3D data={sorting("forks")} />
      </Wrapper>
    </section>
  );
};

export default Repos;
