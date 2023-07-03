import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonLiveProps {
  children: ReactNode
  className?: string
}

export default function ButtonLive({ children, className }: ButtonLiveProps) {
  return (
    <button
      className={twMerge(
        'border border-solid border-primary hover:bg-primary hover:bg-opacity-20 px-4 py-2 w-fit h-fit text-white font-bold',
        className,
      )}
    >
      {children} !!
    </button>
  )
}
