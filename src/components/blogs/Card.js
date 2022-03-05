import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image';

import '../../styles/components/blogs/card.scss';

const Card = ({ blog }) => {
  return (
    <Link to={blog.path} className="blogcard">
      <div className="blogcard__thumbnail">
        <Img fluid={blog.thumbnail.childImageSharp.fluid} style={{width: "100%", height: "100%"}}/> 
      </div>
      <div className="blogcard__details">
        <h1 className="blogcard__details-title" >
          {blog.title}
        </h1>
        <p className="blogcard__details-description">
          {blog.description}
        </p>
      </div>
      <div className='blogcard__footer'>
        <div className="blogcard__footer-name">
          {blog.name}
        </div>
        <div className="blogcard__footer-date">
          {blog.date}
        </div>
      </div>
    </Link>
  )
}

export default Card