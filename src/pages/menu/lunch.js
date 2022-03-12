import * as React from 'react'

import Layout from '../../components/layout'

import { graphql } from 'gatsby'
import { useTranslation } from 'react-i18next'

const LunchPage = () => {
  const { t } = useTranslation()

  return (
    <Layout pageTitle="Lunch | Fusion Delight">
      <h1>Lunch</h1>
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

export default LunchPage