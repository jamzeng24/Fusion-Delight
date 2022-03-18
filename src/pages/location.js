import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { useTranslation } from 'react-i18next'

const LocationPage = () => {
  const { t } = useTranslation()

  return (
    <Layout pageTitle='Location'>
      <div className='columns'>
        <div className='column'>
          <div className='content mb-2'>
            <h5 className='has-text-weight-bold mb-2'>Address</h5>
            <a href='https://www.google.com/maps?ll=37.688436,-122.136265&z=16&t=m&hl=en&gl=US&mapclient=embed&cid=2042217914461181663' className='address' target='_blank' rel='noreferrer'>699 Lewelling Blvd Unit 212 San Leandro, CA 94579</a>
            <h5 className='has-text-weight-bold mt-4 mb-2'>Hours of Operation</h5>
            <p>
              Open Everyday
              <br />
              Lunch/Dimsum: 10:30am - 3:00pm
              <br />
              Dinner: 5:30pm - 9:30pm
            </p>
            <p className='is-size-7'>
              Updated as of March 10, 2022
            </p>
          </div>
          <StaticImage height={300} alt='storefront' placeholder='blurred' src='../images/storefront.png'/>
        </div>
        <div className='column is-flex'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157.330541945397!2d-122.13845338455825!3d37.68843557977519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f903617db0b59%3A0x1c576a5f8165d6df!2sFusion%20Delight!5e0!3m2!1sen!2sus!4v1646382859650!5m2!1sen!2sus" className='is-flex-grow-1' title='google maps' style={{border: 0}} loading="lazy"></iframe>
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