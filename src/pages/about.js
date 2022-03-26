import * as React from 'react'
import Layout from '../components/layout'

import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { useTranslation } from 'react-i18next'

const AboutPage = () => {
  const { t } = useTranslation()
  
  return (
    <Layout pageTitle={t('About Us')}>
      <h4 className='title is-4'>{t('Our Story')}</h4>
      <div className='columns is-desktop'>
        <div className='column'>
          <div className='content'>
            <p>{t('About1')}</p>
          </div>
        </div>
        <div className='column'>
          <div className='content'>
            <p>{t('About2')}</p>
            <p>{t('About3')}</p>
          </div>
        </div>
        <div className='column is-flex'>
          <StaticImage className='is-flex-grow-1' placeholder='blurred' alt='design3' src='../images/about/render3.jpg'/>
        </div>
      </div>
      <div className='columns is-desktop'>
        <div className='column is-flex'>
          <StaticImage className='is-flex-grow-1' placeholder='blurred' alt='design1' src='../images/about/render.jpg'/>
        </div>
        <div className='column is-flex'>
          <StaticImage className='is-flex-grow-1' placeholder='blurred' alt='design2' src='../images/about/render2.jpg'/>
        </div>
        <div className='column is-flex'>
          <StaticImage className='is-flex-grow-1' placeholder='blurred' alt='design4' src='../images/about/render4.jpg'/>
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