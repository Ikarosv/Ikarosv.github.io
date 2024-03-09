import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type SpanClassName = HTMLAttributes<HTMLSpanElement>['className']

interface RetangleProps {
  className?: SpanClassName
  position: SpanClassName
}

export default function Retangle({ className, position }: RetangleProps) {
  // top-[115vh] -right-2
  return (
    <span
      className={twMerge(
        'w-[5.6875rem] h-[5.6875rem] hidden border border-solid border-gray absolute md:block',
        className,
        position,
      )}
    />
  )
}
