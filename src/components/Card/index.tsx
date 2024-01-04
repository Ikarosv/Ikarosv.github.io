import React from 'react'
import { twMerge } from 'tailwind-merge'
import CardImage from './CardImage'

export interface CardProps {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={twMerge('border border-solid border-gray', className)}>
      {children}
    </div>
  )
}

Card.Image = CardImage
