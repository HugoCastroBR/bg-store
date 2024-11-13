import React from 'react'
import { useTranslation } from 'react-i18next';

interface IBannerProps {
  image: string;
  label: string;
}
const Banner = (props: IBannerProps) => {

  const {t} = useTranslation()

  return (
    <div
      className='w-full min-w-[1440px] h-[150px]'
      aria-label={t('banner.aria-label')}
    > 
      <div className='flex items-center justify-center w-full h-full' >
        <img
          className='object-fill w-full h-full'
          src={props.image}
          aria-label={props.label}
        />
      </div>
    </div>
  )
}

export default Banner