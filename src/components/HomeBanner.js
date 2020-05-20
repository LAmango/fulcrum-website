import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

const HomeBanner = () => {

  const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
  `)
  return (
    <section id="banner" className="major">
      <div className="inner">
        <header className="major">
          <h1>{data.site.siteMetadata.title}</h1>
        </header>
        <div className="content">
          <p>
            We Design
            <br/>
            With You in Mind
          </p>
          <ul className="actions">
            <li>
              <a href="#one" className="button next scrolly">
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default HomeBanner