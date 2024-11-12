'use client'

import React, { useState } from 'react'
import UnderLineButton from '../molecules/underLineButton'
import { useTranslation } from 'react-i18next'
import { IconX } from '@tabler/icons-react'
import useStore from '../../hooks/useStore'

const Header = () => {
  const { t } = useTranslation()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='relative w-full overflow-hidden bg-navBackground'>
      {/* Desktop Navigation */}
      <nav className='hidden h-[52px] sm:flex items-center justify-center uppercase' aria-label="Main navigation">
        <UnderLineButton classname='uppercase' selected>
          {t('header.menu')}
        </UnderLineButton>
        <UnderLineButton classname='uppercase'>
          {t('header.login')}
        </UnderLineButton>
        <UnderLineButton classname='uppercase'>
          {t('header.contact')}
        </UnderLineButton>
      </nav>

      {/* Mobile Navigation */}
      <div className='flex items-center justify-center h-[64px] sm:hidden font-medium'>
        <UnderLineButton>
          {t('header.menu')}
        </UnderLineButton>
        <button
          className='absolute z-30 p-2 right-4'
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? (
            <IconX size={16} color='white' />
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_12745_303)">
                <rect width="16" height="2" rx="1" fill="white" />
                <rect y="7" width="16" height="2" rx="1" fill="white" />
                <rect y="14" width="16" height="2" rx="1" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_12745_303">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>

          )}
        </button>
      </div>

      {/* Lateral Menu */}
      <nav
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile menu"
        className={`z-20 fixed top-0 right-0 h-full w-64 bg-burgerBrown transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} sm:hidden`}
      >
        <div className='flex flex-col items-center justify-center h-full space-y-6'>
          <UnderLineButton classname='uppercase' onClick={toggleMenu}>
            {t('header.menu')}
          </UnderLineButton>
          <UnderLineButton classname='uppercase' onClick={toggleMenu}>
            {t('header.login')}
          </UnderLineButton>
          <UnderLineButton classname='uppercase' onClick={toggleMenu}>
            {t('header.contact')}
          </UnderLineButton>
        </div>
      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className='fixed inset-0 z-10 bg-black bg-opacity-25 blur-md sm:hidden'
          onClick={toggleMenu}
          aria-hidden='true'
        ></div>
      )}
    </header>
  )
}

export default Header
