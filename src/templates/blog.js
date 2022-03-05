import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../layouts/default";
import ReactUtterences from "react-utterances";

import "../styles/templates/blog.scss";
import Seo from "../components/Seo";

const PostTemplate = ({ data: { markdownRemark: post } }) => {
  return (
    <Layout fullHeight>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.title}
      />
      <div className="blogpost">
        <h1 className="blogpost__title">{post.frontmatter.title}</h1>
        <div className="blogpost__credits">
          <div className="blogpost__credits-image">
            <img
              src={`https://github.com/${post.frontmatter.author}.png?size=70`}
              alt={post.frontmatter.name}
            />
          </div>
          <div className="blogpost__credits-details">
            <div className="author">
              <Link to={`https://github.com/${post.frontmatter.author}`}>
                {post.frontmatter.name}
              </Link>
            </div>
            <div className="date">
              <big>
                <b>Posted On</b>: {post.frontmatter.date}
              </big>
            </div>
          </div>
        </div>
        <div
          className="blogpost__content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <div className="blogpost__comments">
          <h2>Comments</h2>
          <ReactUtterences
            repo={"allenabraham777/blog-comment-warehouse"}
            type={"pathname"}
            theme="github-dark"
          />
          <p className="privacy">
            Comments will br processed with the privacy policy of{" "}
            <a href="https://utteranc.es/">utterances</a> and{" "}
            <a href="https://github.com/">github</a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export const postQuery = graphql`
  query MyQuery($path: String) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        date
        title
        description
        author
        name
      }
      html
    }
  }
`;

export default PostTemplate;
