import React from 'react'
import translations, { Lang } from '../../../public/translations'
import { cookies } from 'next/headers'
import Title from '@/components/Title'
import DisplayProjects from '@/components/DisplayProjects'

const url = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export default async function Project() {
  const lang: Lang = (cookies().get('LANG')?.value as Lang) ?? 'pt'
  const githubProjects = await fetch(`${url}/api/github/all`).then<
    // eslint-disable-next-line no-undef
    GithubRepository.All[]
  >((res) => res.json())
  const pinnedProjects = await fetch(`${url}/api/github`).then<
    // eslint-disable-next-line no-undef
    GithubRepository.All[]
  >((res) => res.json())

  const { projects, listOfMyProjects, pinneds, allProjects } =
    translations[lang]
  return (
    <section>
      <h1 className="text-white font-bold text-[2rem]">
        <span className="text-primary">/</span>
        {projects}
      </h1>
      <p>{listOfMyProjects}</p>

      <div className="mt-4">
        <Title lineWidth="max-w-[15rem]">{pinneds}</Title>
        <section className="flex flex-wrap gap-4 mt-12 justify-center">
          <DisplayProjects projects={pinnedProjects} />
        </section>
      </div>
      <div className="mt-4">
        <Title lineWidth="max-w-[8rem]">{allProjects}</Title>
        <section className="flex flex-wrap gap-4 mt-12 justify-center">
          <DisplayProjects projects={githubProjects} />
        </section>
      </div>
    </section>
  )
}
