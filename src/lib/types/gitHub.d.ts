import type { gitHubColors } from "@/lib/constants/gitHub"

export type GitHubColors = keyof typeof gitHubColors

export type GitHubCalendar = {
  totalContributions: number;
  weeks: Array<{
    contributionDays: Array<{
      date: string
      contributionCount: number
      contributionLevel: GitHubColors
    }>;
  }>;
};