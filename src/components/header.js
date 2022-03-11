import React from 'react'
import { Link } from 'gatsby'

import { StaticImage } from 'gatsby-plugin-image'

const Header = () => {
  return (
    <header className='container mt-6'>
      <div className='columns'>
        <div className='column is-4'>
          <Link to='/'>
            <StaticImage height={128} alt='logo' src='../images/logo.png' />
          </Link>
        </div>
        <div className='column is-2 is-offset-6'>
          <button>ENGLISH</button>
          {' / '}
          <button>中文</button>
        </div>
      </div>
    </header>
  )
}

export default Header