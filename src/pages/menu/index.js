import * as React from 'react'
import Layout from '../../components/layout'
import { Link } from 'gatsby-plugin-react-i18next'

import { graphql } from 'gatsby'
import { useTranslation } from 'react-i18next'

import { StaticImage } from 'gatsby-plugin-image'

const MenuPage = ({ data }) => {
  const { t } = useTranslation()

  return (
    <Layout pageTitle="Menu">
      <div className='columns is-centered'>
        <div className='column is-half has-text-centered'>
          <h3 className='is-size-3 is-uppercase has-text-weight-semibold mb-6'>Menus</h3>
          <div className='block'>
            <Link className='norm-link is-size-5' to='./dimsum'>Dim sum</Link>
          </div>
          <div className='block'>
            <Link className='norm-link is-size-5' to='./dinner'>Dinner</Link>
          </div>
          <StaticImage className='mt-6' height={300} placeholder='blurred' alt='sampletable' src='../../images/menu/table.png'/>
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

export default MenuPage