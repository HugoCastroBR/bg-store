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
      className='flex flex-col items-center justify-center w-full h-full'
    >
      <div
        className='flex  w-full   p-[22px] pl-6 bg-gray-50 h-16'
      >
        <Typography className='text-2xl font-medium text-tundoraGray ' >
          {t('cart.title')}
        </Typography>
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
            className='flex flex-col w-full px-4 py-2'
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