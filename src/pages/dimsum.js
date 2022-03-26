import * as React from 'react'

import Layout from '../components/layout'

import { graphql } from 'gatsby'
import { useTranslation } from 'react-i18next'
import { StaticImage } from 'gatsby-plugin-image'

const DimsumPage = () => {
  const { t } = useTranslation()

  return (
    <Layout pageTitle={t('Dim sum')}>
      <div className='block has-text-centered'>
        <a className='norm-link is-size-4' href='/dimsum.pdf'>&gt;{t('Dim sum menu')}&lt;</a>
        <p className='is-size-6'>{t('Prices')}</p>
      </div>
      <StaticImage height={1000} placeholder='blurred' alt='dimsummenu1' src='../images/menu/dimsummenu1.png'/>
      <StaticImage height={1000} placeholder='blurred' alt='dimsummenu2' src='../images/menu/dimsummenu2.png'/>
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

export default DimsumPage