import * as React from 'react'
import Layout from '../components/layout'

import { graphql } from 'gatsby'

import { useTranslation } from 'react-i18next'

const IndexPage = () => {
  const { t } = useTranslation()

  return (
    <Layout pageTitle='Home | Fusion Delight'>
      {/* put home page contents here */}
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

export default IndexPage