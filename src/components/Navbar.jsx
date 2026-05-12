import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Support', to: '#support' },
  { label: 'Product', to: '#product' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isActive = (to) => {
    if (to === '/') return location.pathname === '/'
    return location.pathname === to
  }

  const renderLink = ({ label, to }) => {
    const isPage = to.startsWith('/')
    if (isPage) {
      return (
        <Link
          to={to}
          className={`navbar__link${isActive(to) ? ' navbar__link--active' : ''}`}
          onClick={() => setMenuOpen(false)}
        >
          {label}
          <span className="navbar__link-underline" />
        </Link>
      )
    }
    return (
      <a
        href={to}
        className="navbar__link"
        onClick={() => setMenuOpen(false)}
      >
        {label}
        <span className="navbar__link-underline" />
      </a>
    )
  }

  const renderMobileLink = ({ label, to }) => {
    const isPage = to.startsWith('/')
    if (isPage) {
      return (
        <Link
          to={to}
          className={`navbar__mobile-link${isActive(to) ? ' navbar__mobile-link--active' : ''}`}
          onClick={() => setMenuOpen(false)}
        >
          {label}
        </Link>
      )
    }
    return (
      <a
        href={to}
        className="navbar__mobile-link"
        onClick={() => setMenuOpen(false)}
      >
        {label}
      </a>
    )
  }

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <nav className="navbar__inner">

        <Link to="/" className="navbar__logo" aria-label="IMPAQ OPTICS Home">
          IMPAQ OPTICS
        </Link>

        <ul className="navbar__links" role="menubar">
          {NAV_LINKS.map((link) => (
            <li key={link.label} role="none">
              {renderLink(link)}
            </li>
          ))}
          <li role="none">
            <a
              href="#signup"
              role="menuitem"
              className="navbar__signup"
            >
              Sign up
            </a>
          </li>
        </ul>

        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className="navbar__hamburger-bar" />
          <span className="navbar__hamburger-bar" />
          <span className="navbar__hamburger-bar" />
        </button>
      </nav>

      <div className={`navbar__mobile-menu${menuOpen ? ' navbar__mobile-menu--open' : ''}`}>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              {renderMobileLink(link)}
            </li>
          ))}
          <li>
            <a href="#signup" className="navbar__mobile-signup" onClick={() => setMenuOpen(false)}>
              Sign up
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}