import React from 'react'
import Typography from '../atoms/typography'
import { useTranslation } from 'react-i18next'

const UnderLineButton = () => {
  const { t } = useTranslation() 
  
  return (
    <button
      className='text-white h-full border-b-[5px] border-white w-[232px]'>
      <Typography
        className='text-center'
      >
        {t('header.menu')}
      </Typography>
    </button>
  )
}

export default UnderLineButton