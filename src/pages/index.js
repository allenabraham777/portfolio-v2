import React from "react";
import { BsLinkedin, BsGithub } from 'react-icons/bs';

import Layout from "../layouts/default";
import "../styles/pages/index.scss";

const Home = () => {
  return (
    <Layout fullHeight>
      <div className="homepage">
        <div className="homepage__title">
          <h1> Hey There,</h1>
          <h3>Welcome to my space</h3>
        </div>
        <div className="homepage__social">
          <a href="" className="linkedin">
            <BsLinkedin/>
          </a>
          <a href="" className="github">
            <BsGithub/>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
