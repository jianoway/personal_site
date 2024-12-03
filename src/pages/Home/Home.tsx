// Import components
import HomeIntro from "./HomeIntro";
import HomeNav from "./HomeNav";

// Import styles
import "./Home.scss";

const Home = (props: any) => {
  return (
    <div className="home_container">
      <HomeIntro />
      <HomeNav />
    </div>
  );
};

export default Home;
