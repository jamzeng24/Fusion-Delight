import * as React from "react"
import Layout from "../components/layout"

import { graphql } from 'gatsby'
import { useTranslation } from "react-i18next"

const NotFoundPage = () => {
  const { t } = useTranslation

  return (
    <Layout pageTitle='404'>
      <div className='content is-flex is-flex-direction-column has-text-centered'>
        <h2>Sorry!</h2>
        <h2>I can't find what you are looking for.</h2>
      </div>
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
