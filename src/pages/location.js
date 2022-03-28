import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { useTranslation } from 'react-i18next'

const LocationPage = () => {
  const { t } = useTranslation()

  return (
    <Layout pageTitle={t('Location')}>
      <section className='section'>
        <div className='container'>
          <div className='columns is-centered'>
            <div className='column is-10'>
              <div className='columns is-variable is-1'>
                <div className='column'>
                  <p className='has-text-weight-bold is-size-5 mb-2'>{t('Address')}</p>
                  <a href={t('Address Link')} className='address' target='_blank' rel='noreferrer'>699 Lewelling Blvd Unit 212 San Leandro, CA 94579</a>
                  <p className='has-text-weight-bold is-size-5 mt-4 mb-2'>{t('Business Hours')}</p>
                  <div className='columns is-variable is-1 mb-0'>
                    <div className='column'>
                      <div className='block'>
                        <p>{t('Weekdays')}</p>
                        <p>{t('Dim sum') + ': ' + t('Weekday Lunch Start') + ' - ' + t('Lunch End')}</p>
                        <p>{t('Dinner') + ': ' + t('Dinner Time')}</p>
                      </div>
                    </div>
                    <div className='column'>
                      <div className='block'>
                        <p>{t('Weekend')}</p>
                        <p>{t('Dim sum') + ': ' + t('Weekend Lunch Start') + ' - ' + t('Lunch End')}</p>
                        <p>{t('Dinner') + ': ' + t('Dinner Time')}</p>
                      </div>
                    </div>
                  </div>
                  <p className='is-size-7'>
                    {t('Updated')}
                  </p>
                  <StaticImage height={300} alt='storefront' placeholder='blurred' src='../images/storefront.png'/>
                </div>
                <div className='column is-flex'>
                  <iframe src={t('Map')} className='is-flex-grow-1' title='google maps' style={{border: 0}} loading="lazy"></iframe>
                </div>
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

export default LocationPage