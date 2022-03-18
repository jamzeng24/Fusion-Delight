import * as React from 'react'
import Layout from '../components/layout'

import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {

  return (
    <Layout pageTitle='Home'>
      <div className='columns mb-0'>
        <div className='column'>
          <h3 className='title is-3'>Fusion Delight</h3>
          <h5 className='subtitle is-5'>
            Dim sum
            {' • '}
            Seafood
            {' • '}
            Teahouse
          </h5>
          <div className='block'>
            <p>Dim sum: 10:30am - 3:00pm</p>
            <p>Dinner: 5:30pm - 9:30pm</p>
            <p>Tel: 510-895-1818</p>
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