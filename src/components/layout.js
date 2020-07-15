import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

import '../assets/scss/main.scss'
import Header from './Header'
import Menu from './Menu'
import Contact from './Contact'
import Footer from './Footer'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuVisible: false,
      loading: 'is-loading',
    }
    this.handleToggleMenu = this.handleToggleMenu.bind(this)
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  handleToggleMenu() {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible,
    })
  }

  render() {
    const { children } = this.props

    return (
      <StaticQuery query={graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `} render={data => (
        <div
          className={`body ${this.state.loading} ${
            this.state.isMenuVisible ? 'is-menu-visible' : ''
          }`}
        >
          <div id="wrapper">
            <Header onToggleMenu={this.handleToggleMenu} title={data.site.siteMetadata.title}/>
            {children}
            <Contact />
            <Footer />
          </div>
          <Menu onToggleMenu={this.handleToggleMenu} />
        </div>
      )}
      />
    )
  }
}

export default Layout
