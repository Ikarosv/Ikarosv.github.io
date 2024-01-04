/* eslint-disable no-undef */
import Home from '@/components/Home'
import { cookies } from 'next/headers'
import translations, { Lang } from '../../public/translations'
import Image from 'next/image'
import Title from '@/components/Title'
import Link from 'next/link'
import Card from '@/components/Card'

const url = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export default async function Homee() {
  const lang: Lang = (cookies().get('LANG')?.value as Lang) ?? 'pt'
  const githubProjects = await fetch(`${url}/api/github`).then<
    GithubRepository.PinnedItems[]
  >((res) => res.json())

  const { quote, projects, viewAll } = translations[lang]
  return (
    <main className="px-3 md:px-0">
      <Home />
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
      </figure>
      <span className="w-[5.6875rem] h-[5.6875rem] hidden border border-solid border-gray absolute top-[115vh] -right-2 md:block" />
      <section>
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
          {githubProjects.map((project) => (
            <Card key={project.id}>
              <Card.Image />
              <Card.Topics topics={project.repositoryTopics} />
              <Card.Details
                title={project.name}
                description={
                  project.description || "I don't have a description"
                }
                projectUrl={project.url}
                homepageUrl={project.homepageUrl}
              />
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}
