import React from 'react'
import { Link } from 'gatsby-plugin-react-i18next'

import { StaticImage } from 'gatsby-plugin-image'
import { useI18next } from 'gatsby-plugin-react-i18next'

const Header = () => {
  const { changeLanguage } = useI18next();

  return (
    <header className='container mt-6'>
      <div className='columns'>
        <div className='column is-4'>
          <Link to='/'>
            <StaticImage height={128} alt='logo' src='../images/logo.png' />
          </Link>
        </div>
        <div className='column is-2 is-offset-6'>
          <button
            onClick={(e) => {
              e.preventDefault()
              changeLanguage('en')
            }}
          >ENGLISH</button>
          {' / '}
          <button
            onClick={(e) => {
              e.preventDefault()
              changeLanguage('zh')
            }}
          >中文</button>
        </div>
      </div>
    </header>
  )
}

export default Header