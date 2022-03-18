import * as React from 'react'

import Layout from '../../components/layout'

import { graphql } from 'gatsby'
import { useTranslation } from 'react-i18next'
import { StaticImage } from 'gatsby-plugin-image'

const LunchPage = () => {
  const { t } = useTranslation()

  return (
    <Layout pageTitle="Dim Sum">
      <div className='block has-text-centered'>
        <a className='norm-link is-size-4' href='/dimsum.pdf'>&gt;dim sum menu&lt;</a>
        <h6 className='title is-6'>Prices are subject to change.</h6>
        <h6 className='subtitle is-6'>Most updated prices at restaurant.</h6>
      </div>
      <StaticImage height={1000} placeholder='blurred' alt='dimsummenu1' src='../../images/menu/dimsummenu1.png'/>
      <StaticImage height={1000} placeholder='blurred' alt='dimsummenu2' src='../../images/menu/dimsummenu2.png'/>
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

export default LunchPage