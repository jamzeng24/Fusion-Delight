import * as React from 'react'
import Layout from '../components/layout'

import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { useTranslation } from 'react-i18next'

const IndexPage = () => {
  const { t } = useTranslation()

  return (
    <Layout pageTitle={t('Home')}>
      <section className='section'>
        <div className='container'>
          <div className='columns is-centered'>
            <div className='column is-10'>
              <div className='columns is-desktop is-variable is-1 mb-0'>
                <div className='column'>
                  <p className='title is-3'>Fusion Delight 美食坊</p>
                  <p className='subtitle is-5'>
                    {t('Dim sum') + ' • ' + t('Seafood') + ' • ' + t('Teahouse')}
                  </p>
                  <div className='columns is-variable is-1 mb-0'>
                    <div className='column'>
                      <div className='block'>
                        <p>{t('Weekdays')}</p>
                        <p>{t('Dim sum') + ': ' + t('Weekday Lunch Start') + ' - ' + t('Lunch End')}</p>
                        <p>{t('Dinner') + ': ' + t('Dinner Time')}</p>
                      </div>
                    </div>
                    <div className='column'>
                      <div className='block'>
                        <p>{t('Weekend')}</p>
                        <p>{t('Dim sum') + ': ' + t('Weekend Lunch Start') + ' - ' + t('Lunch End')}</p>
                        <p>{t('Dinner') + ': ' + t('Dinner Time')}</p>
                      </div>
                    </div>
                  </div>
                  <p>{t('Phone')}: 510-895-1818, 510-614-1816</p>
                </div>
                <div className='column is-flex is-justify-content-center' style={{gap: '1px'}}>
                  <StaticImage height={200} placeholder='blurred' alt='lobby' src='../images/index/lobby.png' />
                  <StaticImage height={200} placeholder='blurred' alt='liquor' src='../images/index/liquor.png' />
                </div>
              </div>
              <StaticImage placeholder='blurred' alt='pano' src='../images/index/pano.webp'/>
            </div>
          </div>
        </div>
      </section>
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