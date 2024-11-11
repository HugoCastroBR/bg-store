import React from 'react'
import { useTranslation } from 'react-i18next'
import Typography from '../atoms/typography'

const CartContainer = () => {
  const { t } = useTranslation()

  return (
    <aside
      className='flex flex-col items-center justify-center w-full h-full'
    >
      <div
        className='flex  w-full   p-[22px] pl-6 bg-gray-50 h-16'
      >
        <Typography className='text-2xl font-medium text-tundoraGray ' >
          {t('cart.title')}
        </Typography>
      </div>
      <div
        className='flex  w-full   p-[22px] pl-6 h-16 '
      >
        <Typography className='text-base font-normal text-tundoraGray' >
          {t('cart.empty')}
        </Typography>
      </div>
    </aside>
  )
}

export default CartContainer