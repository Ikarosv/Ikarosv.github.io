import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonDemoProps {
  children: ReactNode
  className?: string
}

export default function ButtonDemo({ children, className }: ButtonDemoProps) {
  return (
    <button
      className={twMerge(
        'border border-solid border-gray hover:bg-gray hover:bg-opacity-20 px-4 py-2 w-fit h-fit text-gray font-medium',
        className,
      )}
    >
      {children}
    </button>
  )
}
