import React from 'react'
import Card from '../Card'
/* import captureScreenshot from '@/utils/screenshot' */

interface DisplayProjectsProps {
  // eslint-disable-next-line no-undef
  projects: GithubRepository.All[]
}

export default async function DisplayProjects({
  projects,
}: DisplayProjectsProps) {
  /* const projectsWithHomepageUrl = projects.filter(
    (project) => project.homepageUrl,
  )
  const imagesPaths = await Promise.all(
    projectsWithHomepageUrl.map(async (project) =>
      captureScreenshot(
        project.homepageUrl as string,
        `public/pages/${project.name}.png`,
      ),
    ),
  ) */

  return projects.map((project) => (
    <Card key={project.id}>
      <Card.Image
      /* imageUrl={
          project.homepageUrl
            ? await captureScreenshot(project.homepageUrl, project.name + '.png')
            : null
        } */
      />
      {!!project.repositoryTopics.length && (
        <Card.Topics topics={project.repositoryTopics} />
      )}
      <Card.Details
        title={project.name}
        description={project.description || "I don't have a description"}
        projectUrl={project.url}
        homepageUrl={project.homepageUrl}
      />
    </Card>
  ))
}
