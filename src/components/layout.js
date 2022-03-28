import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Helmet } from 'gatsby-plugin-react-i18next'

import Header from './header'
import Nav from './navbar'

import "../css/styles.scss"

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          description
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        <meta name='description' content={data.site.siteMetadata.description} />
        <meta name='author' content={data.site.siteMetadata.author} />
      </Helmet>
      <Header />
      <Nav />
      {children}
    </>
  )
}

export default Layout