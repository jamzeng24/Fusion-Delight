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
            <h2>{t('Contact Information')}</h2>
            <p>{t('Phone')}: 510-895-1818</p>
            <h2>{t('Booking') + ' / ' + t('Special Requests')}</h2>
            <p>
              Please call us and mention booking / banquets.
              <br />
              More information will be provided to you from there.
            </p>
          </div>
          <StaticImage height={250} alt='seafoodplatter' placeholder='blurred' src='../images/contact/seafoodplatter.png'/>
        </div>
        <div className='column'>
          <div className='content'>
            <h2>{t('FAQ')}</h2>
            <p className='has-text-weight-bold'>Do you take reservations? If so, how can I make one?</p>
            <p>
              For dim sum, we do not take reservations. In order to be certain that your party gets a table, please arrive early and allow the host to put you and your party in the queue.
            </p>
            <p>
              For dinner, please call us at 510-895-1818 and let us know the time, date, and number of people for your reservation.
            </p>
            <p className='has-text-weight-bold'>Do you serve dim sum during dinner?</p>
            <p>Dim sum is traditionally enjoyed only during brunch time and we want to stay true to original practice. So, we do not serve dim sum during dinner.</p>
            <p className='has-text-weight-bold'>Do you sell gift cards?</p>
            <p>We do not sell gift cards, but we will consider it in the future!</p>
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