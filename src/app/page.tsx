/* eslint-disable no-undef */
import Hero from '@/components/Home'
import { cookies } from 'next/headers'
import translations, { Lang } from '../../public/translations'
import Image from 'next/image'
import Title from '@/components/Title'
import Link from 'next/link'
import Card from '@/components/Card'
import Retangle from '@/components/Retangle'
import DotGroup from '@/components/DotGroup'
import ButtonLive from '@/components/Buttons/ButtonLive'
import DisplayProjects from '@/components/DisplayProjects'

const url = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export default async function Homee() {
  const lang: Lang = (cookies().get('LANG')?.value as Lang) ?? 'pt'
  const githubProjects = await fetch(`${url}/api/github`).then<
    GithubRepository.PinnedItems[]
  >((res) => res.json())

  const {
    quote,
    projects,
    viewAll,
    skills,
    languages,
    databases,
    other,
    tools,
    style,
    aboutMe,
    aboutMeContent,
    readMore,
    contact,
    contactContent,
    messageMe,
  } = translations[lang]
  return (
    <main className="px-3 md:px-0">
      <Hero />
      <figure className="mt-28 mb-[8.56rem] border w-fit border-solid border-gray relative mx-auto -z-10 text-white">
        <Image
          src="/icons/quotes.svg"
          width={25.47}
          height={20.7}
          alt="Aspas"
          className="w-fit h-fit absolute px-2 py-1 -top-[0.875rem] left-[0.6875rem] bg-dark"
        />
        <blockquote className="text-2xl p-8 font-medium">{quote}</blockquote>
        <Image
          src="/icons/quotes.svg"
          width={25.47}
          height={20.7}
          alt="Aspas"
          className="w-fit h-fit absolute px-2 py-1 right-[1.033rem] -bottom-[0.8565rem] bg-dark z-10"
        />
        <figcaption className="text-2xl absolute -right-px font-normal border border-solid border-gray p-4">
          - Dr. Who
        </figcaption>
        <Retangle position="top-0 -right-56" />
      </figure>
      {/* <span className="w-[5.6875rem] h-[5.6875rem] hidden border border-solid border-gray absolute top-[115vh] -right-2 md:block" /> */}
      <section className="relative">
        <Retangle
          className="w-[9.6875rem] h-[9.6875rem]"
          position="top-[16.875rem] -right-56"
        />
        <div className="flex max-ssm:flex-wrap justify-between items-center w-full">
          <Title lineWidth="max-w-[31rem]">{projects}</Title>
          <Link
            href="/projects"
            className="text-base p-1 font-medium text-white cursor-pointer hover:text-gray min-w-fit ml-4"
          >
            {viewAll}
          </Link>
        </div>
        <div className="flex flex-wrap gap-4 mt-12 justify-center">
          <DisplayProjects projects={githubProjects} />
        </div>
      </section>
      <section className="mt-[6.625rem]">
        <div className="flex max-ssm:flex-wrap justify-between items-center w-full">
          <Title lineWidth="max-w-[15rem]">{skills}</Title>
        </div>

        <div className="flex flex-col justify-center md:justify-between md:flex-row">
          <div className="w-full md:w-[21.8125rem] h-[17.625rem] relative mt-3">
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
          <div className="flex flex-wrap gap-4 mt-12 justify-center max-w-xl">
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
          <Title lineWidth="max-w-[20rem]">{aboutMe}</Title>
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-2 items-center justify-between">
          <div className="flex flex-col gap-7">
            <p
              className="text-base font-normal max-w-[31rem]"
              dangerouslySetInnerHTML={{ __html: aboutMeContent }}
            ></p>
            <ButtonLive>
              <Link href="/about">{readMore}</Link>
            </ButtonLive>
          </div>
          <Image
            src="/me2.png"
            alt="Ikaro"
            width="343"
            height="508"
            className="border-b border-b-primary border-solid"
          />
        </div>
      </section>

      <section className="mt-[6.625rem]">
        <div className="flex max-ssm:flex-wrap justify-between items-center w-full">
          <Title lineWidth="max-w-[8rem]">{contact}</Title>
        </div>
        <div className="flex flex-wrap md:flex-nowrap mt-10 gap-2 items-center justify-between">
          <p className="flex-shrink">{contactContent}</p>
          <div className="flex flex-col p-4 border border-gray border-solid w-max">
            <h5 className="whitespace-nowrap font-semibold text-white">
              {messageMe}
            </h5>
            <div className="flex items-center w-max">
              <Image
                src="/icons/email.svg"
                width={32}
                height={32}
                alt="email"
              />
              <a
                href="mailto:ikarovieiraa@gmail.com"
                className="text-gray inline-block"
              >
                ikarovieiraa@gmail.com
              </a>
            </div>
            <div className="flex items-center w-max">
              <Image
                src="/icons/discord.svg"
                width={32}
                height={32}
                alt="email"
              />
              <a
                href="mailto:ikarovieiraa@gmail.com"
                className="text-gray inline-block"
              >
                ikarovieiraa@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
