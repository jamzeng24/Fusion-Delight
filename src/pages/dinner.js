import * as React from 'react'

import Layout from '../components/layout'

import { graphql } from 'gatsby'
import { useTranslation } from 'react-i18next'
import { StaticImage } from 'gatsby-plugin-image'

const DinnerPage = () => {
  const { t } = useTranslation()

  return (
    <Layout pageTitle={t('Dinner')}>
      <div className='block has-text-centered'>
        <a className='norm-link is-size-4' href='/dinner.pdf'>&gt;{t('Dinner menu')}&lt;</a>
        <h6 className='title is-6'>{t('Prices')}</h6>
        <h6 className='subtitle is-6'>{t('Updated Prices')}</h6>
      </div>
      <h4 className='title is-4 has-text-centered'>{t('Popular Dishes')}</h4>
      <div className='is-flex is-flex-wrap-wrap is-justify-content-space-between' style={{gap: 10}}>
        <div>
          <StaticImage height={300} placeholder='blurred' alt='squab' src='../images/menu/squab.webp'/>
          <p className='is-size-7 '>{t('Chinese Fried Squab')}</p>
        </div>
        <div>
          <StaticImage height={300} placeholder='blurred' alt='honeywalnutprawns' src='../images/menu/honeywalnutprawns.webp'/>
          <p className='is-size-7 has-text-right'>{t('Honey Walnut Shrimp')}</p>
        </div>
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

export default DinnerPage