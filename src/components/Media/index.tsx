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
      <a
        href="https://discord.com/invite/77wvu2Cm"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/icons/discord.svg"
          width={32}
          height={32}
          alt="discord icon"
        />
      </a>
      <a href="mailto:ikarovieiraa@gmail.com" target="_blank" rel="noreferrer">
        <Image src="/icons/email.svg" width={32} height={32} alt="email" />
      </a>
    </>
  )
}
