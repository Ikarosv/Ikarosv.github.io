import React from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

export interface TitleProps {
  children: React.ReactNode
  lineWidth?: string
  className?: ClassNameValue
}

export default function Title({ children, lineWidth, className }: TitleProps) {
  return (
    <div className="flex items-center gap-4 w-full flex-shrink">
      <h2 className={twMerge('text-[2rem] text-white font-medium', className)}>
        <span className="text-primary">#</span>
        {children}
      </h2>
      <div className={twMerge('h-px bg-primary w-full', lineWidth)} />
    </div>
  )
}
