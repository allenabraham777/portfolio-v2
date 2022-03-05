import React from "react";
import Layout from "../layouts/default";
import { graphql } from "gatsby";

import Card from "../components/blogs/Card";
import Seo from "../components/Seo";
import '../styles/pages/blogs.scss'

const Blogs = ({ data }) => {
  return (
    <Layout fullHeight>
      <Seo title="Blogs" />
      <div className="blogs">
        <h1 className="blogs__heading">Let's have some fun reading</h1>
        <div className="blogs__list">
          {data.allMarkdownRemark.edges.map(
            ({ node: { id, frontmatter: blog } }) => (
              <Card key={id} blog={blog} />
            )
          )}
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query AllBlogPosts {
    allMarkdownRemark(
      filter: {
        frontmatter: { published: { eq: true } }
        fileAbsolutePath: { regex: "/blogs/.*md$/" }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            published
            date
            path
            description
            name
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Blogs;
