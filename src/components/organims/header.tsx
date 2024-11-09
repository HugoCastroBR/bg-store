'use client'

import React, { useState } from 'react'
import UnderLineButton from '../molecules/underLineButton'
import { useTranslation } from 'react-i18next'
import { IconMenu2, IconX } from '@tabler/icons-react'

const Header = () => {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='relative h-full overflow-hidden bg-burgerBrown'>
      <div className='items-center justify-center hidden h-[52px] sm:flex uppercase'>
        <UnderLineButton classname='uppercase' selected>
          {t('header.menu')}
        </UnderLineButton>
        <UnderLineButton classname='uppercase'>
          {t('header.login')}
        </UnderLineButton>
        <UnderLineButton classname='uppercase'>
          {t('header.contact')}
        </UnderLineButton>
      </div>
      <div className='flex items-center justify-center h-[64px] sm:hidden font-medium'>
        <UnderLineButton>
          {t('header.menu')}
        </UnderLineButton>
        <button
          className='absolute z-30 p-2 right-4'
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? (
            <IconX size={20} color='white' />
          ) : (
            <IconMenu2 size={20} color='white' />
          )}
        </button>
      </div>

      {/* Lateral Menu */}
      <div
        className={`z-20 fixed top-0 right-0 h-full w-64 bg-burgerBrown transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } sm:hidden`}
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
      </div>

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