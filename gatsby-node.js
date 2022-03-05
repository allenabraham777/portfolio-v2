const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve('src/templates/blog.js');
  await graphql(`{
    allMarkdownRemark(filter: {frontmatter: {published: {eq: true}}}) {
      edges {
        node {
          id
          frontmatter {
            path
            date
            published
          }
        }
      }
    }
  }`)
    .then(response => {
      if (response.errors) {
        return Promise.reject(response.errors)
      }
      const { data: { allMarkdownRemark: { edges } } } = response;
      edges.map(({node})=>{
        createPage({
          path: `${node.frontmatter.path}`,
          component: postTemplate
        })
      })
    })
    .catch(err => Promise.reject(err));
}