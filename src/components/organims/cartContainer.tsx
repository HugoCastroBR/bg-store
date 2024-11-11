import React from 'react'
import { useTranslation } from 'react-i18next'
import Typography from '../atoms/typography'
import CartItem from '../molecules/cartItem'

const CartContainer = () => {
  const { t } = useTranslation()
  const empty = false

  return (
    <aside
      id="cart-section" aria-label="Carrinho de compras"
      className='flex flex-col items-center w-full h-full'
    >
      <div
        className='flex w-full  p-[22px] pl-6 bg-gray-50 h-16 justify-between items-center md:justify-start md:items-start md:border-b-0 border-b-[1px] border-b-[#DADADA]'
      >
        <Typography className='text-2xl font-medium text-tundoraGray ' >
          {t('cart.title')}
        </Typography>
        <svg 
        width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"
        className='cursor-pointer md:hidden block'
        >
          <path fillRule="evenodd" clipRule="evenodd" d="M13.6894 0.321198C13.2753 -0.0929086 12.6064 -0.0929086 12.1923 0.321198L7 5.50284L1.80774 0.31058C1.39363 -0.103527 0.724687 -0.103527 0.31058 0.31058C-0.103527 0.724687 -0.103527 1.39363 0.31058 1.80774L5.50284 7L0.31058 12.1923C-0.103527 12.6064 -0.103527 13.2753 0.31058 13.6894C0.724687 14.1035 1.39363 14.1035 1.80774 13.6894L7 8.49716L12.1923 13.6894C12.6064 14.1035 13.2753 14.1035 13.6894 13.6894C14.1035 13.2753 14.1035 12.6064 13.6894 12.1923L8.49716 7L13.6894 1.80774C14.0929 1.40425 14.0929 0.724687 13.6894 0.321198Z" fill="#4F372F" />
        </svg>

      </div>
      {empty
        ?
        <div
          className='flex  w-full   p-[22px] pl-6 h-16 '
        >
          <Typography className='text-base font-normal text-tundoraGray' >
            {t('cart.empty')}
          </Typography>
        </div>
        :
        <>
          <div
            className='flex flex-col w-full px-4 py-2 bg-white'
          >
            <CartItem />
            <CartItem />
            <CartItem />

          </div>
          <div className=' w-full flex justify-between h-[60px] border-t-[#DADADA] border-t-[1px]  bg-gray-50 items-center p-4'>
            <Typography className="text-base font-normal">{t('cart.subtotal')}</Typography>
            <Typography className="text-base font-medium">R$ 13,00</Typography>
          </div>
          <div className=' w-full flex justify-between h-[60px] border-t-[#DADADA] border-t-[1px]  bg-gray-50 items-center p-4'>
            <Typography className="text-2xl font-light">{t('cart.total')}</Typography>
            <Typography className="text-2xl font-normal">R$ 13,00</Typography>
          </div>
        </>
      }
    </aside>

  )
}

export default CartContainer