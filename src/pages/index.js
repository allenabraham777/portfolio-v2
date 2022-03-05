import React from "react";
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import Seo from "../components/Seo";

import Layout from "../layouts/default";
import "../styles/pages/index.scss";

const Home = () => {
  return (
    <Layout fullHeight>
      <Seo title="Home" />
      <div className="homepage">
        <div className="homepage__title">
          <h1> Hey There,</h1>
          <h3>Welcome to my space</h3>
        </div>
        <div className="homepage__social">
          <a href="https://linkedin.com/in/allenabraham777" className="linkedin">
            <BsLinkedin/>
          </a>
          <a href="https://github.com/allenabraham777" className="github">
            <BsGithub/>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
