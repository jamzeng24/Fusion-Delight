import * as React from 'react'
import Layout from '../../components/layout'

import { graphql } from 'gatsby'
import { useTranslation } from 'react-i18next'

const MenuPage = ({ data }) => {
  const { t } = useTranslation()

  return (
    <Layout pageTitle="Menu | Fusion Delight">
      {/* Refer to Lunch and Dinner menus */}
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

export default MenuPage