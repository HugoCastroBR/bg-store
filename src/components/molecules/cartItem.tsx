import React from 'react'
import Typography from '../atoms/typography'

const CartItem = () => {
  return (
    <div className='w-full flex justify-between items-center'>
      <div className=' w-full flex min-h-16 min-w-[78px] flex-col items-start'>
        <div className=' w-full flex justify-between items-center'>
          <Typography className="text-base font-normal">NOME</Typography>
          <Typography className="text-base font-normal">R$ 13,00</Typography>
        </div>
        <Typography className="text-base font-normal text-[#5F5F5F]">Description</Typography>

        <div className="flex items-center justify-between min-w-[78px] w-min h-5 mt-2 ml-2">
          <button
            className="w-5 h-5 rounded-full  bg-burgerBrown flex items-center justify-center"
          >
            <div className="bg-white w-3 h-[3px] rounded"></div>
          </button>
          <span className="text-base font-bold">1</span>
          <button
            className="w-5 h-5 rounded-full  bg-burgerBrown flex items-center justify-center"
          >
            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.8891 7.14276L7.14292 7.14286V10.8541C7.14292 11.4826 6.62864 11.9969 6.00007 11.9969C5.3715 11.9969 4.85721 11.4826 4.85721 10.8541V7.14286H1.1453C0.516727 7.14286 0.00244141 6.62858 0.00244141 6C0.00244141 5.37143 0.516727 4.85715 1.1453 4.85715H4.85721V1.15558C4.85721 0.527012 5.3715 0.0127258 6.00007 0.0127258C6.62864 0.0127258 7.14292 0.527012 7.14292 1.15558V4.85715L10.8891 4.85705C11.5177 4.85705 12.032 5.37133 12.032 5.9999C12.032 6.62848 11.5177 7.14276 10.8891 7.14276Z" fill="white" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem