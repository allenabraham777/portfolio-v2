import React from "react";
import Layout from "../layouts/default";
import HomeImage from "../components/images/HomeImage";

const Home = () => {
  return (
    <Layout isFullpage>
      <div className="home">
        <div className="home-heading">
          <div className="home-heading-main">ALLEN&nbsp;&nbsp;K ABRAHAM</div>
          <h1 className="home-heading-one">Hey There,</h1>
          <h2 className="home-heading-two">Welcome to my space</h2>
          <h3 className="home-heading-three">I'm just write some random code</h3>
          <a className="home-heading-button">Download Resume <span className="download">▼</span></a>
        </div>
        <div className="home-image">
          <HomeImage/>
        </div>
      </div>
    </Layout>
  )
}

export default Home;