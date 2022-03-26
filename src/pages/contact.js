import * as React from 'react'
import Layout from '../components/layout'

import { graphql } from 'gatsby'
import { useTranslation } from 'react-i18next'

import { StaticImage } from 'gatsby-plugin-image'

const ContactPage = () => {
  const { t } = useTranslation()

  return (
    <Layout pageTitle={t('Contact')}>
      <div className='columns'>
        <div className='column'>
          <div className='content'>
            <h3>{t('Contact Information')}</h3>
            <p>{t('Phone')}: 510-895-1818, 510-614-1816</p>
            <h3>{t('Booking') + ' / ' + t('Special Requests')}</h3>
            <p>{t('Booking Information')}</p>
          </div>
          <div className='columns is-desktop is-gapless'>
            <div className='column'>
              <StaticImage alt='mainroom' placeholder='blurred' src='../images/contact/mainroom.jpg'/>
            </div>
            <div className='column'>
              <StaticImage alt='altroom' placeholder='blurred' src='../images/contact/altroom.jpg'/>
            </div>
          </div>
        </div>
        <div className='column'>
          <div className='content'>
            <h3>{t('FAQ')}</h3>
            <p className='has-text-weight-bold'>{t('Reservations Q')}</p>
            <p>{t('Reservations A1')}</p>
            <p>{t('Reservations A2')}</p>
            <p className='has-text-weight-bold'>{t('Dim sum Q')}</p>
            <p>{t('Dim sum A')}</p>
            <p className='has-text-weight-bold'>{t('Gift Q')}</p>
            <p>{t('Gift A')}</p>
          </div>
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

export default ContactPage