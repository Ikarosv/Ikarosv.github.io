'use client'
import React, { FormEventHandler, useRef } from 'react'
import Title from '../Title'
import translations from '../../../public/translations'
import ButtonLive from '../Buttons/ButtonLive'
import { sendForm } from '@emailjs/browser'

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ''

export default function SendEmail({ lang }: { lang: 'pt' | 'en' }) {
  const form = useRef<HTMLFormElement | null>(null)
  const { name, email, title, message, send } = translations[lang]
  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    if (!form.current) return

    sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
      publicKey: USER_ID,
    })
      .then(() => {
        alert('Email sent')
        if (!form.current) return
        form.current.reset()
      })
      .catch(() => {
        alert('Failed to send email')
      })
  }
  return (
    <form
      ref={form}
      className="mt-8 flex flex-col gap-4 max-w-[505px]"
      onSubmit={onSubmit}
    >
      <Title lineWidth="max-w-[10rem]">Email-me</Title>
      <div className="flex gap-4">
        <input
          type="text"
          placeholder={name}
          name="from_name"
          className="p-2 w-full border border-gray border-solid bg-transparent"
          required
        />
        <input
          type="email"
          placeholder={email}
          name="reply_to"
          className="p-2 w-full border border-gray border-solid bg-transparent"
          required
        />
      </div>
      <input
        type="text"
        placeholder={title}
        name="title"
        className="p-2 w-full border border-gray border-solid bg-transparent"
        required
      />
      <textarea
        placeholder={message}
        name="message"
        className="p-2 w-full border border-gray border-solid bg-transparent"
        required
      ></textarea>
      <ButtonLive className="max-md:hidden">{send}</ButtonLive>
    </form>
  )
}
