import * as React from "react"
import Layout from "../components/layout"

import { graphql } from 'gatsby'
import { useTranslation } from "react-i18next"

const NotFoundPage = () => {
  const { t } = useTranslation()

  return (
    <Layout pageTitle='404'>
      <section className='section'>
        <div className='container'>
          <div className='columns is-centered'>
            <div className='column is-10'>
              <div className='content is-flex is-flex-direction-column has-text-centered'>
                <h2>{t('Sorry') + '!'}</h2>
                <h2>{t('Cant find')}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
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
