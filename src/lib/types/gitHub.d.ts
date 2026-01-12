import type { gitHubColors } from "@/lib/constants/gitHub";

export type GitHubColors = keyof typeof gitHubColors;

export interface GitHubCalendar {
  totalContributions: number;
  weeks: Week[];
}

export interface Week {
  firstDay: Date;
  contributionDays: ContributionDay[];
}

export interface ContributionDay {
  date: Date;
  contributionCount: number;
  contributionLevel: GitHubColors;
}
