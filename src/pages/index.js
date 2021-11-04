import React from "react";
import Layout from "../layouts/default";
import HomeImage from "../components/images/HomeImage";

const Home = () => {
  return (
    <Layout noHeader isFullpage>
      <div className="home">
        <div className="home-heading">
          ALLEN K ABRAHAM
        </div>
        <div className="home-sub-heading">
          <h1>Hey There,</h1>
          <h2>Welcome to my space</h2>
          <h3>I'm just a regular dude who loves coding</h3>
          <a>Download Resume</a>
        </div>
        <div className="home-image">
          <HomeImage/>
        </div>
      </div>
    </Layout>
  )
}

export default Home;