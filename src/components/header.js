import React from 'react'
import { Link } from 'gatsby-plugin-react-i18next'

import { StaticImage } from 'gatsby-plugin-image'
import { useI18next } from 'gatsby-plugin-react-i18next'

const Header = () => {
  const { originalPath } = useI18next();

  return (
    <header className='container pt-5'>
      <div className='columns'>
        <div className='column is-4'>
          <Link to='/'>
            <StaticImage placeholder='blurred' alt='logo' src='../images/logo.png' />
          </Link>
        </div>
        <div className='column is-3 is-offset-5 has-text-centered'>
          <Link className='lang is-size-5' to={originalPath} language='en'>
            English
          </Link>
          {'  /  '}
          <Link className='lang is-size-5' to={originalPath} language='zh'>
            中文
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header