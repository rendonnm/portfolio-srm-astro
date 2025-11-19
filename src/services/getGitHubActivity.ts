import { GITHUB_API_URL, activityQuery } from '@/lib/constants/gitHub'
import type { GitHubCalendar } from '@/lib/types/gitHub'

interface QueryVariables {
  userName: string
  from: string
  to: string
}

interface GetGitHubActivityProps {
  variables: QueryVariables
}

export async function getGitHubActivity({ variables }: GetGitHubActivityProps) {

  const token = import.meta.env.GITHUB_TOKEN

  if (!token) {
    throw new Error("GITHUB_TOKEN is not configured")
  }

  const res = await fetch(GITHUB_API_URL, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query: activityQuery, variables }),
  })

  const data = await res.json()

  const calendar =
    data.data.user.contributionsCollection.contributionCalendar as GitHubCalendar;

  return calendar
}