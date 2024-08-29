import axios from 'axios'
import { NextResponse } from 'next/server'

const PERSONAL_TOKEN = process.env.GITHUB_PERSONAL_TOKEN || ''

interface GithubResponse {
  data: {
    user: {
      repositories: {
        nodes: {
          id: string
          name: string
          description: string
          homepageUrl: string | null
          url: string
          repositoryTopics: {
            nodes: {
              topic: {
                name: string
              }
            }[]
          }
        }[]
      }
    }
  }
}

export const GET = async () => {
  try {
    const response = await axios.post<GithubResponse>(
      'https://api.github.com/graphql',
      {
        query: `
          query {
            user(login: "Ikarosv") {
              repositories(first: 100) {
                nodes {
                  id
                  name
                  description
                  homepageUrl
                  url
                  repositoryTopics(first: 8) {
                    nodes {
                      topic {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        `,
      },
      {
        headers: {
          Authorization: `Bearer ${PERSONAL_TOKEN}`,
        },
      },
    )

    // eslint-disable-next-line no-undef
    const repositories: GithubRepository.All[] =
      response.data.data.user.repositories.nodes.map((item) => ({
        ...item,
        repositoryTopics: item.repositoryTopics.nodes.map(
          (node) => node.topic.name,
        ),
      }))

    return NextResponse.json(repositories)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Erro ao obter projetos do GitHub' })
  }
}
