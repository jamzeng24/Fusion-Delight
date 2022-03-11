import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Helmet } from 'react-helmet'

import Header from './header'
import Nav from './navbar'

import "../css/styles.scss"

const Layout = ({ pageTitle, children }) => {
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
    <>
      <Helmet>
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      </Helmet>
      <Header />
      <Nav />
      <section className='section'>
        <div className='container'>
          <div className='columns is-centered'>
            <div className='column is-9'>
              {children}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Layout