import React from 'react'

interface ITypographyProps {
  children: React.ReactNode
  className?: string
}
const Typography = (props: ITypographyProps) => {
  return (
    <span
      className='font-roboto text-codGray'
      {...props}
    >
      {props.children}
    </span>
  )
}

export default Typography