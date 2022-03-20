import * as React from 'react'
import Layout from '../components/layout'

import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { useTranslation } from 'react-i18next'

const IndexPage = () => {
  const { t } = useTranslation()

  return (
    <Layout pageTitle={t('Home')}>
      <div className='columns mb-0'>
        <div className='column'>
          <p className='title is-3'>Fusion Delight 美食坊</p>
          <p className='subtitle is-5'>
            {t('Dim sum') + ' • ' + t('Seafood') + ' • ' + t('Teahouse')}
          </p>
          <div className='block'>
            <p>{t('Dim sum') + ': ' + t('Lunch Time')}</p>
            <p>{t('Dinner') + ': ' + t('Dinner Time')}</p>
            <p>{t('Phone')}: 510-895-1818</p>
          </div>
        </div>
        <div className='column is-flex is-justify-content-flex-end' style={{gap: '1px'}}>
          <StaticImage height={150} placeholder='blurred' alt='lobby' src='../images/index/lobby.png' />
          <StaticImage height={150} placeholder='blurred' alt='liquor' src='../images/index/liquor.png' />
        </div>
      </div>
      <StaticImage placeholder='blurred' alt='pano' src='../images/index/pano.webp'/>
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