import Image from 'next/image'
import React from 'react'

export default function Media() {
  return (
    <>
      <a href="https://github.com/Ikarosv" target="_blank" rel="noreferrer">
        <Image
          src="/icons/github.svg"
          alt="Imagem do Github"
          width="32"
          height="32"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/ikaro-vieira"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/icons/linkedin.svg"
          alt="Imagem do Linkedin"
          width="32"
          height="32"
        />
      </a>
    </>
  )
}
