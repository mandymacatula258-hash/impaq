import React, { useState, useEffect } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Support', href: '#support' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')

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

  const handleNavClick = (label) => {
    setActiveLink(label)
    setMenuOpen(false)
  }

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <nav className="navbar__inner">

        <a href="#home" className="navbar__logo" aria-label="IMPAQ OPTICS Home">
          IMPAQ OPTICS
        </a>

        <ul className="navbar__links" role="menubar">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label} role="none">
              <a
                href={href}
                role="menuitem"
                className={`navbar__link${activeLink === label ? ' navbar__link--active' : ''}`}
                onClick={() => handleNavClick(label)}
              >
                {label}
                <span className="navbar__link-underline" />
              </a>
            </li>
          ))}
<li role="none">
  <a
    href="#signup"
    role="menuitem"
    className="navbar__signup"
    onClick={() => handleNavClick('Sign up')}
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
          {NAV_LINKS.map(({ label, href }) => (
<li key={label}>
  <a
    href={href}
    className={`navbar__mobile-link${activeLink === label ? ' navbar__mobile-link--active' : ''}`}
    onClick={() => handleNavClick(label)}
  >
    {label}
  </a>
</li>
          ))}
          <li>
            <a href="#signup" className="navbar__mobile-signup" onClick={() => handleNavClick('Sign up')}>
              Sign up
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}