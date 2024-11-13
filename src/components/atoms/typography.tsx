import React from 'react'

interface ITypographyProps {
  children: React.ReactNode
  className?: string
  currency?: boolean
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