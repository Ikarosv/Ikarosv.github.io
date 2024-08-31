import getLanguage from '@/utils/getLanguage'
import React from 'react'
import translations from '../../../public/translations'
import Image from 'next/image'
import DotGroup from '@/components/DotGroup'
import Card from '@/components/Card'
import Retangle from '@/components/Retangle'
import Title from '@/components/Title'
import capitalizeFirstLetter from '@/utils/capitalizeFirstLetter'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const lang = getLanguage()
  const { aboutMe } = translations[lang]

  return {
    title: `Ikaro Vieira | ${capitalizeFirstLetter(aboutMe)}`,
  }
}

export default function About() {
  const lang = getLanguage()
  const {
    aboutMe,
    whoAmI,
    aboutMeContent,
    skills,
    languages,
    databases,
    other,
    tools,
    style,
    myFunFacts,
    iLikeWinterMoreThanSummer,
    iHaveADogNamedPrincesa,
    iAmVeryPerfectionist,
    myFavoriteSerieIsGreysAnatomy,
  } = translations[lang]
  return (
    <section className="px-3 md:px-0">
      <h1 className="text-white font-bold text-[2rem]">
        <span className="text-primary">/</span>
        {aboutMe}
      </h1>
      <p>{whoAmI}</p>

      <div className="mt-4 ">
        <section className="flex flex-wrap md:flex-nowrap gap-2 items-center md:justify-between justify-center">
          <div className="flex flex-col gap-7">
            <p
              className="text-base font-normal max-w-[31rem]"
              dangerouslySetInnerHTML={{ __html: aboutMeContent }}
            ></p>
          </div>
          <div className="relative">
            <div className="grid grid-rows-5 grid-cols-5 w-[5.25rem] gap-4 absolute bottom-5 right-2">
              <DotGroup height={4} />
            </div>
            <div className="grid grid-rows-5 grid-cols-5 w-[5.25rem] gap-4 absolute top-10 left-1">
              <DotGroup />
            </div>
            <Image
              src="/meTshirtWhite.png"
              alt="Ikaro"
              width="343"
              height="508"
              className="border-b border-b-primary border-solid"
            />
          </div>
        </section>
        <section className="mt-[6.625rem]">
          <div className="flex max-ssm:flex-wrap justify-between items-center w-full">
            <Title lineWidth="max-w-[15rem]">{skills}</Title>
          </div>

          <div className="flex flex-col justify-center md:justify-between md:flex-row flex-wrap">
            <div className="w-full max-w-[33rem] md:w-[21.8125rem] h-[17.625rem] relative mt-3">
              <div className="grid grid-rows-5 grid-cols-5 w-[3.9375rem] gap-3 absolute top-[2.38rem]">
                <DotGroup />
              </div>
              <div className="grid grid-rows-5 grid-cols-5 w-[3.9375rem] gap-3 absolute top-[8.9375rem] left-[11.0625rem]">
                <DotGroup />
              </div>
              <Retangle
                position="right-9"
                className="w-[5.375rem] h-[5.375rem] block"
              />
              <Retangle
                position="bottom-[2.3125rem] right-0"
                className="w-[3.25rem] h-[3.25rem] block"
              />
              <Image
                src="/IOutlined.png"
                alt="I maiúsculo"
                width="90"
                height="90"
                className="absolute bottom-0 left-[0.9375rem]"
              />
            </div>
            <div className="flex flex-wrap gap-4 mt-12 justify-center md:max-w-xl w-full">
              <Card className="h-fit w-full md:max-w-[11.125rem]">
                <Card.Details
                  title={languages}
                  description="JavaScript TypeScript Python Java Kotlin PHP"
                  className="card separate-children p-0 gap-0"
                />
              </Card>
              <Card className="h-fit w-full md:max-w-[11.125rem]">
                <Card.Details
                  title={databases}
                  description="MySQL PostgreSQL MongoDB"
                  className="card separate-children p-0 gap-0"
                />
              </Card>
              <Card className="h-fit w-full md:max-w-[11.125rem]">
                <Card.Details
                  title={tools}
                  description="VsCode Git Docker Postman Insomnia Figma Linux Font-Awesome Github"
                  className="card separate-children p-0 gap-0"
                />
              </Card>
              <Card className="h-fit w-full md:max-w-[11.125rem]">
                <Card.Details
                  title={other}
                  description="HTML CSS SCSS REST Scrum Kanban TDD"
                  className="card separate-children p-0 gap-0"
                />
              </Card>
              <Card className="h-fit w-full md:max-w-[11.125rem]">
                <Card.Details
                  title="Frameworks"
                  description="React Next.js Node.js Express.js Fastify Nest.js Redux ContextAPI Jotai Zod Jest Mocha Chai Sinon Prisma Sequelize Medusa"
                  className="card separate-children p-0 gap-0"
                />
              </Card>
              <Card className="h-fit w-full md:max-w-[11.125rem]">
                <Card.Details
                  title={style}
                  description="TailwindCSS Bootstrap MaterializeCSS Styled-Components Stitches Emotion Ant-Design ShadcnUi"
                  className="card separate-children p-0 gap-0"
                />
              </Card>
            </div>
          </div>
        </section>
        <section className="mt-[6.625rem]">
          <div className="flex max-ssm:flex-wrap justify-between items-center w-full">
            <Title lineWidth="max-w-[10rem]" className="break-words w-full">
              {myFunFacts}
            </Title>
          </div>
          <div className="flex justify-center flex-wrap md:flex-nowrap gap-4">
            <div className="flex flex-wrap gap-4 leading-4 px-2 h-fit">
              <Card className="p-2 md:whitespace-nowrap max-w-fit h-fit">
                {iLikeWinterMoreThanSummer}
              </Card>
              <Card className="p-2 md:whitespace-nowrap max-w-fit h-fit">
                {iHaveADogNamedPrincesa}
              </Card>
              <Card className="p-2 md:whitespace-nowrap max-w-fit h-fit">
                {iAmVeryPerfectionist}
              </Card>
              <Card className="p-2 md:whitespace-nowrap max-w-fit h-fit">
                {myFavoriteSerieIsGreysAnatomy}
              </Card>
            </div>
            <div className="relative w-44 h-40 mt-4 flex-shrink-0">
              <div className="grid grid-rows-4 grid-cols-4 w-[5.25rem] gap-4 absolute top-0 left-0">
                <DotGroup height={4} width={4} />
              </div>
              <Image
                src="/IOutlined.png"
                alt="I maiúsculo"
                width="158"
                height="243"
                className="-z-10 absolute bottom-0 right-0 w-auto h-[70%]"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
