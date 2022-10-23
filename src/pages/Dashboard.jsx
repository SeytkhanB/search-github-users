import { Info, Repos, User, Search, Navbar } from "../components";
import Loading from "../components/Loading";
import { useGlobalContext } from "../context/context";
import NotExists from "../images/not-exists.svg";

const Dashboard = () => {
  const { isLoading, error } = useGlobalContext();

  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
        <Loading />
      </main>
    );
  }
  if (error.show) {
    return (
      <main>
        <Navbar />
        <Search />
        <img className="img" src={NotExists} alt={error.msg} />
        <h2 className="error-text">{error.msg}</h2>
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
