import SPLeaguesFilters from "../components/SPLeaguesFilters";
import SPLeaguesList from "../components/SPLeaguesList";

const Home = () => (
  <div className="home">
    <SPLeaguesFilters />
    <SPLeaguesList data={[]} />
  </div>
);
export default Home;
