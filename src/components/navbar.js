import React, { useState } from 'react'
import { Link, useTranslation } from 'gatsby-plugin-react-i18next'

const Nav = () => {
  const [active, setActive] = useState(false)
  const { t } = useTranslation()

  return (
    <nav className='navbar is-transparent' role='navigation' aria-label='main navigation'>
      <div className='container'>
        <button onClick={() => {setActive(!active)}}
          className={`navbar-burger ${active ? 'is-active' : ''}`}
          aria-label='menu'
          aria-expanded='false'
          data-target='burger'>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </button>

        <div id='burger' className={`navbar-menu ${active ? 'is-active' : ''}`}>
          <div className='navbar-start' style={{flexGrow: 1, justifyContent: 'center'}}>
            <Link className='navbar-item mx-6 is-size-5' to="/about" activeClassName='active'>
              {t('about')}
            </Link>
            <div className='navbar-item mx-6 is-size-5 has-dropdown is-hoverable'>
              <Link className='navbar-link is-arrowless' to="/menu" activeClassName='active'>
                Menu
              </Link>
              <div className='navbar-dropdown'>
                <Link className='navbar-item' to="/menu/lunch" activeClassName='active'>
                  Lunch / Dimsum
                </Link>
                <Link className='navbar-item' to="/menu/dinner" activeClassName='active'>
                  Dinner
                </Link>
              </div>
            </div>
            <Link className='navbar-item mx-6 is-size-5' to="/location" activeClassName='active'>
              Location
            </Link>
            <Link className='navbar-item mx-6 is-size-5' to="/contact" activeClassName='active'>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav