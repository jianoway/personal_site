import logo from "./logo.svg";
import Typewriter from "typewriter-effect";
import "./Home.scss";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import HomeIntro from "./HomeIntro";
import HomeNav from "./HomeNav";
const Home = (props: any) => {
  return (
    <div className="home_container">
      <HomeIntro />
      <HomeNav />
    </div>
  );
};

export default Home;
