import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image';

const HomeImage = () => {
  return <></>
  // const data = useStaticQuery(graphql`
  // query Image {
  //   image: file(relativePath: {eq: "title.png"}) {
  //     childImageSharp {
  //       fluid(maxWidth: 1000) {
  //         ...GatsbyImageSharpFluid_withWebp
  //       }
  //     }
  //   }
  // }`);
  // return <>
  //   <Img
  //   fluid={data.image.childImageSharp.fluid}
  //   alt="Hero"
  //   style={{width: "100%"}}
  //   />
  // </>
}

export default HomeImage