import { ReactNode } from 'react'

export default function ButtonLive({ children }: { children: ReactNode }) {
  return (
    <button className="border border-solid border-primary hover:bg-primary hover:bg-opacity-20 px-4 py-2 w-fit h-fit text-white font-bold">
      {children} !!
    </button>
  )
}
