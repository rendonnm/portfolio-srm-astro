export const gitHubUser = 'rendonnm'

export const gitHubColors = {
  "NONE": 'bg-[#151b23]',
  "FIRST_QUARTILE": 'bg-[#033a16]',
  "SECOND_QUARTILE": 'bg-[#196c2e]',
  "THIRD_QUARTILE": 'bg-[#2ea043]',
  "FOURTH_QUARTILE": 'bg-[#56d364]'
} as const

export const GITHUB_API_URL = "https://api.github.com/graphql";

export const activityQuery = `
        query ($userName: String!, $from: DateTime!, $to: DateTime!) {
          user(login: $userName) {
            contributionsCollection(from: $from, to: $to) {
              contributionCalendar {
                totalContributions
                weeks {
                  firstDay
                  contributionDays {
                    date
                    contributionCount
                    contributionLevel
                  }
                }
              }
            }
          }
        }
      `;