import React from 'react'

const CircleImage = ({ img }: { img: string }) => {
  return (
    <div
      className='flex-shrink-0 w-[82px] h-[82px] rounded-full flex items-center justify-center border-2 border-primary p-1 overflow-hidden'
    >
      <div
        className='flex items-center justify-center w-full h-full overflow-hidden bg-gray-200 rounded-full'
      > 
        <img
          src={img}
          alt="Imagem do item"
          className='object-cover w-full h-full'
          loading="lazy"
        />
        </div>
    </div>
  )
}

export default CircleImage