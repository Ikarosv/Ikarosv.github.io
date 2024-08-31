import React from 'react'
import translations from '../../../public/translations'
import Title from '@/components/Title'
import DisplayProjects from '@/components/DisplayProjects'
import capitalizeFirstLetter from '@/utils/capitalizeFirstLetter'
import getLanguage from '@/utils/getLanguage'
import { Metadata } from 'next'
import Retangle from '@/components/Retangle'
import DotGroup from '@/components/DotGroup'

export async function generateMetadata(): Promise<Metadata> {
  const lang = getLanguage()
  const { projects } = translations[lang]

  return {
    title: `Ikaro Vieira | ${capitalizeFirstLetter(projects)}`,
  }
}
const url = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export default async function Project() {
  const lang = getLanguage()
  const { projects, listOfMyProjects, pinneds, allProjects } =
    translations[lang]
  const githubProjects = await fetch(`${url}/api/github/all`).then<
    // eslint-disable-next-line no-undef
    GithubRepository.All[]
  >((res) => res.json())
  const pinnedProjects = await fetch(`${url}/api/github`).then<
    // eslint-disable-next-line no-undef
    GithubRepository.All[]
  >((res) => res.json())

  return (
    <section className="px-3 md:px-0 relative">
      <h1 className="text-white font-bold text-[2rem]">
        <span className="text-primary">/</span>
        {projects}
      </h1>
      <p>{listOfMyProjects}</p>
      <Retangle
        className="w-[5rem] h-[5rem]"
        position="top-[16.875rem] -left-56"
      />
      <div className="mt-4 relative">
        <Retangle
          className="w-[9.6875rem] h-[9.6875rem]"
          position="top-[16.875rem] -right-56"
        />
        <div className="grid grid-rows-5 grid-cols-5 w-[3.9375rem] gap-3 absolute top-96 -left-44">
          <DotGroup />
        </div>
        <Title lineWidth="max-w-[15rem]">{pinneds}</Title>
        <section className="flex flex-wrap gap-4 mt-12 justify-center">
          <DisplayProjects projects={pinnedProjects} />
        </section>
      </div>
      <div className="mt-4 relative">
        <Retangle
          className="w-[9.6875rem] h-[9.6875rem]"
          position="top-[16.875rem] -right-56"
        />
        <Retangle
          className="w-[9.6875rem] h-[9.6875rem]"
          position="top-1/3 -left-56"
        />
        <Retangle
          className="w-[9.6875rem] h-[9.6875rem]"
          position="bottom-1/4 -right-56"
        />
        <div className="grid grid-rows-5 grid-cols-5 w-[3.9375rem] gap-3 absolute top-96 -left-44">
          <DotGroup />
        </div>
        <div className="grid grid-rows-5 grid-cols-5 w-[3.9375rem] gap-3 absolute top-1/3 -right-40">
          <DotGroup />
        </div>
        <div className="grid grid-rows-5 grid-cols-5 w-[3.9375rem] gap-3 absolute bottom-0 -left-36">
          <DotGroup />
        </div>
        <div className="grid grid-rows-5 grid-cols-5 w-[3.9375rem] gap-3 absolute bottom-1/2 -left-36">
          <DotGroup />
        </div>
        <Title lineWidth="max-w-[8rem]">{allProjects}</Title>
        <section className="flex flex-wrap gap-4 mt-12 justify-center">
          <DisplayProjects projects={githubProjects} showImage={false} />
        </section>
      </div>
    </section>
  )
}
