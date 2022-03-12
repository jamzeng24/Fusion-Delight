import * as React from "react"
import Layout from "../components/layout"

import { graphql } from 'gatsby'
import { useTranslation } from "react-i18next"

const NotFoundPage = () => {
  const { t } = useTranslation

  return (
    <Layout pageTitle='404 | Fusion Delight'>
      <h2 className='subtitle is-2 is-flex is-justify-content-center'>Sorry, I can't find what you're looking for!</h2>
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

export default NotFoundPage
