import React from 'react'
import useStore from '../../hooks/useStore'

interface ITypographyProps {
  children: React.ReactNode
  className?: string
  currency?: boolean
}

const Typography = ({ children, className, currency }: ITypographyProps) => {
  const { states } = useStore()

  if (currency) {
    return (
      <span className={`font-roboto text-codGray ${className || ''}`}>
        {states.restaurant.currency}{Number(children).toFixed(2)}
      </span>
    )
  }

  return (
    <span className={`font-roboto text-codGray ${className || ''}`}>
      {children}
    </span>
  )
}

export default Typography
