import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { useTranslation } from 'react-i18next'

const LocationPage = () => {
  const { t } = useTranslation()

  return (
    <Layout pageTitle={t('Location')}>
      <div className='columns'>
        <div className='column'>
          <div className='content mb-2'>
            <h5 className='has-text-weight-bold mb-2'>{t('Address')}</h5>
            <a href={t('Address Link')} className='address' target='_blank' rel='noreferrer'>699 Lewelling Blvd Unit 212 San Leandro, CA 94579</a>
            <h5 className='has-text-weight-bold mt-4 mb-2'>{t('Hours of Operation')}</h5>
            <p>
              {t('Open Everyday')}
              <br />
              {t('Dim sum') + ': ' + t('Lunch Time')}
              <br />
              {t('Dinner') + ': ' + t('Dinner Time')}
            </p>
            <p className='is-size-7'>
              {t('Updated')}
            </p>
          </div>
          <StaticImage height={300} alt='storefront' placeholder='blurred' src='../images/storefront.png'/>
        </div>
        <div className='column is-flex'>
          <iframe src={t('Map')} className='is-flex-grow-1' title='google maps' style={{border: 0}} loading="lazy"></iframe>
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

export default LocationPage