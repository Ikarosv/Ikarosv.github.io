'use client'

import { Dropdown } from 'flowbite-react'

export default function DropdownHeader({ lang }: { lang: string }) {
  return (
    <Dropdown label={lang}>
      <Dropdown.Item>en</Dropdown.Item>
      <Dropdown.Item>pt</Dropdown.Item>
    </Dropdown>
  )
}
