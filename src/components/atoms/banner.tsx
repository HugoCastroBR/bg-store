import React, { useEffect } from 'react'
import useStore from '../../hooks/useStore'

interface IBannerProps {
  image: string;
  label: string;
}
const Banner = (props: IBannerProps) => {

  return (
    <div
      className='w-full min-w-[1440px] bg-banner h-[150px]'
      aria-label="Banner com título principal"
    > 
      <div className='flex items-center justify-center h-full'>
        <h1 className='text-4xl font-bold text-white' role="heading">
          
        </h1>
      </div>
    </div>
  )
}

export default Banner