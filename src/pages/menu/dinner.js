import * as React from 'react'

import Layout from '../../components/layout'

import { graphql } from 'gatsby'
import { useTranslation } from 'react-i18next'
import { StaticImage } from 'gatsby-plugin-image'

const DinnerPage = () => {
  const { t } = useTranslation()

  return (
    <Layout pageTitle="Dinner">
      <div className='block has-text-centered'>
        <a className='norm-link is-size-4' href='/dinner.pdf'>&gt;dinner menu&lt;</a>
        <h6 className='title is-6'>Prices are subject to change.</h6>
        <h6 className='subtitle is-6'>Most updated prices at restaurant.</h6>
      </div>
      <h4 className='title is-4 has-text-centered'>Popular Items</h4>
      <div className='is-flex is-flex-wrap-wrap is-justify-content-space-between' style={{gap: 10}}>
        <div>
          <StaticImage height={300} alt='squab' src='../../images/menu/squab.webp'/>
          <p className='is-size-7 '>Chinese Fried Squab</p>
        </div>
        <div>
          <StaticImage height={300} alt='honeywalnutprawns' src='../../images/menu/honeywalnutprawns.webp'/>
          <p className='is-size-7 has-text-right'>Honey Walnut Prawn</p>
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