import * as React from 'react'
import Layout from '../components/layout'

import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
  
  return (
    <Layout pageTitle="About Us">
      <h4 className='title is-4'>Our Story</h4>
      <div className='columns'>
        <div className='column'>
          <div className='content'>
            <p>Fusion Delight is located at San Leandro's Greenhouse Marketplace, near the neighboring San Lorenzo. Founded by a family who has been in the restaurant business for over 30 years, our latest venture, Fusion Delight, is a modern-day combination of Chinese cuisine, from Hong Kong to Guangzhou to other areas in Asia that feature cultural dishes. Along with our contemporary interior, we aim to provide a unique experience all of our diners.</p>
          </div>
        </div>
        <div className='column'>
          <div className='content'>
            <p>The first iteration of Fusion Delight started as Delight Garden, which was opened back in 2011, in a different area of the same San Leandro plaza. As time progressed, we aimed to push our customer experience by moving to our location today, with a redesigned interior and more overall space.</p>
            <p>We plan to update our interior to keep our modern, fresh look.</p>
          </div>
        </div>
        <div className='column'>
          <StaticImage height={200} alt='design3' src='../images/about/render3.jpg'/>
        </div>
      </div>
      <div className='columns'>
        <div className='column'>
          <StaticImage height={200} alt='design1' src='../images/about/render.jpg'/>
        </div>
        <div className='column'>
          <StaticImage height={200} alt='design2' src='../images/about/render2.jpg'/>
        </div>
        <div className='column'>
          <StaticImage height={200} alt='design4' src='../images/about/render4.jpg'/>
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

export default AboutPage