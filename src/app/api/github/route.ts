import axios from 'axios'

const PERSONAL_TOKEN = process.env.GITHUB_PERSONAL_TOKEN || ''

interface GithubResponse {
  data: {
    user: {
      pinnedItems: {
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
        query:
          'query { user(login: "Ikarosv") { pinnedItems(first: 6, types: REPOSITORY) { nodes { ... on Repository { id name description homepageUrl url repositoryTopics(first: 8) { nodes { topic { name } } } } } } } }',
      },
      {
        headers: {
          Authorization: `Bearer ${PERSONAL_TOKEN}`,
        },
      },
    )

    // eslint-disable-next-line no-undef
    const pinnedItems: GithubRepository.PinnedItems[] =
      response.data.data.user.pinnedItems.nodes.map((item) => ({
        ...item,
        repositoryTopics: item.repositoryTopics.nodes.map(
          (node) => node.topic.name,
        ),
      }))

    return Response.json(pinnedItems)
  } catch (error) {
    console.error(error)
    return Response.json({ error: 'Erro ao obter projetos do GitHub' })
  }
}
