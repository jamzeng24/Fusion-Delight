import * as React from 'react'
import Layout from '../components/layout'

import { graphql } from 'gatsby'
import { useTranslation } from 'react-i18next'

const ContactPage = () => {
  const { t } = useTranslation()

  return (
    <Layout pageTitle='Contact | Fusion Delight'>
      Hello
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

export default ContactPage