import React from 'react'
import Typography from '../atoms/typography'

interface IUnderLineButtonProps {
  children: React.ReactNode
  selected?: boolean
  classname?: string
  onClick?: () => void
}

const UnderLineButton = (props: IUnderLineButtonProps) => {

  return (
    <button
      onClick={props.onClick}
      className={
        `text-white h-full  border-white w-[232px]  
        ${props.selected ? 'border-b-[5px]' : 'border-b-0'}
        ${props.classname}
        `
      }>
      <Typography
        className='text-center'
      >
        {props.children}
      </Typography>
    </button>
  )
}

export default UnderLineButton