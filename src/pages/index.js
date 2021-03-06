import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'
import HomeBanner from '../components/HomeBanner'
import Packages from '../components/packages'

class HomeIndex extends React.Component {
  render() {
    const packages = this.props.data.packages.edges.map(edge => edge.node.frontmatter);
    packages.sort((a,b) => (a.order > b.order) ? 1 : -1);
    return (
      <Layout>
        <Helmet
          title="Fulcrum Design and Marketing"
          meta={[
            {
              name: 'description',
              content:
                'Simple websites created super fast with the clients views in mind.',
            },
            {
              name: 'keywords',
              content:
                'website, design, marketing, simple, fast, web development',
            },
          ]}
        />

        <HomeBanner />
        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className="major">
                <h3>Conceptualize</h3>
                <p>
                  A successful website starts with a plan of action. We want to
                  present and showcase your business to everyone!
                </p>
                <p>
                  The best way to maximize your website is to provide essential
                  information in an enteratining and attractive way.
                </p>
              </header>
              {/*  <Link to="/blog" className="link primary"></Link>*/}
            </article>

            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3>Design</h3>
                <p>
                  The age of boutique website design is here! You can now flood
                  your audience with eye-catching sensations, giving them a
                  reason to stay longer on your webpage.
                </p>
                <p>
                  We can customize our layouts to attract your audience. Then,
                  after careful considerations, we implement the message your
                  business wants to showcase and give your customers a pleasing
                  experience to share with others.
                </p>
              </header>
              {/*<Link to="/blog" className="link primary"></Link>*/}
            </article>

            <article style={{ backgroundImage: `url(${pic05})` }}>
              <header className="major">
                <h3>Develop</h3>
                <p>
                  As website developers, we want to simplify the process of
                  creating and managing your customer relations. Websites can
                  increase eCommerce and improve customer satisfaction.
                </p>
                <p>
                  If you have a website, we can provide Content Management
                  services which enable you to request edits on the website and
                  interact with us.
                </p>
              </header>
              {/*  <Link to="/blog" className="link primary"></Link>*/}
            </article>

            <article style={{ backgroundImage: `url(${pic06})` }}>
              <header className="major">
                <h3>Marketing</h3>
                <p>
                  Leads. Leads are what we are looking for. We strive to
                  attract, engage, and convert your prospect customers. Create
                  an inviting experience which can be made available to
                  everybody.
                </p>
                <p>
                  Your website is essential in creating more opportunities for
                  leads. As a business, your job is to solve problems for the
                  consumer.
                </p>
              </header>
              {/*<Link to="/blog" className="link primary"></Link>*/}
            </article>
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Our Mission</h2>
              </header>
              <p>
                We believe form and function go hand-in-hand when it comes to
                web development. Our company is based in Florida and
                has helped clients internationally with all of their web
                development needs. Whether you’re interested in giving your
                personal website a creative boost, or building a business and
                looking to create a unique brand presence online, Fulcrum Design
                and Marketing will tailor our services to suit your specific
                requests.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/blog" className="button next">
                    Learn More
                  </Link>
                </li>
              </ul>
            </div>
          </section>
          <Packages packages={packages}/>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex

export const pageQuery = graphql`
    query {
        packages: allMarkdownRemark(filter: {frontmatter: { key: { eq: "package" } }}) {
            edges {
                node {
                    frontmatter {
                        name
                        price
                        note
                        order
                        options {
                            name
                        }
                    }
                }
            }
        }
    }
`
