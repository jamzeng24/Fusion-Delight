import * as React from 'react'
import { graphql } from 'gatsby'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'

import { GatsbyImage } from 'gatsby-plugin-image'

const GalleryPage = ({ data }) => {
  const { t } = useTranslation()
  const images = data.images.edges.map(({ node }) => node.gatsbyImageData)

  return (
    <Layout pageTitle={t('Gallery')}>
      <div className='columns is-multiline is-centered is-mobile'>
        {images.map((currImage) => 
          <div className='column is-narrow'>
            <GatsbyImage image={currImage} />
          </div>
        )}
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
    images: allImageSharp {
      edges {
        node {
          gatsbyImageData(placeholder: BLURRED, width: 200)
          id
        }
      }
    }
  }
`

export default GalleryPage