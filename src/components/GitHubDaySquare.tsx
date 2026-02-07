import { gitHubColors } from "@/lib/constants/gitHub";
import type { GitHubColors } from "@/lib/types/gitHub";

interface GitHubDayProps {
  level: GitHubColors;
}

export function GitHubDaySquare({ level }: GitHubDayProps) {
  const bgColor = gitHubColors[level];

  return <div className={`relative size-full ${bgColor} rounded-xs `}></div>;
}
