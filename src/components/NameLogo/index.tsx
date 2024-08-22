import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NameLogo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo.png"
        className="h-4 mr-2"
        width={16}
        height={16}
        alt="Ikarosv logo"
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        Ikarosv
      </span>
    </Link>
  )
}
