import React from 'react'
import { twMerge } from 'tailwind-merge'
import CardImage from './CardImage'
import CardTopics from './CardTopics'
import CardDetails from './CardDetails'

export interface CardProps {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={twMerge(
        'border border-solid border-gray max-w-xs card h-full',
        className,
      )}
    >
      {children}
    </div>
  )
}

Card.Image = CardImage

Card.Topics = CardTopics

Card.Details = CardDetails
