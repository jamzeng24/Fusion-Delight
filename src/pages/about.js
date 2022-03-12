import * as React from 'react'
import Layout from '../components/layout'

import { graphql } from 'gatsby'
import { useTranslation } from 'react-i18next'

const AboutPage = () => {
  const { t } = useTranslation()

  return (
    <Layout pageTitle="About Us | Fusion Delight">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export const query = graphql`
  query ($language: String) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`

export default AboutPage